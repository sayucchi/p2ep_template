File directory
cpk
    bt_menu.bin$ "combat ui"
        2.gim "Image tile, combat UI, AUTO, RE, PACT, SKIP"
        6.png "Image tile, combat UI, NORMAL SINGLE Pact REAL SIMPLE"
        7.png "Image tile, combat UI, NORMAL SINGLE Pact"
        15.png "Image tile, combat UI, demon mood, Angry Happy Eager Scared"
    ca_cmn.bin$
        1.gim "Image tile, Casino game text"
        6.png "Image tile, playstation button symbols"
    card.bin$
        0.gim "Image, Casino playing card graphic"
    ch_menu.bin$ "ui elements"
        40.png "Image, Combat, Status effect background icon"
        41.png "Image tile, Combat, Status effect text icons"
        42.png "Image tile, Fortune telling effect"
    cm_menu.bin$ "ui elements"
        4.png "Image tile, UI elements, unused, inventory, status, persona"
        5.gim "Image, Key Items, In Lak'ech, graphic of the book and the text description"
        15.gim "Image, UI element, Pact"
        19.png "Image tile, UI elements Shortcut ON Delete Page Test Audio Next Page | Distribute Transform Condition Confirm Display Optimal Assume Execute Persona Details Effect Cancel Delete Switch Nullify Status Space Pact Mode Pause Menu Move Show Reset Input Auto Stule Kana Page View Back Help Next Stop Pass Play Size Fast Run Skill End Eng +-10"
        21.png "Image tile, UI Element, status command battle guard result analysis link skill attack order auto contact persona skill use item event item card equip city map town map shopping mall auto map condition config pact gallery entry system fusion item npc edit event edit tool menu new quest enemy edit phase edit music quest room quest menu strategy"
        24.png "Image tile, UI element, Status screen. sign blood level up bonus sp cost persona arcana level next rank type next exp skill lv. name assumed pact action fusion spell setting skills persona user item own arcana armor attack target legs accessory head body sex st vi dx ag lu lv. cut max demon director title mute admission affinity weapon defense"
        25.png "Image tile, status screen. st vi dx ag lu defense mattack mdefense attack"
        26.png "Image tile, enemy analysis screen. trait. normal drop rare drop 1. 2. 3. 4. 5. profile"
        27.png "image tile, equipment screen. weapon head body legs accessory"
        28.png "image, background for menu screens."
    EVTGB.BNP$ "ending epilogue slides"
        1_0001.png "the spectre has retreated to the deep corners of the subconscious: so too has her love, retreated to a world beyong her reach."
        2_0002.png "the city is showing signs of recovery... but many will never know the truth of what happened."
        3_0003.png "nonetheless, what he has left behind will live on in the hearts of the people."
        4_0004.png "at least, that's what i want to believe... i want to see his fire in their hearts..."
    gallerycg.bin$
        16.png  "gallery ui elements. no. title length play mode music style movie size."
    img_shop.bin$
        2.png "CD titles. erst zweit dritt viert"
        4.png "kuzunoha menu. spread registered solved searching request"
        6.png "special shop menus. type own value amount item amount menu title item amount coin amount price status details card course develop status oil fee material / needed equipped cost name rumor type"
    img_velvet.bin$
        6.png "velvet room menus. arcana own lv. name type needed components card assumed velvet stock party stock all stock rank result result amount"
        7.gim "velvet room cards. tarot card material card skill card incense card"
        8.png "velvet room card inventory. own total."
        10.png "velvet room menu background."
    result.bin$
        4.png "combat results, level up. max hp max sp."
        5.png "combat results. get exp money item lv. next exp:"
    shops
        gatten_sushi.gim "image. gatten sushi sign."
        hiiragi.gim "image. hiiragi psychotherapy sign."
        kuzunoha.png "image. kuzunoha agency sign."
        mu_continent.gim "image. mu sign."
        satomi.gim "image. satomi tadashi sign."
        shiraishi.png "image. izakaya shiraishi sign."
        sumaru_genie.gim "image. sumaru genie sign."
        time_castle.gim "image. time castle sign."
        tominaga.gim "image. tominaga chiropractic sign."
        toua_defense.gim "image. toua defense sign."
        trish.gim "image. trish's spring sign."
    syscg.bin$
        42.png "image tile. Special shop menus. total coin develop value fee."
        48.png "image tile. icon set."
    tilecg.bin$
        7.png "start of the game. disclaimer slide 1."
        13.png "start of the game. disclaimer slide 2."
