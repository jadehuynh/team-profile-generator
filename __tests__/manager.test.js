const ManagerData = require('../Assets/js/manager');

describe("ManagerQuestions", () => {
  it("return the manager name", () => {
    var manager = new ManagerData ("Jade", "30", "jadehuynh08@gmail.com", "Manager", "12345")
   
      var managerName = manager.getName()
      
      expect(managerName).toBe("Jade")
    
  })
  
});

describe("ManagerQuestions", () => {
  it("return the manager id", () => {
    var manager = new ManagerData ("Jade", "30", "jadehuynh08@gmail.com", "Manager", "12345")
   
      var managerId = manager.getId()
      
      expect(managerId).toBe("30")
    
  })
  
});

describe("ManagerQuestions", () => {
  it("return the manager name", () => {
    var manager = new ManagerData ("Jade", "30", "jadehuynh08@gmail.com", "Manager", "12345")
   
      var managerEmail = manager.getEmail()
      
      expect(managerEmail).toBe("jadehuynh08@gmail.com")
    
  })
  
});

describe("ManagerQuestions", () => {
  it("return the manager role", () => {
    var manager = new ManagerData ("Jade", "30", "jadehuynh08@gmail.com", "Manager", "12345")
   
      var managerRole = manager.getRole()
      
      expect(managerRole).toBe("Manager")
    
  })
  
});

describe("ManagerQuestions", () => {
  it("return the manager office number", () => {
    var manager = new ManagerData ("Jade", "30", "jadehuynh08@gmail.com", "Manager", "12345")
   
      var managerNumber = manager.getNumber()
      
      expect(managerNumber).toBe("12345")
    
  })
  
});
