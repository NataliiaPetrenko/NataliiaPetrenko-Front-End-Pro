let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function sumSalaries(department) {
    if(Array.isArray(department)) {
        return department.reduce(function(sum, employee) {
            return sum + employee.salary;
        }, 0);
    } else {
        let sum = 0;
        for (let subDepartment in department) {
            sum += sumSalaries(department[subDepartment]);
        }
        return sum;
    }
}

let totalSalary = sumSalaries(company);
console.log(totalSalary);