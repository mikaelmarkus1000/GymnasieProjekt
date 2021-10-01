// Varibles for this to work

var str = 0 
var int = 0
var con = 0
var wis = 0
var cha = 0
var dex = 0
var hp = 0
var hpm = 0
var pClass=""
var hitdie =""
// Varibles that need math  

var acro = 0;
var ani = 0;
var arca = 0;
var hth = 0;
var dec = 0;
var his = 0;
var ins = 0;
var intd = 0;
var inves = 0;
var med = 0;
var natu = 0;
var perpt = 0;
 var pref = 0;
var pers = 0;
var rel = 0;
var sligh = 0;
var sth = 0;
var surv = 0;


// Class hitpoint button

document.getElementById("classConfirm").style.display ="none";
function showClass(){
  document.getElementById("classConfirm").style.display = "block";
}

document.getElementById(classConfButton).addEventListener("click", showClass);