function firstWord(s) {
  // your code here
	const words = s.split(" ");
	if (words == [""] ){
		return s; 
	}
	return words; 
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
