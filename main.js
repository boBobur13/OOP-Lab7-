const { FlightStatus, ReservationStatus } = require('./enums')
const { 
    Person, Customer, Passenger, 
    Airport, Aircraft, Seat, FlightSeat 
} = require('./models')
const { Flight, FlightInstance } = require('./flights')
const { Reservation, Itinerary } = require('./reservations')
console.log('=================================')
console.log('   AIRLINE MANAGEMENT SYSTEM')
console.log('=================================')
let baku = new Airport('Heydar Aliyev', 'GYD')
let istanbul = new Airport('Istanbul', 'IST')
let f1 = new Flight('J2-101', baku, istanbul)
let plane = new Aircraft('Boeing 737')
plane.addSeat(new FlightSeat('1A', 'Business', 300))
plane.addSeat(new FlightSeat('1B', 'Business', 300))
plane.addSeat(new FlightSeat('10A', 'Economy', 100))
let fi = new FlightInstance(f1, '15.03.2026', plane)
let c = new Customer('Ali', 'ali@newuu.uz', '0555')
let p1 = new Passenger('Ali', 'AZ001')
let p2 = new Passenger('Aysun', 'AZ002')
console.log('\n--- REZERVASIYA ---')
let res = new Reservation(fi)

let allSeats = plane.getSeats()
for (let i = 0; i < allSeats.length; i++) {
    let seat = allSeats[i]
    if (seat.constructor.name === 'FlightSeat') {
        console.log('Oturacaq: ' + seat.seatNumber + ' - $' + seat.price)
    }
}
let seat1 = allSeats[0]
let seat2 = allSeats[1]
res.addPassenger(p1, seat1)
res.addPassenger(p2, seat2)
res.confirm()
console.log('Rezervasiya: ' + res)
console.log('\n--- ITINERARY ---')
let it = new Itinerary(c.getName())
it.addReservation(res)
it.pay()
it.show()
console.log('\n--- ADMIN UCHUN ---')
fi.cancel()
console.log('Parvoz holat: ' + fi)
console.log('\n--- Mijoz bekor qildi ---')
res.cancel()
console.log('Rezervasiya: ' + res)
console.log('\n=================================')
console.log('   PROGRAM BITDI')
console.log('=================================')