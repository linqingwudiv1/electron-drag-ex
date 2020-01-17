const child_process = require('child_process');
switch (process.platform) {
	case 'win32':
	{
        //process.execSync('npm install --save win-mouse@1.3.0');
		break;
	}
	case 'sunos':
	{
		//process.execSync('npm install --save osx-mouse@1.3.1');
		break;
	}
}
