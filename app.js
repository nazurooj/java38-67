function task38_1() {
    var x = pw(2, 3)
    document.write(x);
}

function pw(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a
    }
    return result
}

function task38_2() {
    var input = prompt("Enter an year : ");
    find(input);
}
function find(a) {
    var i = ((a % 4 == 0) && ((a % 400 == 0) || (a % 100 != 0)));
    console.log(i);
    switch (i) {
        case true:
            alert("year is leap year " + a)
        default:
            alert("year is not a leap year " + a)
    }
}


function task38_4() {
    var a = +prompt("Marks gained in first subject")
    var b = +prompt("Marks gained in second subject")
    var c = +prompt("Marks gained in third subject")
    var average = average();
    var perc= perc(); 
    document.write= average + perc ;
}
function average(a, b, c) {
    return (a + b + c) / 3
}
function perc(a,b,c) {
 return (a,b,c)/3*100
}

function task38_5(char, word) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === char) {
            document.write(char + " is found at " + i);
            break;
        }
    }
}
task38_5("e", "lahore");

var word = "a quick brown fox jumps over a lazy dog";

function task38_6(dlt) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
            word = word.slice(0, i) + word.slice(i + 1, word.length);
        }
    }
    document.write(word)
}

function task38_7() {
    var para = "Please read this application and give me gratuity";
    var chek = para.toLocaleLowerCase();
    var occurance = new Array();
    for (var i = 0; i < chek.length; i++) {
        var val = chek.slice(i, i + 2);
        switch (val) {
            case "ae":
                occurance.unshift("ae");
                break;
            case "ao":
                occurance.unshift("ao");
                break;
            case "ai":
                occurance.unshift("ai");
                break;
            case "au":
                occurance.unshift("au");
                break;
            case "aa":
                occurance.unshift("aa");
                break;
            case "ea":
                occurance.unshift("ea");
                break;
            case "ee":
                occurance.unshift("ee");
                break;
            case "ei":
                occurance.unshift("ei");
                break;
            case "eo":
                occurance.unshift("eo");
                break;
            case "eu":
                occurance.unshift("eu");
                break;
            case "ia":
                occurance.unshift("ia");
                break;
            case "ie":
                occurance.unshift("ie");
                break;
            case "ii":
                occurance.unshift("ii");
                break;
            case "io":
                occurance.unshift("io");
                break;
            case "iu":
                occurance.unshift("iu");
                break;
            case "oa":
                occurance.unshift("oa");
                break;
            case "oi":
                occurance.unshift("oi");
                break;
            case "oo":
                occurance.unshift("oo");
                break;
            case "ou":
                occurance.unshift("ou");
                break;
            case "ua":
                occurance.unshift("ua");
                break;
            case "ue":
                occurance.unshift("ue");
                break;
            case "ui":
                occurance.unshift("ui");
                break;
            case "uo":
                occurance.unshift("uo");
                break;
            case "uu":
                occurance.unshift("uu");
                break;
        }
    }
    document.write("such occurance are" + occurance);
}


function task38_8() {
    var km = +prompt("Enter in KM");
    var mtr = km * 1000;
    document.write(mtr + " meters")
    task38_81(km)
    task38_82(km)
    task38_83(km)
}
function task38_81(distance) {
    var ft = distance * 3281;
    document.write(ft + " Feets")
}

function task38_82(distance) {
    var inch = distance * 39370;
    document.write(inch + " Inches")
}

function task38_83(distance) {
    var cent = distance * 100000;
    document.write(cent + " Centimeters")
}

function task38_9() {
    var hrs = +prompt("Enter value to calculate")
    if (hrs > 40) {
        hrs = hrs - 40;
        document.write("Overtime Salary is Rs." + hrs * 120);
    }
}
function change(){
        var amount=prompt("Enter amount to withdraw!!");
        var len=amount.length;
        var ten=amount.slice(len-2,len);
        if(ten >= 50){
            ten = ten-50;
            if(ten > 0){
                var unit=ten/10;
                document.write("You will have " + amount[0] + " hundreds notes 1 fifty note "+unit + " ten notes.");
            }else{
                var unit=ten/10;
                document.write("You will have " + amount[0] + " hundreds notes 1 fifty note ");
            }
        }else{
            if(ten > 0){
                var unit=ten/10;
                document.write("You will have " + amount[0] + " hundreds notes "+unit + " ten notes.");
            }else{
                document.write("You will have " + amount[0] + " hundreds notes ");
            }
    
        }
    }

function dlete(i){
        var data=document.getElementById("table1");
        var row=data.getElementsByTagName('tr');
        console.log(row[i])
    
    }
var count = 0;
function add() {
    count += 1;
    document.getElementById("counter").innerHTML = count
}

var count = 0;
function less() {
    count += -1;
    document.getElementById("counter").innerHTML = count
}


var modal = document.getElementById('id01');
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function detail() {
    var text = "that easily fits into your pocket, bag, or accessory Front to back, top to bottom, open to closed. Whichever way you look at it, the Galaxy Z Flip is one good-looking device.";
    var para = document.getElementById("para")
    para.innerHTML = text
}
function myCreateFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = "Mark 80";

}

function myDeleteFunction() {
    var table = document.getElementById("myTable");
    table.deleteRow(0);
    console.log("Delete")
}

