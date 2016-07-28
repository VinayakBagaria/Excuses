var excusesArray = ["My dog just threw up all over the apartment.","I broke my entire body. Pray for me.","I have a really terrible headache and I know you’re going to make it worse.","My neighbors are having really loud sex and I need to see how this plays out.","I’m alphabetizing my DVDs and also wondering why I’m still buying DVDs when I have Netflix, Hulu plus, and HBOgo.","I have to wait for the internet technician to come over and he still hasn’t shown.","I just threw up all over the apartment.","I totally forgot about (insert fictional person here) coming into town and I have to clean up.","I am feeling really emotional about Homeland and just need to be alone right now."];
var handleClick = function(){
  console.log(excusesArray.length);
  var n =  Math.floor((Math.random() * excusesArray.length));
  document.getElementById('the-excuse').innerHTML=excusesArray[n];
}
