const { FlightStatus } = require('./enums')
class Flight {
    constructor(flightNumber, from, to) {
        this.flightNumber = flightNumber
        this.from = from
        this.to = to
    }
    toString() {
        return this.flightNumber + ': ' + this.from.getCode() + ' -> ' + this.to.getCode()
    }
}
class FlightInstance {
    constructor(flight, date, aircraft) {
        this.flight = flight
        this.date = date
        this.aircraft = aircraft
        this.status = FlightStatus.SCHEDULED
    }
    getAircraft() {
        return this.aircraft
    }
    cancel() {
        this.status = FlightStatus.CANCELLED
    }
    toString() {
        return this.flight + ' - ' + this.date + ' - ' + this.status
    }
}
module.exports = { Flight, FlightInstance }