
import React from 'react';
import '../style/ReservationDetails.css'; // Import your CSS file for styling


const ReservationDetails = ({
  reservationDetails,
  paymentComplete,
  showPaymentForm,
  handlePayment,
  setShowPaymentForm,
  TicketDisplay,
}) => {
  return (
    <div className="reservation-details">
      <h3 className="details-title">Reservation Details</h3>
      <table className="details-table">
        <tbody>
          <tr>
            <td className="detail-label">Total Price:</td>
            <td className="detail-value">Rs.{reservationDetails.totalPrice}/=</td>
          </tr>
          <tr>
            <td className="detail-label">Departure Time:</td>
            <td className="detail-value">{reservationDetails.departureTime}</td>
          </tr>
          <tr>
            <td className="detail-label">Arrival Time:</td>
            <td className="detail-value">{reservationDetails.arrivalTime}</td>
          </tr>
        </tbody>
      </table>
      {!paymentComplete ? (
        <>
          {showPaymentForm ? (
            <div className="payment-form">
              {/* Payment form */}
              <label htmlFor="cardNumber">Card Number:</label>
              <input type="text" id="cardNumber" name="cardNumber" required />
              <button className="submit-button" onClick={handlePayment}>
                Pay Now
              </button>
            </div>
          ) : (
            <button className="submit-button" onClick={() => setShowPaymentForm(true)}>
              Complete Payment
            </button>
          )}
        </>
      ) : (
        <div className="payment-success">
          <p>Payment Successful! Your ticket is confirmed.</p>
          {TicketDisplay && <TicketDisplay reservationDetails={reservationDetails} />}
        </div>
      )}
    </div>
  );
};

export default ReservationDetails;
