function r(s) {
  // your code here
	let result = '';
    
		
	for(let i=0; i<s.length; i++){
		 if(s[i] !== ' '){
		  result += s[i];
		 }
		else{
			break;
		}
		
    }
	
	
  return result;
}
let res = r("rkskk ");
console.log(res);

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
