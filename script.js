// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const employees = [];
  let addEmployee = true;

  while (addEmployee) {
    const firstName = prompt('enter the employee\'s first name:');
    const lastName = prompt('enter the employee\'s last name:');
    let salary = prompt('Enter the Employee\'s salary:');
    salary = isNaN(parseFloat(salary)) ? 0 : parseFloat(salary);

    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });

    const continueAdding = confirm('Do you want to add another employee?');
    addEmployee = continueAdding;
  }
  
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;

  employees.Array.forEach(employee => {
    totalSalary += employee.salary;
  });

  const averageSalary = totalSalary / employeesArray.length;
  console.log(`average Salary: $$(averageSalary.toFixed(2)} for ${employeesArray.length} employees`);
};


const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}!`);
};
  /*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
