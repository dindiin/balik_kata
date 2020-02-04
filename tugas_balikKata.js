// function balikKata(kata) {
//   var kata = "Niomic!";
//   // for(var i = 0; i < kata.length; i++){
//   //   console.log(kata.charAt(i));
//   for(let i= kata.length -1; i >=0; i--){
//     console.log(kata.charAt(i));
//   }
//   return kata;
// }
//
// balikKata();

function balikKata(data) {
  var kata = "";
  for(var i= data.length -1; i >=0; i--){
    kata += data.charAt(i);
  }
  return kata;
}

console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));
