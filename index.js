const Customer = require("./Domain/customer")
const CustomerService = require("./Services/customerService")
const CustomerRepository = require("./Repository/customerRepository")
const Vehicle = require("./Domain/vehicle")
const VehicleService = require("./Services/vehicleService")
const VehicleRepository = require("./Repository/vehicleRepository")
const Order = require("./Domain/order")
const OrderService = require("./Services/orderService")
const OrderRepository = require("./Repository/orderRepository")

const customerRepository = new CustomerRepository();
const vehicleRepository = new VehicleRepository();
const orderRepository = new OrderRepository();

const customerService = new CustomerService(customerRepository)
const vehicleService = new VehicleService(vehicleRepository)
const orderService = new OrderService(orderRepository, vehicleService, customerService)


const customer1 = customerService.createCustomer("Bruno Ribeiro", 1499999999, 41223949209, "brunoribeiro@gmail.com", 30);
const customer2 = customerService.createCustomer("Marco Véio", 1482778389, 1234242356, "marcosantos@gmail.com", 21);

const vehicle1 = vehicleService.createVehicle("Toyota", "Corolla", 2022, "Branco", 1, 700.50)
const vehicle2 = vehicleService.createVehicle("Jeep", "Renegade", 2016, "Preto", 1, 340.00)

const vehicles = vehicleService.findAll()

console.log(vehicles)

const initialData = new Date('2024-05-13');
const FinalData = new Date('2024-05-28');
let order = orderService.save(customer1.id, vehicle1, "PIX", initialData, FinalData, vehicle1.dailyValue)

console.log(order)
console.log('------------------------------------------------')


if (order != null) {
    orderService.updateOrderStatusById(order.id, "Pago")
    console.log(orderService.findById(order.id))
    console.log(customerRepository.findById(order.customerId))
}


