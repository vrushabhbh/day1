"use strict";
document.getElementById("btn").onclick = function () {
  alert("happy diwaly");
  //checkint the button is working or not
  var data1 = document.getElementById("x1").value;
  var data2 = document.getElementById("x2").value;
  var data3 = document.getElementById("x3").value;

  console.log(isNaN(data2));

  console.log(data1);
  console.log(data2);
  console.log(data3);
  var msg = "";
  if (data1 == "" || data2 == "" || data3 == "") {
    msg = "please enter the all field";
  } else if (isNaN(data1) || isNaN(data2) || isNaN(data3)) {
    msg = "  all field must be number";
  } else if (data1 < 0 || data2 < 0 || data3 < 0) {
    msg = "all field must be positive or above";
  } else {
    var p = Number(data1);
    var r = parseFloat(data2);
    var n = parseInt(data3);

    r = r / 12 / 100;
    n = n * 12;
    var emi = (p * r *(1 + r) ** n) / ((1 + r) ** n - 1);
    var total = emi * n;
    var paiding = total - p;
    document.getElementById("y1").innerHTML = p;
    document.getElementById("y2").innerHTML = total;
    document.getElementById("y3").innerHTML = paiding;
    document.getElementById("y4").innerHTML = emi;
    }
    
    Highcharts.chart("container", {
      chart: {
        type: "pie",
      },
      title: {
        text: "Egg Yolk Composition",
      },
      tooltip: {
        valueSuffix: "%",
      },
      subtitle: {
        text: 'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>',
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: [
            {
              enabled: true,
              distance: 20,
            },
            {
              enabled: true,
              distance: -40,
              format: "{point.percentage:.1f}%",
              style: {
                fontSize: "1.2em",
                textOutline: "none",
                opacity: 0.7,
              },
              filter: {
                operator: ">",
                property: "percentage",
                value: 10,
              },
            },
          ],
        },
      },
      series: [
        {
          name: "Percentage",
          colorByPoint: true,
          data: [
            {
              name: "Interset",
              y: paiding,
            },
            {
              name: "loan",
              sliced: true,
              selected: true,
              y: p,
            },
           
          
            
          ],
        },
      ],
    });

  document.getElementById("result").innerHTML = msg;
};
