const EmployeeData = require('./employee')

class InternData extends EmployeeData {

    constructor(name, id, email, role, school) {
        super(name, id, email)
        this.role= "Intern"
        this.school = school
    }
    getSchool() {
        this.school = school
    }
    getRole() {
        return "intern"
    }
    
}



module.exports = InternData