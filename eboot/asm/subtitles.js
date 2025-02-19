let dir = joinPath("eboot", "subs");

const subs = readDirectory(dir).filter((a) => a.endsWith(".srt"));
const numbers = subs.map((s) => parseInt(s.slice(2)) % 100);
console.log(subs, numbers);
section("mod");
align(4);
label("current_movie");
write_u32(0);
numbers.forEach((n) => write_u32(`F01${n}_SRT`));

let fps = 29.97; //guess
subs.forEach((s, i) => {
  let strings = [];
  let timeData = [];
  readTextFile(joinPath(dir, s), "utf-8")
    .replaceAll("\r", "")
    .split("\n\n")
    .forEach((a) => {
      let [, time, line] = a.split("\n");

      strings.push(line);
      let [start, end] = time
        .split(" --> ")
        .map((a) => a.split(":").map((b) => parseFloat(b.replace(/,\d+/))))
        .map((a) => (a[0] * 60 + a[1]) * 60 + a[2])
        .map((a) => Math.floor(a * fps));
      timeData.push([start, end]);
    });
  console.log(strings);
  console.log(timeData);
  strings.forEach((str, j) =>
  msgManager.addStringWithName(str, `F01${numbers[i]}_MSG${j}`, "font", 0xffff, true)
  );
  sym(`F01${numbers[i]}_SRT`, () => {
    timeData.forEach((td, j) => {
      write_u32(td[0]);
      write_u32(td[1] - td[0]);
      write_u32(`F01${numbers[i]}_MSG${j}`);
    });
  });
  write_u32(0xffffffff);
});

section("eboot");
org(0x8817368);
j("render_subs");
nop();
org(0x8817efc);
jal("determine_movie");

section("mod");
sym("determine_movie", () => {
  lbu($t0, 14, $a2); //get lowest 2 digits
  lbu($at, 15, $a2);
  addiu($t0, $t0, -0x30);
  addiu($at, $at, -0x30);
  sll($t0, $t0, 1);
  addu($at, $t0, $at);
  sll($t0, $t0, 2);
  addu($at, $t0, $at);
  lui_hi($t0, "current_movie");
  j("sprintf");
  sw($at, "current_movie", $t0);
});
sym("render_subs", () => {
  let stackSize = 0x30;
  addiu($sp, $sp, -stackSize);
  sw($ra, stackSize - 4, $sp);
  sw($s0, stackSize - 0xc, $sp);
  la($t0, "current_movie");
  lw($t1, 0, $t0);
  numbers.forEach((n) => {
    li($t2, n);
    beq($t2, $t1, "@@check_time");
    addiu($t0, $t0, 4);
  });
  j("@@ret"); //no subs for this movie
  nop();

  label("@@check_time");
  lw($t0, 0, $t0);
  lui_hi($t1, "movie_frame");
  lw($t2, 0x8edf068, $t1);
  beq($t2, $zero, "@@ret");
  lw($t1, "movie_frame", $t1);

  label("@@loop");
  lw($t2, 0, $t0); //get sub start
  blez($t2, "@@ret");
  subu($at, $t1, $t2);
  blez($at, "@@next");
  lw($t2, 4, $t0);
  subu($at, $t2, $at);
  blez($at, "@@next");
  lw($a0, 8, $t0);
  j("@@render_str");
  move($s0, $t0);

  nop();
  label("@@next");
  j("@@loop");
  addiu($t0, $t0, 0xc);

  label("@@render_str");
  lui_hi($at, "useSmallFont");
  lw($t0, "useSmallFont", $at);
  sw($t0, stackSize - 8, $sp);
  sw($zero, "useSmallFont", $at);
  li($a1, 480 / 2 + 1);
  li($a2, 272 - 16 * 2 - 2 + 1);
  li($a3, 0xe);
  li($t0, 0xe);
  li($t1, 0);
  // li($t2, -1);
  lui($t2, 0xff00);
  addiu($t3, $zero, -1);
  li($at, 1);
  jal("render_fstr_center");
  sw($at, 0, $sp);

  li($a1, 480 / 2);
  li($a2, 272 - 16 * 2 - 2);
  li($a3, 0xe);
  li($t0, 0xe);
  li($t1, 0);
  li($t2, -1);
  addiu($t3, $zero, -1);
  li($at, 1);
  lw($a0, 8, $s0);
  jal("render_fstr_center");
  sw($at, 0, $sp);

  lui_hi($at, "useSmallFont");
  lw($t0, stackSize - 8, $sp);
  sw($t0, "useSmallFont", $at);
  //end render_str

  label("@@ret");
  lw($ra, stackSize - 4, $sp);
  lw($s0, stackSize - 0xc, $sp);
  addiu($sp, $sp, stackSize);
  lw($v0, 0x8d41148, $s6);
  bne($v0, $zero, "@@test");
  move($s1, $v0);
  j(0x8817374);
  nop();
  label("@@test");
  j(0x88172b0);
  nop();
});
