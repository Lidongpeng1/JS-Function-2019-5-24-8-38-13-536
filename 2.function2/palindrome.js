function palindrome(message){
  // wirte your code here
  for(var low = 0; low < message.length/2; low++) {
  	var high = message.length - low - 1;
  	if(message.charAt(low) != message.charAt(high)) {
  		break;
  	}
  }  
  if(low == Math.ceil(message.length/2)) {
  	return true;
  }else {
  	return false;
  }
}

console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true
