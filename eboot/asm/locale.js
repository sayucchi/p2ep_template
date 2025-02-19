section("eboot");
org(0x8c7d56c);
sym("event2fontMap", () => {
  for (let i = 0; i < 0x0b45; i++) {
    let v = locale.font.utf2bin[locale.event.bin2utf[i]];
    if (locale.event.bin2utf[i] === undefined) v = 0;
    if (v === undefined){
      console.warn(`Unknown character mapping for ${i} ${locale.event.bin2utf[i]}`);
    }
    write_u16(locale.font.utf2bin[locale.event.bin2utf[i]]);
  }
});
