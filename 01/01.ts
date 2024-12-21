type Employee = [
    name: string,
    salaryBase: number,
    bonus: number,
];

// Add individual salary totals
function totalIndividual(employee: Employee) {
    return employee[1] + employee[2];
};

// Add all salary totals
function calcSal(employees: Employee[]) {
    let total: number = 0;
    for (let k in employees) {
        total += totalIndividual(employees[k]);
    };
    console.log(total);
};

calcSal([["John", 2000, 500], ["Jane", 2500, 700]]);