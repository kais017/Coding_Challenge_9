
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


// Task 2: Creating a Manager Class
class Manager extends Employee {
constructor (name, id, department, salary, teamSize) {
    super (name, id, department, salary);
    this.teamSize = teamSize;
} // creating a class with Manager details
getDetails() {
    return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size ${this.teamSize}`;
} // overriding details to add team size

calculateBonus() {
    return this.calculateAnnualSalary() * .10;
} // creating a method that calculates 10% salary bonus
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log("Manager Details:");
console.log(mgr1.getDetails());
// logging manager details

console.log("Bonus:", mgr1.calculateBonus()); 
// logging the bonus calculation

