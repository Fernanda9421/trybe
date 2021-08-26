const grossSalary = 3000;
let liquidSalary;
let discountINSS; 
let discountIR;


if (grossSalary < 1556.94) {
    discountINSS = grossSalary * 0.08;
} else if (grossSalary < 2594.92) {
    discountINSS = grossSalary * 0.09;
} else if (grossSalary < 5189.82) {
    discountINSS = grossSalary * 0.11;
} else {
    discountINSS = grossSalary - 570.88;
}

liquidSalary = grossSalary - discountINSS;

if (liquidSalary < 1903.98) {
    
}