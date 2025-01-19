function firstWord(s) {
  // your code here
	let r = '';
	for(i=0; i=s.length; i++){
		r += s[i];
		}
	if( s[i] == ''){
		break;
	}
  return r
}
let res = firstword(s);
console.log(res);

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
