const EngineerData = require('../Assets/js/engineer')

describe("EngineerQuestions", () => {
  it("return the engineer name", () => {
    var engineer = new EngineerData ("Jade", "20", "jadehuynh08@gmail.com","Engineer", "jadehuynh")
   
      var engineerName = engineer.getName()
      
      expect(engineerName).toBe("Jade")
    
  })
  
});

describe("EngineerQuestions", () => {
  it("return the engineer id", () => {
    var engineer = new EngineerData ("Jade", "20", "jadehuynh08@gmail.com", "Engineer", "jadehuynh")
   
      var engineerId = engineer.getId()
      
      expect(engineerId).toBe("20")
    
  })
  
});

describe("EngineerQuestions", () => {
  it("return the engineer id ", () => {
    var engineer = new EngineerData ("Jade", "20", "jadehuynh08@gmail.com", "Engineer", "jadehuynh")
   
      var engineerName = engineer.getEmail()
      
      expect(engineerName).toBe("jadehuynh08@gmail.com")
    
  })
  
});

describe("EngineerQuestions", () => {
  it("return the engineer role", () => {
    var engineer = new EngineerData ("Jade", "20", "jadehuynh08@gmail.com", "Engineer", "jadehuynh")
   
      var engineerName = engineer.getRole()
      
      expect(engineerName).toBe("Engineer")
    
  })
  
});

describe("EngineerQuestions", () => {
  it("return the github username", () => {
    var engineer = new EngineerData ("Jade", "20", "jadehuynh08@gmail.com", "Engineer", "jadehuynh")
   
      var engineerName = engineer.getGithub()
      
      expect(engineerName).toBe("jadehuynh")
    
  })
  
});