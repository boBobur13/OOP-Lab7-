const { ReservationStatus } = require('./enums')
let counter = 1
class Reservation {
    constructor(flight) {
        this.id = 'RES' + counter
        counter = counter + 1
        this.flight = flight
        this.passengers = []
        this.seats = []
        this.status = ReservationStatus.PENDING
    }
    addPassenger(passenger, seat) {
        if (seat.isAvailable()) {
            this.passengers.push(passenger)
            this.seats.push(seat)
            seat.book()
            return true
        }
        return false
    }
    confirm() {
        this.status = ReservationStatus.CONFIRMED
    }
    cancel() {
        this.status = ReservationStatus.CANCELLED
    }
    toString() {
        return this.id + ' - ' + this.status + ' - ' + this.passengers.length + ' yo\'lovchi'
    }
}
class Itinerary {
    constructor(customerName) {
        this.customerName = customerName
        this.reservations = []
    }
    addReservation(reservation) {
        this.reservations.push(reservation)
    }
    pay() {
        console.log('To\'lov qilindi')
    }
    show() {
        console.log(this.customerName + ' uchun itinerary:')
        for (let i = 0; i < this.reservations.length; i++) {
            console.log('  - ' + this.reservations[i])
        }
    }
}
module.exports = { Reservation, Itinerary }