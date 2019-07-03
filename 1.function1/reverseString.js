function reverseString(message){
  // wirte your code here
  var revStr = '';
  for(var inx = message.length - 1; inx >= 0; inx--) {
  	revStr += message.charAt(inx);
  }
  return revStr;
}
reverseString('hello'); // should return 'olleh'
