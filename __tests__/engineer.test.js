const EngineerData = require('../Assets/js/engineer')

describe("EngineerQuestions", () => {
  it("return the engineer name", () => {
    var engineer = new EngineerData ("Jade", "10", "jadehuynh08@gmail.com", "jadehuynh")
   
      var engineerName = engineer.getName()
      
      expect(engineerName).toBe("Jade")
    
  })
  
});