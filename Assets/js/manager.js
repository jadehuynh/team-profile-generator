const EmployeeData = require('./employee')

class ManagerData extends EmployeeData {

    constructor(name, id, email, role, number) {
        super(name, id, email)
        this.role = "Manager"
        this.number = number
        }
        getNumber() {
            return this.number
        }
        getRole() {
            return "Manager"
        }
}

module.exports = ManagerData