
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
    return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size ${this.teamSize}`;
} // overriding details to add team size

calculateBonus() {
    const annualSalary = this.salary * 12;
    return this.calculateAnnualSalary() * .10;
} // creating a method that calculates 10% salary bonus
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log("Manager Details:");
console.log(mgr1.getDetails());
// logging manager details

console.log("Bonus:", mgr1.calculateBonus()); 
// logging the bonus calculation

// Task 3: Creating a Company Class
class Company {
constructor(name) {
    this.name = name
    this.employees = []; //adding an array of employees
};  

addEmployee(employee) {
    this.employees.push(employee); //adds an employee
}

listEmployees() {
    this.employees.forEach(employee => console.log(employee.getDetails()));
} //lists employees

calculateTotalPayroll(){
    let totalPayroll = 0;
    this.employees.forEach(emp =>{
        totalPayroll += emp.calculateAnnualSalary();
    });
    return totalPayroll // TASK 4: added a method to calculate total payroll to the Company class

}
promoteToManager(employee, teamSize) {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
    this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize);
      }
   }
}

const company = new Company("TechCorp");

company.addEmployee(emp1); // adds employee to array
company.addEmployee(mgr1); 
company.listEmployees(); //list employee details

// Task 4: Implementing a Payroll System

console.log(`Total Payroll: $${company.calculateTotalPayroll()}`); 
// logging the method from Company class.

// Task 5: Implementing Promotions


company.promoteToManager(emp1, 3);
console.log("Promotion:");
company.listEmployees();