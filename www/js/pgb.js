function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function myInfo() {

	info =  'Cze�� to ja'
	navigator.notification.alert(info);
	
}