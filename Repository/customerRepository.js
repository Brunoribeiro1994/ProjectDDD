//Repositório de dominio do contexto cliente
class CustomerRepository {
    constructor() {
        this.customers = []
    }

    save(customer) {
        this.customers.push(customer);
    }

    findById(id) {
        return this.customers.find(customer => customer.id == id)
    }
}

module.exports = CustomerRepository