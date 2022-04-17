const EmployeeData = require('./employee')

class EngineerData extends EmployeeData {
    
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getGithub() {
        return this.github
    }
    getRole() {
        return "engineer"
    }
}



module.exports = EngineerData