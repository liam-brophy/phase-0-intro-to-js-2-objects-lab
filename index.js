// Write your solution in this file!
const employee = {
    name: "Frank Herbert",
    streetAddress: "123 Arakis Lane",
  };

  function updateEmployeeWithKeyAndValue(obj, key, value) {
    return { ...obj, [key]: value };

}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "age", 27);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

const desUpdatedEmployee = updateEmployeeWithKeyAndValue(employee, "age", 27);

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee };
    delete newEmployee[key];
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;

}