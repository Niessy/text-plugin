// No options yet, but maybe later?
(function ( $ ) {
    $.fn.txt2text = function ( options ) {
        if ( localStorage["txt2textisLoaded"] === undefined ) {
            load();
        }
        this.on('keyup',function(e){
            if(e.keyCode === 32){
                this.value = replaceValues(this.value);
            }
        });

    };

    // Returns a new string with a space before a newline
    // in order for split to work with newlines^^^
    function handleNewLines( fieldval ) {
      len = fieldval.length;
      var newfield = "";
      for (var c = 0; c < len; c++) {
          if (fieldval[c] === '\n') {
              newfield += " ";
          }
          newfield += fieldval[c];
      }
      return newfield;
    }

    // Replaces acronyms with corresponding phrases in localStorage
    function replaceValues( fieldval ){
        fieldval = handleNewLines( fieldval );
        var splitarr = fieldval.split( whitespace );
        for (var i = 0; i < splitarr.length - 1; i++) {
            var originalWord = splitarr[i];
            var numNLetters = splitarr[i];
            if ( originalWord.match(lettersAndNumbers) !== null ) {
                numNLetters = originalWord.match(lettersAndNumbers)[0];
            }
            var allCapped = originalWord === originalWord.toUpperCase();
            var lcWord = numNLetters.toLowerCase();
            var val = localStorage[lcWord];
            if ( val !== undefined ) {
                splitarr[i] = localStorage[lcWord];
                if ( allCapped ) {
                    splitarr[i] = splitarr[i].toUpperCase();
                } else if ( originalWord[0].match(capitals) !== null && originalWord[0].match(digits) === null) {
                    var norm = splitarr[i][0],
                        uc   = splitarr[i][0].toUpperCase();
                    splitarr[i] = splitarr[i].replace(norm, uc);
                }
                splitarr[i] = originalWord.replace(numNLetters, splitarr[i]);

            }
        }
        fieldval = splitarr.join(" ");
        return fieldval;
    }

    // Load all the abbreviations into LS
    function load() {
        for (var i = 0; i < $.fn.txt2text.array1.length; i++) {
            localStorage.setItem($.fn.txt2text.array2[i], $.fn.txt2text.array1[i]);
        }
        localStorage.setItem("txt2textisLoaded", true);
        console.log("Loaded txt2text");
    }

    // var whitespace = new RegExp("[^\\S\\n]+");
    var whitespace = new RegExp(" ");
    var capitals = new RegExp("[A-Z]");
    var digits = new RegExp("[\\d]");
    var lettersAndNumbers = new RegExp("[A-z0-9]+");

    $.fn.txt2text.addPhrase = function(acronym, phrase) {
        if ( localStorage[acronym] === undefined) {
            localStorage.setItem(acronym, phrase);
            console.log("Added", acronym, "=>", phrase, "to localStorage.");
        } else {
            console.log("That's all already there!!!");
        }
    };

    $.fn.txt2text.array1 = [
        'oh my god',
        'haha',
        'roll on the floor laughing',
        'really',
        'you',
        'second',
        'seconds',
        'one second',
        'tomorrow',
        'tomorrow',
        'tomorrow',
        'tomorrow',
        'tomorrow',
        'tomorrow',
        'as far as I know',
        'away from keyboard',
        'good game',
        'good luck and have fun',
        'good luck and have fun',
        'as soon as possible',
        'at the moment',
        'be back in a bit',
        'be right back',
        'by the way',
        'see you',
        'see ya',
        "don't feed the trolls",
        'do not disturb',
        'dead on arrival',
        'frequently asked questions',
        'fuck you',
        'for your information',
        'for the loss',
        'for the win',
        'get back to work',
        'good for you',
        'good job',
        'get the fuck out',
        'great',
        'have fun',
        'hate',
        "I don't care",
        "I don't know",
        'in real life',
        'in other words',
        'joke',
        'jokes',
        'jkz',
        'learn to play',
        'later',
        'later',
        'looking for a group',
        'let me know',
        'long time no see',
        'massively multiplayer online game',
        'massively multiplayer online roll playing game',
        'roll playing game',
        'mate',
        'may the force be with you',
        'anyone',
        'anyone',
        'anyone',
        'anyone',
        'anyone',
        'anyone',
        'mind your own business',
        'oh really',
        'oh really',
        'oh really',
        'oh my fucking god',
        'fool of a took',
        'you shall not pass',
        'oh I see',
        'on my way',
        'on the other hand',
        'operating system',
        'peer to peer',
        'piece of shit',
        'people',
        'password',
        'point of view',
        'pissing myself laughing',
        'please let me know',
        'quoted for truth',
        'real life',
        'shut the fuck up',
        'to be honest',
        'thank you',
        'talk to you later',
        'to whom it may concern',
        'wait',
        'way to go',
        'way to go',
        'well played',
        'what do you got',
        'what the fuck',
        'ya really',
        "you're on your own",
        "you're welcome",
        'you know what',
        'be right there',
        'my face when',
        "too long didn't read",
        "laughing my ass off",
        'laughing my fucking ass off',
        'too long',
        "didn't read",
        'are',
        'before',
        'today',
        'thanks',
        'why',
        'for',
        'forget',
        'picture',
        'pictures',
        'what',
        'this',
        'easy',
        'your',
        'you only live once',
        'congratulations',
        'girlfriend',
        'boyfriend',
        'good luck',
        'if I recall correctly',
        'in my opinion',
        'in my honest opinion',
        'not safe for work',
        'no problem',
        'nevermind',
        'not safe for life',
        'not much',
        'not too much',
        'whatever',
        'with respect too',
        'asian',
        'between',
        'birthday',
        'birthday',
        'bull shit',
        'because',
        'bye',
        'bad ass mother fucker',
        'January',
        'February',
        'March',
        'April',
        'August',
        'September',
        'Octoboer',
        'November',
        'December',
        "I don't know",
        "don't know",
        'because',
        'that',
        'fuck my  life',
        'favorite',
        'because',
        'got to go',
        'tonight',
        'tonight',
        'no problem',
        'I see',
        'oh',
        'okay',
        'laughed out loud',
        'lauging out loud',
        'obviously',
        'please',
        'please',
        'seriously',
        'seriously',
        'ready',
        'what'
    ];

    $.fn.txt2text.array2 = [
          'omg',
          'lol',
          'rofl',
          'rly',
          'u',
          'sec',
          'secs',
          '1sec',
          'tmrw',
          '2mrw',
          '2maro',
          '2marrow',
          '2moz',
          '2mozz',
          'afaik',
          'afk',
          'gg',
          'glhf',
          'gl hf',
          'asap',
          'atm',
          'bbiab',
          'brb',
          'btw',
          'cu',
          'cya',
          'dftt',
          'dnd',
          'doa',
          'faq',
          'fu',
          'fyi',
          'ftl',
          'ftw',
          'gbtw',
          'gfu',
          'gj',
          'gtfo',
          'gr8',
          'hf',
          'h8',
          'idc',
          'idk',
          'irl',
          'iow',
          'jk',
          'jks',
          'jkz',
          'l2p',
          'l8er',
          'l8r',
          'lfg',
          'lmk',
          'ltns',
          'mmo',
          'mmorpg',
          'rpg',
          'm8',
          'mtfbwu',
          'n1',
          'ne1',
          'ne one',
          'ne 1',
          'any1',
          'any 1',
          'myob',
          'orly',
          'o rly',
          'o really',
          'omfg',
          'foat',
          'ysnp',
          'oic',
          'omw',
          'otoh',
          'os',
          'p2p',
          'pos',
          'ppl',
          'pw',
          'pov',
          'pmsl',
          'plmk',
          'qft',
          'rl',
          'stfu',
          'tbh',
          'ty',
          'ttyl',
          'twimc',
          'w8',
          'wtg',
          'w2g',
          'wp',
          'wug',
          'wtf',
          'yarly',
          'yoyo',
          'yw',
          'ykw',
          'brt',
          'mfw',
          "tl;dr",
          'lmao',
          'lmfao',
          'tl',
          'dr',
          'r',
          'b4',
          '2day',
          'thx',
          'y',
          '4',
          '4get',
          'pic',
          'pics',
          'wat',
          'dis',
          'ez',
          'ur',
          'yolo',
          'gratz',
          'gf',
          'bf',
          'gl',
          'iirc',
          'imo',
          'imho',
          'nsfw',
          'np',
          'nvm',
          'nsfl',
          'nm',
          'n2m',
          'w/e',
          'wrt',
          'azn',
          'b/w',
          'b-day',
          'bday',
          'bs',
          'b/c',
          'bai',
          'bamf',
          'jan',
          'feb',
          'mar',
          'apr',
          'aug',
          'sept',
          'oct',
          'nov',
          'dec',
          'idunno',
          'dunno',
          'cuz',
          'dat',
          'fml',
          'fav',
          'bcuz',
          'g2g',
          '2nite',
          '2night',
          'np',
          'ic',
          'o',
          'kay',
          "lol'd",
          'lawl',
          'obv',
          'plz',
          'pls',
          'srs',
          'srsly',
          'rdy',
          'wut'
    ];
}( jQuery ));