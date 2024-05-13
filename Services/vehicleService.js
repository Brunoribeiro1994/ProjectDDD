const uuid = require("uuid")
const Vehicle = require("../Domain/vehicle")


class VehicleService {
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository
    }

    createVehicle(manufacturer, model, year, color, available, dailyValue) {
        const id = uuid.v4()
        const vehicle = new Vehicle({id, manufacturer, model, year, color, available, dailyValue})
        this.vehicleRepository.save(vehicle)
        console.log(`Veiculo ${vehicle.model} criado com sucesso`)
        return vehicle
    }

    findAll() {
        return this.vehicleRepository.findAll()
    }

    findById(id) {
        return this.vehicleRepository.findById(id)
    }

    isVehicleActive(id) {
        const vehicle = this.vehicleRepository.findById(id)
        return vehicle.available == 1 ? true : false
    }

    setToUnavailable(id){
        this.vehicleRepository.updateToUnavaiable(id)
    }
}

module.exports = VehicleService