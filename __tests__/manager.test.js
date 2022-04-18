const ManagerData = require('../Assets/js/manager');

describe("ManagerQuestions", () => {
  it("return the manager name", () => {
    var manager = new ManagerData ("Jade", "10", "jadehuynh08@gmail.com", "jadehuynh")
   
      var managerName = manager.getName()
      
      expect(managerName).toBe("Jade")
    
  })
  
});
