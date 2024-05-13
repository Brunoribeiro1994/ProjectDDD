class OrderRepository {
    constructor() {
        this.orders = []
    }

    save(order) {
        this.orders.push(order)
    }

    findById(id) {
        return this.orders.find(order => order.id == id)
    }

    updateStatusById(id, status) {
        this.orders.map(order => {
            if(order.id == id) {
                order.status = status
            }
        })
    }
}

module.exports = OrderRepository