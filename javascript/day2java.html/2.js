document.getElementById("btn").onclick = function () {
  // alert("wrong selection");
  //confirm("are you sure want to saubmit the the details")
  // prompt("enter the you otp")
  //console.getElementById("result")
  var data = document.getElementById("x1").value;
  console.log(data);

//   var msg ="";
//   if (data ==" ") {
//     msg = "please enter the pincode";
//   } else if (data.length != 6) {
//     msg = "pincode should be the 6 digitd";
//   } else {
//     msg = "pincode is valid";
//   }
var msg=
    data == " "
        ? " please enter the pinvcode"
        : data.length != 6
            ? "pincode should be the 6 digitd"
            :"pincode is valid";
  console.log(document.getElementById("result"));
   document.getElementById("result").innerHTML=msg;
};