eboot
    asm "these are scripts that are needed to make the mod work. do not alter them unless you know what you're doing."
        contact_script.js
        iso_loading.js
        locale.js
        misc_data.js
        strings.js "loads the string table."
        subtitles.js "enables the loading of subtitles in the fmv"
        symbols.js
        system.js "makes the playstation recognise that this is an english game."
        vwf.js "variable width font, makes the latin text less space hungry. if your localisation is monospaced, ie chinese or korean then you need to look at this file."
    obj "you should not make changes to these files."
    strings "tables referenced throughout the game, only edit the msg files. Do not rename files."
        tables
            elevators.json "Select floor prompt for lifts."
        arcana.msg "names of arcana and enemy types."
        aroma.msg "aromatherapy names and descriptions."
        battle.msg "text used in combat to deliver messages and describe the action."
        card.msg "names and descriptions of all cards, tarot cards, skill cards, incense cards, special summoning cards."
        confirmation.msg "a popup message informing the player that they cannot leave the ship until they've finished the double dungeon."
        conv.js "converts the data into the separate demon and persona tables. do not make changes to this file."
        demon.msg "name of demons and their bio"
        dragon.msg "fortune telling effects."
        event.msg "names of locations that appear in events."
        floor_name.msg "names of all areas that you can see in the map."
        food.msg "name of all purchasable food items and the description of their effect. Changing this text description will not change the in-game effect, just the text."
        item.msg "name and descriptions of all consumable items and equipment."
        key_items.msg "name and descriptions of all key items."
        location.msg "rooms available to use in the quest creator, unused in eternal punishment, baggage from innocent sin."
        map_help.msg "the map legend that explains the icons."
        menu.msg "the descriptive text that appears at the top of the screen when you hover over a menu option."
        old_tables.json.txt "obsolete master table, has been split into all the other tables."
        party.msg "names and bio of party members. Remember that tatsuya's name is a variable."
        persona.msg "names and descriptions of personas."
        rumor.msg "demon rumors, special skills and legendary weapons."
        search.msg "manhunt quest line, accepted correct answers."
        skill.msg "names and descriptions of combat abilities."
        tmp.msg "contains floor/door names"
    subs "subtitles for the 2 fmvs that have japanese voice acting."
        F0143.srt "video subtitles, tatsuya remembering maya's death on the other side."
        F0154.srt "video subtitles, tatsuya remembering the end of innocent sin, the final goodbye before everyone lost their memories."
font "if you need special characters for your translation you need to add them here. Replace an empty slot."
    font_info_small.json "this maps the contents of the font_small.png, in the correct coordinate (just count, they're in order) declare the symbol that you have drawn in the png file."
    font_info.json "this maps the contents of the font0 and font1 files, one after the after. Type in the symbol in the coordinate that matches the location that you drew your symbol into."
    font_small.png "this is a smaller sized font used in some parts of the game."
    font0.png "these two have the normal sized font used in most parts of the game. Open the font map in an image editing program and draw your special character as a 16x16 unit."
    font1.png
text "the main folder, contains the buld of the text of the game."
    contact
        _enemy.bnp$ "dialogue with demons during contact. Each file here is one enemy, many of them share tones and are duplicates."
            10, 50, 126, 156, 162, 172, 180 - lunatic tone
            184, 186, 188 - slime tone
            38, 40 - heeho tone
            78, 82, 96, 134, 144, 176 - sacred beast tone
            52, 60, 62, 68, 72, 74, 84, 86, 94, 98, 122, 124, 128, 138, 140, 234, 240, 244, 246 - beast tone
            4, 16, 100, 238 - old man tone
            20, 76, 106, 108, 130, 152, 178, 204, 206, 210, 212 - vamp tone
            8, 14, 56, 66, 70, 80, 110, 112, 116, 118, 142, 154, 158, 160, 164, 174, 182, 192 - suspicious fellow tone
            136, 190, 232, 236, 242 - lady tone
            6, 12, 48, 54, 58, 194, 196, 218, 220, 222, 224, 226, 228, 230 - gentleman tone
            88, 148, 208 - gal tone
            18, 36, 198, 200 - youth tone
            42, 44, 114, 120, 166, 168, 202 - boy tone
            34, 46, 90, 132, 146, 214 - girl tone
        _persona.bnp$ "persona talk, special contact initiated by your equipped persona when they encounter a demon they're connected to."
        _player.bnp£ "dialogue from the party members during contact. The files are in this order: first a party member alone, then all the duos, then all the trio combos."
    dngscn
    event "files to 253-254 only have dummy text, files 258 to 265 do not have text, files 267 onwards do not have text, don't modify them."
        249-252 - additional scenario zodiac dungeon text
        255-257 - additional scenario laboratory dungeon text
        266 - additional scenario dungeon text
    f_bw "boss battle dialogue"
        9_0000.msg "boss fight against tatsuya sudou, should match file 108"
        102_0000.msg "final boss fight, transition into phase 2, should match file 111."
        108_0000.msg "boss fight against tatsuya sudou, should match file 9"
        111_0000.msg "final boss fight, transition into phase 2, should match file 102."
    mmap "this contains overworld dialogue with map npcs."
        mmap01.msg "Rengedai overworld banter"
        mmap02.msg "hirasaka overworld banter"
        mmap03.msg "yumezaki overworld banter"
        mmap04.msg "aoba overworld banter"
        mmap05.msg "kounan overworld banter"
        mmap06.msg "narumi overworld banter"
        mmap07.msg "mt katatsumuri banter"
    cdshop.msg "dialogue in the cd shop. this shop is special since it's also a dungeon, that's why it's text is a separate folder."
    pdemo.msg "this is a list of all the summoning messages you hear when you fuse a persona."
mod.json "provide information about your mod here. Declare which game it is for (ep or is), which language you're translating to, which language you're translating from (for ep it is always jp, for innocent sin you can use the EU or NA release of the game as your base). You do not need to change the other values."