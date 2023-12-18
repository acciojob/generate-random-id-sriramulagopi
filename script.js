function makeid(l) {
  // write your code here
    let str="";
    while(str.length<l){
        let ran = Math.floor(Math.random()*123);
        if ((ran>47 && ran<58) || (ran>64 && ran<91) || (ran>96 && ran<123)){
            str+=String.fromCharCode(ran);
        }
    }
	return str;
}
// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

