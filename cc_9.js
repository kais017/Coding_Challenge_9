
class Employee {
constructor(name, id, department, salary) {
this.name = name;
this.id = id;
this.department = department;
this.salary = salary;
} //creating a class with properties of employee details
// Method that returns string of employee details
getDetails() {
    return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
}
//Method that calculates the annual salary of the employees

calculateAnnualSalary() {
    return this.salary * 12;
    }
} // returns employee's annual salary

const emp1 = new Employee ("Alice Johnson", 101, "Sales", 5000);
console.log("Employee Details:")
console.log(emp1.getDetails());
// logging the employee details

console.log("Employee Salary:", emp1.calculateAnnualSalary());
// logging the calculation of the employee's annual salary

