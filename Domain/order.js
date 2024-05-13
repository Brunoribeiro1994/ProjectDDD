class Order {
    constructor ({ id, customerId, vehicle, paymentMethod, rentalBegin, rentalFinish, totalValue, status}) {
        this.id = id
        this.customerId = customerId
        this.vehicle = vehicle
        this.paymentMethod = paymentMethod
        this.rentalBegin = rentalBegin
        this.rentalFinish = rentalFinish
        this.totalValue = totalValue
        this.status = status
    }
}

module.exports = Order