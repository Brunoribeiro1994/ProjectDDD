//Repositório de dominio do contexto veículo
class VehicleRepository {
    constructor() {
        this.vehicles = []
    }

    save(vehicle) {
        this.vehicles.push(vehicle)
    }

    findAll() {
        return this.vehicles
    }

    findAllActive() {
        return this.vehicles.filter(vei => vei.available == 1)
    }

    findById(id) {
        return this.vehicles.find(vei => vei.id == id)
    }

    updateToUnavaiable(id) {
        this.vehicles.map(vehicle => {
            if(vehicle.id == id) {
                order.available = 0
            }
        })
    }
}

module.exports = VehicleRepository