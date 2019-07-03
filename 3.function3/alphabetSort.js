function alphabetSort(message){
  // wirte your code here
	var strArray = new Array(message.length);
	for(let n = 0; n < message.length; n++) {//构建messages元素的字符数组
		strArray[n] = message.charAt(n);
	}
	
	for(let i = 1; i < strArray.length; i++) {//直接插入排序
		let temp = strArray[i];
		for(var j = i-1; j >= 0; j--) {
			if(strArray[j] > temp) {
				strArray[j+1] = strArray[j];
			}else {
				break;
			}
		}
		strArray[j+1] = temp;
	}
	
	message = '';
	strArray.forEach(function(item) {							//将排序好的字符拼接成字符串
		message += item;
	});
	
	return message;
}
console.log(alphabetSort('hello')); // should return 'ehllo'
