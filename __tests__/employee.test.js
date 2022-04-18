const EmployeeData = require('../Assets/js/employee');


describe("EmployeeQuestions", () => {
  it("return the employee name", () => {
    var employee = new EmployeeData ("Jade", "10", "jadehuynh08@gmail.com", "employee")
   
      var employeeName = employee.getName()
      
      expect(employeeName).toBe("Jade")
    
  })
  
});
