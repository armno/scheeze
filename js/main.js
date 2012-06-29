window.onload = function() {

	var list = {
		init : function() {

			list.loadShits();

			var input = document.querySelector('#new-shit');
			input.addEventListener('keypress', function(e) {

				if ( e.charCode === 13 ) { // catch enter key
					list.addShit(this.value)
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

			var list = document.querySelector('ol'),
				li = document.createElement('li');

			// append new item into the list
			li.textContent = newShit;
			list.appendChild(li);

			// the clear input value
			// this.value = '';

			// get all current shits and append this new one
			var shits = JSON.parse(localStorage.getItem('shits'));

			if ( !shits ) {
				shits = [];
			}

			shits.push({
				'item' : newShit
			});

			localStorage.setItem('shits', JSON.stringify(shits));
		}
	};

	list.init();
}
