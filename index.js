// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '10 Broadway',
};

function updateEmployeeWithKeyAndValue(employee, key, value){
   const newObj = {...employee};
   newObj[key] = value;
   return newObj;
}

updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')




function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

updateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway')


function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}



function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}