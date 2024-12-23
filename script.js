function firstWord(s) {
  // your code here
	const words = s.split(" ");
	if (words.length === 0 || words[0] === ""){
		return s; 
	}
	return words[0]; 
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
