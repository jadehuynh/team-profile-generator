const EmployeeData = require('./employee')

class InternData extends EmployeeData {

    constructor(name, id, email, school) {
        super(name, id, email)
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