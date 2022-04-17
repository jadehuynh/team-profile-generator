const EmployeeData = require('./employee')

class ManagerData extends EmployeeData {

    constructor(name, id, email, number) {
        super(name, id, email)
        this.number = number
        }
        getNumber() {
            this.number = number
        }
        getRole() {
            return "manager"
        }
}

module.exports = ManagerData