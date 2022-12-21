
var name = prompt("What is your name?","Arianna");
var lastName = prompt("And lastname?","Liss");
var ageStr = prompt("How old are you?","21");
var age = parseInt(ageStr);
var adult = age>=18;

document.write(
    "<div class='grid'>" +
    "<header>"+
    "Hi, " + name + " " + lastName + "!</br>" +
    "You are " + age + "!</br>");
if (adult) {
    document.write("You are welcome!</br>")
} else {
    document.write("Hi, child! Where are your parents?</br>")
}
document.write(
    "</header>");

if (adult){
    var num1Str = prompt("Input please 3 numbers. Number 1:",1);
    var num2Str = prompt("Input please 3 numbers. Number 2:",2);
    var num3Str = prompt("Input please 3 numbers. Number 3:",3);

    var num1 = parseFloat(num1Str);
    var num2 = parseFloat(num2Str);
    var num3 = parseFloat(num3Str);

    var avg = (num1 + num2 + num3) / 3;
    
    document.write("<nav>Average number of ["+ num1 + ", " + num2 + ", " + num3 + "] is " + avg + "</nav>")
} else {
    document.write("<nav>Here could be some difficult calculation.</nav>");
    }


document.write("<main><section id='object'></section>");



var x = 6, y = 14, z = 4;

document.write("<section><h2>Initial meanings: x = " + x + " y = " + y + " z = " + z + "</h2><div class='examples'>");


x = 6, y = 14, z = 4;
x += y - x++ * z;
document.write("<div>x += y - x++ * z </br> x = " + x + " y = " + y + " z = " + z + "</br><br/>" +
               "x * z = 24</br>" +
               "x++ -> x==7</br>" +
               "y - 24 = -10</br>" +
               "x+=-10 -> x is -4?</br>"
               );

x = 6;
x += x++;
document.write("<br/>if x=6<br/>x += x++<br/>x is " + x + "<br/>Is postfix increment ignored??!</br></br></div>")

x = 6, y = 14, z = 4;
z = --x - y * 5;
document.write("<div>z = --x - y * 5 </br> x = " + x + " y = " + y + " z = " + z + "</br></br>"+
    "--x = 5</br>y * 5 = 70</br>5 - 70 = 65<br/>z=65</div>");

x = 6, y = 14, z = 4;
y /= x + 5 % z;
document.write("<div>y /= x + 5 % z </br> x = " + x + " y = " + y + " z = " + z + "</br></br>" +
    "5 % z = 1</br> x + 1 = 7</br>y /= 7 = 2</div>");

x = 6, y = 14, z = 4;
var res = z - x++ + y*5;
document.write("<div>z - x++ + y*5 = " + res + "</br> x = " + x + " y = " + y + " z = " + z + "</br></br>" + 
    "y * 5 = 70</br>z - x + 70 =<br/>4 - 6 + 70 = 68</br> x++ is 7</div>");

x = 6, y = 14, z = 4;
x = y - x++ * z;
document.write("<div>x = y - x++ * z </br> x = " + x + " y = " + y + " z = " + z + "</br></br>" +
    "x * z = 24</br>y - 24 = -10</br>x++ is 7</br>x=-10</div></div>");

//figures

document.write('<div class="figures"><div>');

//square

for(let i = 0; i < 10; i++){
    if (i===0 || i===9){
        for(let j = 0; j < 10; j++){
            document.write("*");
        }
    }
    else {
        document.write("*");
        for (let j = 1; j < 9; j++){
            document.write("&nbsp");
        }
        document.write("*");
    }
    document.write("<br/>");
}
document.write("</div><div>");

//isosceles triangle

for(let i = 0; i < 10; i++){
    for(let j = 0; j <= i; j++){
        document.write("*");
    }
    document.write("<br/>");
}
document.write("</div><div>");

//right triangle

for(let i = 0; i < 10; i++){
    for(let j = 0; j <= i; j++){
        document.write("*");
    }
    for(let j = i; j < 10; j++){
        document.write("&nbsp");
    }
    document.write("<br/>");
}
document.write("</div><div>");

//rhombus
for(let i = 0; i <= 5; i++){
    for(let j = 0; j <= i; j++){
        document.write("*");
    }
    document.write("<br/>");
}
for(let i = 4; i >= 0; i--){
    for(let j = 0; j <= i; j++){
        document.write("*");
    }
    document.write("<br/>");
}
document.write("</div></div><div id='hw3'></div>"+
    "</section></main>" +
    "<footer>Calculated by Arianna Liss</footer>" +
    "</div>"
    );
