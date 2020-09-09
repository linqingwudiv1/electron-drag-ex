const child_process = require('child_process');

switch (child_process.platform) {
	case 'win32':
	{
        child_process.execSync('npm install --save win-mouse@2.0.0');
		break;
	}
	case 'sunos':
	{
		child_process.execSync('npm install --save osx-mouse@1.3.1');
		break;
	}
}
