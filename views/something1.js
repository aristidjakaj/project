var array = new Array(30);
var sum = 0;
var max = 0;
console.log(`blablabla`);
for (var i = 0; i < array.length; i++) {
  array[i] = Math.floor(Math.random()*40)+1;
  sum+=array[i];
  if(max<array[i]){
    max=array[i];
  }
}

var mesatare = sum/30;

document.write("<table border='1'><thead><tr><th colspan ='3'><h3>T&euml dh&eumlna p&eumlr vektorin</h3></th></tr></thead><tbody><tr id='rreshti1'><td>Numri i element&eumlve</td><td>Mesatarja</td><td>Vlera m&euml e madhe</td></tr><tr id='rreshti2'><td>30</td><td>"+ mesatare +"</td><td>"+ max +"</td></tr></tbody></table>");
