//Entidade de cliente com as suas configurações
class Customer {
    constructor({id, name, phone, cpf, email, idade}) {
        this.id = id
        this.name = name
        this.phone = phone
        this.cpf = cpf
        this.email = email
        this.idade = idade
    }
}

module.exports = Customer