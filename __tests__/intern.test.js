const InternData = require('../Assets/js/intern')

describe("InternQuestions", () => {
  it("return the Intern name", () => {
    var intern = new InternData ("Jade", "10", "jadehuynh08@gmail.com", "jadehuynh")
   
      var internName = intern.getName()
      
      expect(internName).toBe("Jade")
    
  })
  
});