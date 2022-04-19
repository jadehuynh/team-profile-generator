const EngineerData = require('../Assets/js/engineer')

describe("EngineerQuestions", () => {
  it("return the engineer name", () => {
    var engineer = new EngineerData ("Jade", "10", "jadehuynh08@gmail.com","Engineer", "jadehuynh")
   
      var engineerName = engineer.getName()
      
      expect(engineerName).toBe("Jade")
    
  })
  
});

describe("EngineerQuestions", () => {
  it("return the engineer id", () => {
    var employee = new EmployeeData ("Jade", "10", "jadehuynh08@gmail.com","Engineer", "jadehuynh")
   
      var employeeName = employee.getId()
      
      expect(employeeName).toBe("jadehuynh08@gmail.com")
    
  })
  
});

describe("EngineerQuestions", () => {
  it("return the employee id ", () => {
    var employee = new EmployeeData ("Jade", "10", "jadehuynh08@gmail.com","Engineer", "jadehuynh")
   
      var employeeName = employee.getId()
      
      expect(employeeName).toBe("10")
    
  })
  
});

describe("EngineerQuestions", () => {
  it("return the employee email", () => {
    var employee = new EmployeeData ("Jade", "10", "jadehuynh08@gmail.com", "Engineer", "jadehuynh")
   
      var employeeName = employee.getEmail()
      
      expect(employeeName).toBe("jadehuynh08@gmail.com")
    
  })
  
});

describe("EngineerQuestions", () => {
  it("return the employee role", () => {
    var employee = new EmployeeData ("Jade", "10", "jadehuynh08@gmail.com", "Engineer", "jadehuynh")
   
      var employeeName = employee.getRole()
      
      expect(employeeName).toBe("employee")
    
  })
  
});