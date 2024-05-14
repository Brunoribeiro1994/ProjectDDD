//Serviço de dominio do contexto Cliente
const Customer = require("../Domain/customer")
const uuid = require("uuid")

class CustomerService {
    constructor (customerRepository) {
        this.customerRepository = customerRepository
    }
    //Evento de dominio, cadastro de um novo cliente
    createCustomer(name, phone, cpf, email, idade) {
        const id = uuid.v4();
        const customer = new Customer ({id, name, phone, cpf, email, idade});
        this.customerRepository.save(customer)
        console.log(`Cliente ${customer.name} criado com sucesso!`)
        return customer
    }

    findById(id) {
        return this.customerRepository.findById(id)
    }
}

module.exports = CustomerService