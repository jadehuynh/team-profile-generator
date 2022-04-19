const EmployeeData = require('./employee')

class InternData extends EmployeeData {

    constructor(name, id, email, role, school) {
        super(name, id, email)
        this.role= "Intern"
        this.school = school
    }
    getSchool() {
       return this.school
    }
    getRole() {
        return "Intern"
    }
    
}



module.exports = InternData