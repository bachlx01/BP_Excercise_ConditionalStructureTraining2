function Excercise1() {
    let Degrees = prompt("Enter 'C' if you want to exchange from Celsius to Fahrenheit and enter 'F' vice versa");
    let v = prompt('Enter value');
    let exchange;
    if (Degrees == 'f' || Degrees == 'F') {
        exchange = Math.round((v - 32) * 5 / 9);
        alert(v + ' Celsius as ' + exchange + ' Fahrenheit');
    } else if (Degrees == 'c' || Degrees == 'C') {
        exchange = v * 9 / 5 + 32;
        alert(v + ' Fahrenheit as ' + exchange + ' Celsius');
    }
}

function excercise2 () {
    let meter = prompt('Enter the meter value')
    let ft = meter*3.2808;
    alert('The feet value is: ' + ft);
}

function excercise3 () {
    let side = prompt('Enter a side of square');
    let area = side*side;
    alert('The area of square is ' + area);
}

function excercise4 () {
    let height = prompt('Enter the height:');
    let width = prompt('Enter the Width: ');
    let area = height*width;
    alert('The area of this rectangle is ' + area);
}
function excercise5 () {
    let a = prompt('Enter the height of Triangle:');
    let b = prompt('Enter the width of Triangle:');
    let area = a*b/2;
    alert('The area of this triangle is: ' + area);
}

function excercise6 (){
    let a = parseFloat(prompt('solve the equation ax+b=0, enter parameter a'));
    let b = parseFloat(prompt('solve the equation ax+b=0, enter parameter b'));

    if (a==0){
        if (b==0){
            alert('Infinitely manu solutions');
        }
        else {
            alert("No solution");
        }
    }
    else{
        let c = -b/a;
        alert('The equation has one solution x = ' + c );
    }
}

function excercise7 () {
    let a = parseFloat(prompt('The Quadratic equation has 3 parameters a, b, c. Enter a: '));
    let b = parseFloat(prompt('The Quadratic equation has 3 parameters a, b, c. Enter b: '));
    let c = parseFloat(prompt('The Quadratic equation has 3 parameters a, b, c. Enter c: '));
    let discriminant = b*b - 4*a*c;

    if (discriminant > 0) {
        let x1 = (-b+Math.sqrt(discriminant))/(2*a);
        let x2 = (-b-Math.sqrt(discriminant))/(2*a);
        alert('There are 2 real roots x1 = ' + x1 + " and x2 = " + x2);
    }
    else if (discriminant==0) {
        let x3 = -b/2*a;
        alert('There is one root x1 = x2 = ' + x3);
    }
    else {
        alert('There are no roots');
    }
}

function excercise8 () {
    let age = prompt('Enter the age: ');

    if (age<120&&age>0) {
        alert('This is the age of person');
    }
    else {
        alert('This is not age of person');
    }
}

function excercise9 () {
    let a = parseInt(prompt('Enter an integer: '));
    let b = parseInt(prompt('Enter an other integer: '));
    let c = parseInt(prompt('Enter an other integer: '));
    if (a>0 && b>0 && c>0) {
        if (a + b > c && b + c > a && a + c > b) {
            alert('These is the sides of a Triangle');
        }
    }
    else {
        alert('These is not the sides of a Triangle');
    }
}

function excercise10() {
    let kwh = prompt('Enter your power (unit: kWh): ');

    if (kwh > 400) {
        alert('Your power fee is: ' + Math.ceil(kwh * 2.587) * 1000 + ' VND');
    } else if (kwh > 300) {
        alert('Your power fee is: ' + Math.ceil(kwh * 2.503) * 1000 + ' VND');
    } else if (kwh > 200) {
        alert('Your power fee is: ' + Math.ceil(kwh * 2.242) * 1000 + ' VND');
    } else if (kwh > 100) {
        alert('Your power fee is: ' + Math.ceil(kwh * 1.786) * 1000 + ' VND');
    } else if (kwh > 50) {
        alert('Your power fee is: ' + Math.ceil(kwh * 1.533) * 1000 + ' VND');
    } else if (kwh > 0) {
        alert('Your power fee is: ' + Math.ceil(kwh * 1.484) * 1000 + ' VND');
    } else {
        alert('the power was wrong, Please check and enter again!');
    }
}

function excercise11 () {
    let salary = parseInt(prompt('Enter the salary: '));
    let pit;
    if (salary > 9000000 && salary < 15000000) {
        pit = (salary-9000000)*0.05;
        alert(pit);
    }
    else if (salary < 20000000) {
        pit = (salary-9000000)*0.1;
        alert(pit);
    }
    else {
        pit = (salary-9000000)*0.15;
        alert(pit);
    }
}

function excercise12 () {
    let initialLoan = parseInt(prompt('Enter the initial loan:'));
    let interestRate = parseInt(prompt('Enter the interest rate (unit %)'));
    let count = parseInt(prompt('Enter the count of month: '));
    let interest = 0;
    if (count==1) {
        interest = initialLoan * (interestRate/100);
        alert('The total interest is: ' + interest);
    }
    else {
        for (i=1;i<count;i++) {
            initialLoan += initialLoan*(interestRate/100);
        }
        interest = initialLoan*(interestRate/100);
        alert('The total interest is: ' + interest);
    }
}