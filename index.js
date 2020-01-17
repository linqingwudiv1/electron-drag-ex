let {remote} = require('electron');

let mouseConstructor;
switch (process.platform) {
	case 'win32':
	{
		try {
			mouseConstructor =  require('win-mouse');
		} catch (error) {
			console.log(error);
		}

		break;
	}
	case 'sunos':
	{
		try {
			mouseConstructor = require('osx-mouse');
		} catch (error) {
			console.log(error);
		}
		break;
	}
}

const supported = !!mouseConstructor;
const noop = function() {console.error('[error]: platform is not support...');};

let drag = function(element) {
	if ( typeof element === 'string')
	{
		element = document.querySelector(element);
		if (element == null)
		{
			console.error(`element ${element} is not exist.`);
			return;
		}
	}
	//console.log( 'elect', element, typeof element, element.on);

	var offset = null;
	var mouse = mouseConstructor();

	var onmousedown = function(e) {
		// console.log('onmousedown : ', e);
		offset = [e.clientX, e.clientY]; 
	};

	element.addEventListener('mousedown', onmousedown) ;

	mouse.on('left-drag', function(x, y) {
		if(!offset) return;

		x = Math.round(x - offset[0]);
		y = Math.round(y - offset[1]);

		remote.getCurrentWindow().setPosition(x, y);
	});

	mouse.on('left-up', function() {
		offset = null;
	});

	return function() {
		element.removeEventListener('mousedown', onmousedown);
		mouse.destroy();
	};
};

if (!supported)
{
	drag = noop;
}

module.exports = drag;
