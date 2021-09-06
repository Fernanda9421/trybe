const grossSalary = 3000;
let baseSalary;
let liquidSalary;
let discountINSS; 
let discountIR;


if (grossSalary <= 1556.94) {
    discountINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
    discountINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
    discountINSS = grossSalary * 0.11;
} else {
    discountINSS = grossSalary - 570.88;
}

baseSalary = grossSalary - discountINSS;

if (baseSalary <= 1903.98) {
    discountIR = 0;
} else if (baseSalary <= 2826.65) {
    discountIR = (baseSalary * 0.075) - 142.8;
} else if (baseSalary <= 3751.05) {
    discountIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
    discountIR = (baseSalary * 0.225) - 636.13;
} else {
    discountIR = (baseSalary * 0.275) - 869.36
}

liquidSalary = baseSalary - discountIR;

console.log(liquidSalary)