const InternData = require('../Assets/js/intern')

describe("InternQuestions", () => {
  it("return the Intern name", () => {
    var intern = new InternData ("Jade", "40", "jadehuynh08@gmail.com", "Intern", "USC")
   
      var internName = intern.getName()
      
      expect(internName).toBe("Jade")
    
  })
  
});

describe("InternQuestions", () => {
  it("return the Intern id", () => {
    var intern = new InternData ("Jade", "40", "jadehuynh08@gmail.com", "Intern", "USC")
   
      var internId = intern.getId()
      
      expect(internId).toBe("40")
    
  })
  
});

describe("InternQuestions", () => {
  it("return the Intern email", () => {
    var intern = new InternData ("Jade", "40", "jadehuynh08@gmail.com", "Intern", "USC")
   
      var internEmail = intern.getEmail()
      
      expect(internEmail).toBe("jadehuynh08@gmail.com")
    
  })
  
});

describe("InternQuestions", () => {
  it("return the Intern role", () => {
    var intern = new InternData ("Jade", "40", "jadehuynh08@gmail.com", "Intern", "USC")
   
      var internRole = intern.getRole()
      
      expect(internRole).toBe("Intern")
    
  })
  
});

describe("InternQuestions", () => {
  it("return the Intern school", () => {
    var intern = new InternData ("Jade", "40", "jadehuynh08@gmail.com", "Intern", "USC")
   
      var internSchool = intern.getSchool()
      
      expect(internSchool).toBe("USC")
    
  })
  
});