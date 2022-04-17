const EmployeeData = require('./employee')

class ManagerData extends EmployeeData {

    constructor(name, id, email, number) {
        super(name, id, email)
        this.number = officeNumber
        }
        getNumber() {
            this.number = officeNumber
        }
        getRole() {
            return ManagerData
        }
}

module.exports = ManagerData