//Serviço de dominio do contexto ordem de serviço
const uuid = require("uuid")
const Rental = require("../Domain/rental")
//Context Maps (relacionamento dos serviços de dominio de cliente e veículo na ordem de serviço)
const VehicleService = require("./vehicleService")
const CustomerService = require("./customerService")

class RentalService {
    constructor(rentalRepository, vehicleService, customerService) {
        this.rentalRepository = rentalRepository
        this.vehicleService = vehicleService
        this.customerService = customerService
    }
    //Evento de dominio, cadastro de uma nova ordem de serviço
    save(customerId, vehicle, paymentMethod, rentalBegin, rentalFinish, value) {
        const id = uuid.v4()
        const status = "Aguardando pagamento"
        if(!this.vehicleService.isVehicleActive(vehicle.id)) {
            console.log("Não é possível criar esse pedido pois o veiculo está indisponivel")
            return null
        }
        if(this.customerService.findById(customerId).idade < 18) {
            console.log("Não é possível criar esse pedido pois cliente é menor de idade")
            return null
        }
        
        const totalValue = this.calcTotalValue(rentalBegin, rentalFinish, value, paymentMethod)
        //Criação de um objeto de valor Ordem de seriço, onde o vinculo de veículo e cliente não podem ser alterados
        //Agregados de veículo e cliente
        const rental = new Rental({id, customerId,vehicle, paymentMethod, rentalBegin, rentalFinish, totalValue, status})
        this.rentalRepository.save(rental)
        console.log(`Pedido criado com sucesso ${rental.Totalvalue}`)
        this.updateRentalStatusById(id, status)
        return rental
    }

    //Interface de manipulação de dados aplicar desconto
    applyDiscout(paymentMethod, value, daysTotal){
        if(paymentMethod == "PIX"){
            const total = value * daysTotal
            return total - (total * (10 / 100))
        }
        return value * daysTotal
    }

    //Interface de verificação de dados
    calcTotalValue(rentalBegin, rentalFinish, value, paymentMethod){
        const daysAux = Math.abs(rentalFinish - rentalBegin)
        const daysTotal = Math.floor(daysAux / 86400000);
        return this.applyDiscout(paymentMethod, value, daysTotal)
    }
    //Evento de dominio, atualização do status da ordem de serviço
    updateRentalStatusById(id, status) {
        this.rentalRepository.updateStatusById(id, status)
    }

    findById(id) {
        return this.rentalRepository.findById(id)
    }
}

module.exports = RentalService