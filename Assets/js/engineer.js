const EmployeeData = require('./employee')

class EngineerData extends EmployeeData {
    
    constructor(name, id, email, role, github) {
        super(name, id, email)
        this.role = "Engineer"
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