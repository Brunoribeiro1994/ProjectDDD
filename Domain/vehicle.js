//Entidade de veiculos com as suas configurações
class Vehicle {
    constructor({id, manufacturer, model, year, color, available, dailyValue}) {
        this.id = id
        this.manufacturer = manufacturer
        this.model = model
        this.year = year
        this.color = color
        this.available = available
        this.dailyValue = dailyValue
    }
}

module.exports = Vehicle