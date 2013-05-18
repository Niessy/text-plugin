// TODO
// import data into LS
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

    function replaceValues( fieldval ){
        var splitarr = fieldval.split(whitespace);
        for (var i = 0; i < splitarr.length; i++) {
            var word = splitarr[i].toLowerCase();
            var p = word.match(punctuation);
            if (p !== null) {
               word = word.replace(punctuation, '');
            }
            var val = localStorage[word];
            if ( val !== undefined ) {
                splitarr[i] = localStorage[word];
                if ( p !== null ) {
                    splitarr[i] += p[0];
                }
            }
        }
        fieldval = splitarr.join(" ");
        return fieldval;
    }

    // Load all the abbrevs into LS
    function load() {
        for (var i = 0; i < $.fn.txt2text.array1.length; i++) {
            localStorage.setItem($.fn.txt2text.array2[i], $.fn.txt2text.array1[i]);
        }
        localStorage.setItem("txt2textisLoaded", true);
        console.log("Loaded txt2text");
    }

    var whitespace = new RegExp("[\\s]+");
    var punctuation = new RegExp("[!?.,;()]");

    $.fn.txt2text.addPhrase = function(shortform, longform) {

    };

    $.fn.txt2text.array1 = [
        'oh my god',
        'laugh out loud',
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
         'what the hell',
         'ya really',
         "you're on your own",
         "you're welcome",
         'you know what',
        'be right there'
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
        'wth',
        'yarly',
        'yoyo',
        'yw',
        'ykw',
        'brt'
    ];
}( jQuery ));