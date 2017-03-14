function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function myInfo() {

	info =  'Hi, Its me :-)' + '\n' +
			'=====' + '\n' +
			'My Name    : '     + Szymon  + '\n' + 
			'My surname : '  + Nitecki + '\n';
	navigator.notification.alert(info);
	
}