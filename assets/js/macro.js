var doublekey = localStorage.getItem("doubleSplitKey");
var triplekey = localStorage.getItem("tripleSplitKey");
var sixteenkey = localStorage.getItem("sixteenSplitKey");
var sixtyfourkey = localStorage.getItem("sixtyfourSplitKey");




canclick=true
document.addEventListener('keydown', 
	function (event) {
		if (canclick) {;
			if ( event.key == sixteenkey ) { // нажата клавиша Esc
				setTimeout(function() {
					window.onkeydown({keyCode: 32}); // 32 - Space Bar
					window.onkeyup({keyCode: 32});
				}, 50);
				setTimeout(function() {
					window.onkeydown({keyCode: 32}); // 32 - Space Bar
					window.onkeyup({keyCode: 32});
				}, 100);
				setTimeout(function() {
					window.onkeydown({keyCode: 32}); // 32 - Space Bar
					window.onkeyup({keyCode: 32});
				}, 150);
				setTimeout(function() {
					window.onkeydown({keyCode: 32}); // 32 - Space Bar
					window.onkeyup({keyCode: 32});
				}, 200);
				canclick=false	
			}
		}
    });

document.addEventListener('keydown', 
	function (event) {
		if (canclick) {;
			if ( event.key == triplekey ) { // нажата клавиша Esc
				setTimeout(function() {
					window.onkeydown({keyCode: 32}); // 32 - Space Bar
					window.onkeyup({keyCode: 32});
				}, 50);
				setTimeout(function() {
					window.onkeydown({keyCode: 32}); // 32 - Space Bar
					window.onkeyup({keyCode: 32});
				}, 100);
				setTimeout(function() {
					window.onkeydown({keyCode: 32}); // 32 - Space Bar
					window.onkeyup({keyCode: 32});
				}, 150);
				canclick=false	
			}
		}
    });

document.addEventListener('keydown', 
	function (event) {
		if (canclick) {;
			if ( event.key == doublekey ) { // нажата клавиша Esc
				setTimeout(function() {
					window.onkeydown({keyCode: 32}); // 32 - Space Bar
					window.onkeyup({keyCode: 32});
				}, 50);
				setTimeout(function() {
					window.onkeydown({keyCode: 32}); // 32 - Space Bar
					window.onkeyup({keyCode: 32});
				}, 100);
				canclick=false	
			}
		}
    });

(function() {
    var amount = 6;
    var duration = 50; //ms
 
    var overwriting = function(evt) {
        if (evt.keyCode === 87) { // KEY_W
            for (var i = 0; i < amount; ++i) {
                setTimeout(function() {
                    window.onkeydown({keyCode: 87}); // KEY_W
                    window.onkeyup({keyCode: 87});
                }, i * duration);
            }
        }
    };
 
    window.addEventListener('keydown', overwriting);
})();


document.addEventListener('keyup', function (event) {
	if ( event.key == sixteenkey ) { // нажата клавиша Esc
		canclick=true		
    }
	if ( event.key == triplekey ) { // нажата клавиша Esc
		canclick=true		
    }
	if ( event.key == doublekey ) { // нажата клавиша Esc
		canclick=true		
    }
})

