export class Patterns {
	emailPattern = new RegExp("^[\\w.%+-]{3,}@[a-z0-9.-]+\.[a-z]{2,4}$");
	loginPattern = new RegExp("[a-zA-Z0-9_-]{3,15}$");
	passwordPattern = new RegExp("^(?=.*[A-Z])(?=.*[0-9]).{6,32}$");
	firstnamePattern = new RegExp("^[a-zA-Z-]{2,30}$");
	lastnamePattern = new RegExp("^[a-zA-Z-]{2,30}$");
}
