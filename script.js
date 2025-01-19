function r(s) {
  // your code here
	let result = '';
    
		
	for(let i of s){
		 if(s !== ' '){
		  result += s;
		 }
		else{
			break;
		}
		
    }
	
	
  return result;
}
let res = r();
console.log(res);

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
