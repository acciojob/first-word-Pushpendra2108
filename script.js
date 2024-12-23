function firstWord(s) {
  const words = s.trim().split(" ");
  
  if (words.length === 0) {
    return s; 
  }
  
  return words[0]; 
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
