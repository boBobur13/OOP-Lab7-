class Person {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    getName() {
        return this.name
    }
}
class Customer extends Person {
    constructor(name, email, phone) {
        super(name, email)
        this.phone = phone
    }
    
    getPhone() {
        return this.phone
    }
}
class Passenger {
    constructor(name, passportNumber) {
        this.name = name
        this.passportNumber = passportNumber
    }
    getName() {
        return this.name
    }
}
class Airport {
    constructor(name, code) {
        this.name = name
        this.code = code
    }
    
    getCode() {
        return this.code
    }
}
class Aircraft {
    constructor(model) {
        this.model = model
        this.seats = []
    }
    addSeat(seat) {
        this.seats.push(seat)
    }
    getSeats() {
        return this.seats
    }
}
class Seat {
    constructor(seatNumber, seatClass) {
        this.seatNumber = seatNumber
        this.seatClass = seatClass
    }
    getSeatNumber() {
        return this.seatNumber
    }
}
class FlightSeat extends Seat {
    constructor(seatNumber, seatClass, price) {
        super(seatNumber, seatClass)
        this.price = price
        this.available = true
    }
    isAvailable() {
        return this.available
    }
    
    book() {
        this.available = false
    }
}
module.exports = {
    Person, Customer, Passenger, 
    Airport, Aircraft, Seat, FlightSeat
}