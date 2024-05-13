const uuid = require("uuid")
const Order = require("../Domain/order")
const VehicleService = require("../Services/vehicleService")
const CustomerService = require("../Services/customerService")

class OrderService {
    constructor(orderRepository, vehicleService, customerService) {
        this.orderRepository = orderRepository
        this.vehicleService = vehicleService
        this.customerService = customerService
    }

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
        const order = new Order({id, customerId,vehicle, paymentMethod, rentalBegin, rentalFinish, totalValue, status})
        this.orderRepository.save(order)
        console.log(`Pedido criado com sucesso ${order.Totalvalue}`)
        this.updateOrderStatusById(id, status)
        return order
    }

    applyDiscout(paymentMethod, value, daysTotal){
        if(paymentMethod == "PIX"){
            const total = value * daysTotal
            return total - (total * (10 / 100))
        }
        return (value * diferencaEmDias) * daysTotal
    }

    calcTotalValue(rentalBegin, rentalFinish, value, paymentMethod){
        const daysAux = Math.abs(rentalFinish - rentalBegin)
        const daysTotal = Math.floor(daysAux / 86400000);
        return this.applyDiscout(paymentMethod, value, daysTotal)
    }

    updateOrderStatusById(id, status) {
        this.orderRepository.updateStatusById(id, status)
    }

    findById(id) {
        return this.orderRepository.findById(id)
    }
}

module.exports = OrderService