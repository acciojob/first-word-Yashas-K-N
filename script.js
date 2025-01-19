function r(s) {
  // your code here
	let result = '';
    
		
	for(let i in s){
		 if(s[i] !== ' '){
		  result += s[i];
		 }
		else{
			break;
		}
		
    }
	
	
  return result;
}
let res = r(s);
console.log(res);

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
