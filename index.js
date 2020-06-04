
function palendromeChecker(mystr) {
 let newstr = mystr.split("").reverse().join();
 if (newstr === mystr) {
     return true;
 } else{
     return false;
 }
 
}
console.log(palendromeChecker("noon"))