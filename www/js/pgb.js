function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function myInfo() {

	info =  ''
	navigator.notification.alert(info);
	
}

function network(){
	network = navigator.connection;
	navigator.notification.alert(network);
}