import React, { useState } from 'react';
import '../style/Reserve.css'; 
import jsonData from '../pages/schedule.json'
import TicketDisplay from './TicketDisplay'; 
import ReservationDetails from './ReservationDetails'; 

const Reserve = () => {
  // State to store reservation data
  const [reservationData, setReservationData] = useState({
    name: '',
    date: '',
    origin: '',
    destination: '',
    passengerCount: '',
    idCardNumber: '',
  });

  // State to manage form submission and payment
  const [submitted, setSubmitted] = useState(false);
  const [reservationDetails, setReservationDetails] = useState(null);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  // Extract origin values from JSON data
  const originValues = jsonData.schedule.map(entry => entry.origin);

  // Function to generate a numeric unique ID
  const generateNumericUniqueId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return parseInt(`${timestamp}${random}`);
  };

  // Handle input change in form fields
  const handleInputChange = event => {
    const { name, value } = event.target;
    setReservationData(prevData => ({ ...prevData, [name]: value }));
  };

  // Find the selected train schedule based on origin and destination
  const findSelectedSchedule = () => {
    const originEntry = jsonData.schedule.find(entry => entry.origin === reservationData.origin);
    return originEntry.trainSchedules.find(schedule => schedule.destination === reservationData.destination);
  };

  // Handle form submission
  const handleSubmit = event => {
    event.preventDefault();
    if (Object.values(reservationData).every(value => value !== '')) {
      const schedule = findSelectedSchedule();
      const uniqueId = generateNumericUniqueId();
      const totalPrice = parseInt(schedule['ticket-price']) * parseInt(reservationData.passengerCount);
      setReservationDetails({
        ...reservationData,
        totalPrice,
        uniqueId,
        departureTime: schedule.departureTime,
        arrivalTime: schedule.arrivalTime,
      });
      setSubmitted(true);
    }
  };

  // Handle payment process (simulated with a setTimeout)
  const handlePayment = () => {
    setTimeout(() => {
      setPaymentComplete(true);
      setShowPaymentForm(false);
    }, 1500);
  };



  return (
    <div className="reserve-card">
      <h2>Reserve a Train Ticket</h2>
      <form onSubmit={handleSubmit}>
      <table>
  <tbody>
    <tr>
      <td><label htmlFor="name">Name:</label></td>
      <td>
        <input
          type="text"
          id="name"
          name="name"
          value={reservationData.name}
          onChange={handleInputChange}
          required
        />
      </td>
      <td><label htmlFor="date">Date:</label></td>
      <td>
        <input
          type="date"
          id="date"
          name="date"
          value={reservationData.date}
          onChange={handleInputChange}
          required
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="origin">Origin:</label></td>
      <td>
        <select
          id="origin"
          name="origin"
          value={reservationData.origin}
          onChange={handleInputChange}
          required
        >
          <option value="">Select an origin</option>
          {originValues.map((origin, index) => (
            <option key={index} value={origin}>
              {origin}
            </option>
          ))}
        </select>
      </td>
      <td><label htmlFor="destination">Passenger Count:</label></td>
      <td>
      <input
          type="number"
          id="passengerCount"
          name="passengerCount"
          value={reservationData.passengerCount}
          onChange={handleInputChange}
          required
        />
      </td>
    </tr>
    <tr>
      <td><label htmlFor="passengerCount">Destination:</label></td>
      <td>
      <select
          id="destination"
          name="destination"
          value={reservationData.destination}
          onChange={handleInputChange}
          required
        >
          <option value="">Select a destination</option>
          {reservationData.origin &&
            jsonData.schedule.find(entry => entry.origin === reservationData.origin).trainSchedules.map((schedule, index) => (
              <option key={index} value={schedule.destination}>
                {schedule.destination}
              </option>
            ))}
        </select>

      </td>

  
            <td><label htmlFor="idCardNumber">ID Card Number:</label></td>
            <td>
              <input
                type="text"
                id="idCardNumber"
                name="idCardNumber"
                value={reservationData.idCardNumber}
                onChange={handleInputChange}
                required
              />
            </td>
          </tr>
        </tbody>
</table>

        <button className="submit-button" type="submit">
          Reserve
        </button>
      </form>
      {/* Display reservation details */}
      {submitted && reservationDetails && (
        <ReservationDetails
          reservationDetails={reservationDetails}
          paymentComplete={paymentComplete}
          showPaymentForm={showPaymentForm}
          handlePayment={handlePayment}
          setShowPaymentForm={setShowPaymentForm}
          TicketDisplay={TicketDisplay}
        />
      )}
    </div>
    
  );
};

export default Reserve;








