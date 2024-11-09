"use strict";
console.log(document);
console.log(typeof document);
console.log(document.getElementById("dar"));
console.log(document.getElementById("light"));
//dom event handelling
document.getElementById("dar").onclick = function () {
  //get element by id is use to get the butoon
  console.log(document.body);
  document.body.style.background = "black";
  document.body.style.color = "white";
};
document.getElementById("ligh").onclick = function () {
  //get element by id is use to get the butoon
  console.log(document.body);
  document.body.style.background = "white";
    document.body.style.color = "red";
document.getElementById("ligh").style.background="green"
};

//entile web pase is selected by the document
