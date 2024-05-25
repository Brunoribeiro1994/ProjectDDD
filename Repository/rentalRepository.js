//Repositório de dominio do contexto ordem de serviço
class RentalRepository {
    constructor() {
        this.rentals = []
    }

    save(rental) {
        this.rentals.push(rental)
    }

    findById(id) {
        return this.rentals.find(rental => rental.id == id)
    }

    updateStatusById(id, status) {
        this.rentals.map(rental => {
            if(rental.id == id) {
                rental.status = status
            }
        })
    }
}

module.exports = RentalRepository