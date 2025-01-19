function firstWord(s) {
  // your code here
	let r = '';
    
		
	for(let i=0; i=s.length; i++){
		 if( s[i] !== ''){
		  r += s[i];
		 }
		else{
			break;
		}
		return r;
    }
	
	
  return r
}
let res = firstword(s);
console.log(res);

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
