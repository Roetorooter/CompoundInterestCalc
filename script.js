// Basic Compound Interest Calculator

// let principal = prompt("Please enter your principal balance")
// let interest = prompt("Please enter your interest rate")
// let timesComp = prompt("Please enter how often your interest is compounded")
// let time = prompt("Please enter how many time periods you would like")

// let total = (principal * (1 + (interest / timesComp)) ** (timesComp * time))

// console.log(total)


// let yearlyGross = [];

// let principal = prompt("Please enter your principal balance");
// // let monthly = prompt("Please enter your monthly contributions");
// let interest = prompt("Please enter your interest rate");
// let timesComp = prompt("Please enter how often your interest is compounded");
// let totalTime = prompt("Please enter how many time periods you would like");

// for (let i = 0; i < totalTime; i++) {
//     // let starting = principal;
//     let total = (principal * (1 + (interest / timesComp)) ** (timesComp * totalTime))
//     yearlyGross.push(total);
//     console.log(yearlyGross)
// }



// Working calculator without DOM manipulation



// let p = prompt("Please enter your principal balance");
// let pmt = prompt("Please enter your monthly contributions")
// let r = prompt("Please enter your interest rate");
// let n = prompt("Please enter how often your interest is compounded");
// let t = prompt("Please enter how many time periods you would like");

// let contribute = pmt * (((1 + r / n) ** (n * t) - 1) / ((r / n)));
// console.log(contribute)

// let total = (p * (1 + (r / n)) ** (n * t));
// console.log(total)

// if (t <= 1) {
//     console.log(`Your total after ${t} year is ${total + contribute}`)
// } else {
//     console.log(`Your total after ${t} years is ${total + contribute}`)
// }


const submit = document.getElementById("submit")
const totalValue = {
    display: document.getElementById("totalValue")
}
const reset = document.getElementById("reset")


function Calculate() {
    const principal = parseFloat(document.getElementById("principal").value);
    const monthlyCont = parseFloat(document.getElementById("monthlyCont").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value);
    const timesCompounded = parseFloat(document.getElementById("timesCompounded").value);
    const totalTime = parseFloat(document.getElementById("totalTime").value);

    let interest = interestRate / 100;


    // Contribution Calculator

    let contribute = monthlyCont * (((1 + interest / timesCompounded) ** (timesCompounded * totalTime) - 1) / ((interest / timesCompounded)));


    //Principal Calculator

    let totalPrincipal = (principal * (1 + (interest / timesCompounded)) ** (timesCompounded * totalTime));

    let total = contribute + totalPrincipal

    totalValue.display.textContent = total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

submit.addEventListener('click', function() {
    Calculate();
})

reset.addEventListener('click', function() {
    document.getElementById("principal").value = '';
    document.getElementById("monthlyCont").value = '';
    document.getElementById("interestRate").value = '';
    document.getElementById("timesCompounded").value = '';
    document.getElementById("totalTime").value = '';
    totalValue.display.textContent = 0;
})