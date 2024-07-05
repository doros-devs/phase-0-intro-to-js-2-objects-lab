let employee = {
  name: "Sam"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee));

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}