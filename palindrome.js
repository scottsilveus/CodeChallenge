function isPalindrome(str) {
	let isPalindrome = false;
	let noPunc  = str.replace(/[^\w]|/g, "").toLowerCase();
	let reversed = noPunc.split("").reverse().join("").toLowerCase();
	if (noPunc === reversed) {isPalindrome = true}
	return isPalindrome;
}