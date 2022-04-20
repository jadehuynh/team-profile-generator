const EmployeeData = require('../Assets/js/employee');


describe("EmployeeQuestions", () => {
  it("return the employee name", () => {
    var employee = new EmployeeData ("Jade", "10", "jadehuynh08@gmail.com", "Employee")
   
      var employeeName = employee.getName()
      
      expect(employeeName).toBe("Jade")
    
  })
  
});

describe("EmployeeQuestions", () => {
  it("return the employee id ", () => {
    var employee = new EmployeeData ("Jade", "10", "jadehuynh08@gmail.com", "Employee")
   
      var employeeId = employee.getId()
      
      expect(employeeId).toBe("10")
    
  })
  
});

describe("EmployeeQuestions", () => {
  it("return the employee email", () => {
    var employee = new EmployeeData ("Jade", "10", "jadehuynh08@gmail.com", "Employee")
   
      var employeeEmail = employee.getEmail()
      
      expect(employeeEmail).toBe("jadehuynh08@gmail.com")
    
  })
  
});

describe("EmployeeQuestions", () => {
  it("return the employee role", () => {
    var employee = new EmployeeData ("Jade", "10", "jadehuynh08@gmail.com", "Employee")
   
      var employeeRole = employee.getRole()
      
      expect(employeeRole).toBe("Employee")
    
  })
  
});
