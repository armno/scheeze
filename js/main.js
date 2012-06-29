window.onload = function() {

	var list = {
		init : function() {
			
			var input = document.querySelector('#new-shit');

			list.loadShits(); // display existing shits

			input.addEventListener('keypress', function(e) {

				if ( e.charCode === 13 ) { // catch enter key
					var newShit = this.value;
					if ( newShit === 'clear') {
						list.clearShits();
					} else {
						list.addShit(this.value)
					}
					this.value = ''; // clear typed values
				}

			});		
		},
		loadShits : function() {
			// inspect localStorage
			var shits = JSON.parse(localStorage.getItem('shits')),
				list = document.querySelector('ol');

			if ( shits ) {
				shits.forEach(function(e) {
					var li = document.createElement('li');
					li.textContent = e.item;
					list.appendChild(li);
				});
			}

		},
		addShit : function(newShit) {

			var shitList = document.querySelector('ol'),
				li = document.createElement('li'),
				shits = JSON.parse(localStorage.getItem('shits')) || [];

			// append new item into the list
			li.textContent = newShit;
			shitList.appendChild(li);

			// get all current shits and append this new one
			shits.push({
				'item' : newShit
			});

			localStorage.setItem('shits', JSON.stringify(shits));
		},
		clearShits : function() {
			localStorage.removeItem('shits');

			var shitList = document.querySelector('ol');
			shitList.innerHTML = '';

		}
	};

	list.init();
}
