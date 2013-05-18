// TODO
// import data into LS
(function ( $ ) {
    $.fn.txt2text = function ( options ) {
        load();
        this.on('keyup',function(e){
            if(e.keyCode === 32){
                this.value = replaceValues(this.value);
            }
        });

        function replaceValues( fieldval ){
            var splitarr = fieldval.split($.fn.txt2text.re);
            for (var i = 0; i < splitarr.length; i++) {
                val = localStorage[splitarr[i]];
                if ( val !== undefined ) {
                    fieldval = fieldval.replace(splitarr[i], val);
                }
            }
            return fieldval;
        }
    };

    // Load all the abbrevs into LS
    function load() {
        for (var i = 0; i < $.fn.txt2text.array1.length; i++) {
            localStorage.setItem($.fn.txt2text.array2[i], $.fn.txt2text.array1[i]);
        }
    }

    $.fn.txt2text.re = new RegExp('[ \t]');

    $.fn.txt2text.array1 = [
        'oh my god',
        'laugh out loud',
        'roll on the floor laughing',
        'really',
        ' you'
    ];

    $.fn.txt2text.array2 = [
        'omg',
        'lol',
        'rofl',
        'rly',
        ' u'
    ];
}( jQuery ));