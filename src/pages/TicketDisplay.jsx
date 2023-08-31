import React from 'react';
import '../style/TicketDisplay.css'; 
import html2canvas from 'html2canvas';

const TicketDisplay = ({ reservationDetails }) => {
  // Function to download the ticket as an image
  const downloadImage = () => {
    // Find the container element containing the ticket details
    const detailsContainer = document.querySelector('.ticket-card');

    // Generate an image from the reservation details container
    html2canvas(detailsContainer).then(canvas => {
      const image = canvas.toDataURL('image/jpeg'); // Convert canvas to data URL

      // Create a download link for the image
      const link = document.createElement('a');
      link.href = image;
      link.download = `${reservationDetails.name}_train_ticket.jpg`; //  download filename
      link.click();
    });
  };

  return (
    <div className="ticket-display">
      <div className="ticket-card">
        <div className="header">
          <table>
            <tr>
              <td className="logo">
              <img src={require('../images/railwayLogo.png')} alt="Sri Lanka Railways Logo" />

              </td>
              <td className="title">
                <h2>ශ්‍රී ලංකා දුම්රිය සේවය</h2>
                <h2>இலங்கை புகையிரத சேவை</h2>
                <h2>Sri Lanka Railways</h2>
              </td>
            </tr>
          </table>
        </div>
        <div className="details">
  <table>
    <tbody>
    <tr>
        <td className="detail-label">Route:</td>
        <td className="detail-value">{reservationDetails.origin} to {reservationDetails.destination}</td>
      </tr>
      <tr>
        <td className="detail-label">Name:</td>
        <td className="detail-value">{reservationDetails.name}</td>
      </tr>
      <tr>
        <td className="detail-label">NIC:</td>
        <td className="detail-value">{reservationDetails.idCardNumber}</td>
      </tr>
      <tr>
        <td className="detail-label">Date:</td>
        <td className="detail-value">{reservationDetails.date}</td>
      </tr>
      <tr>
        <td className="detail-label">Passenger Count:</td>
        <td className="detail-value">{reservationDetails.passengerCount}</td>
      </tr>
      <tr>
        <td className="detail-label">Total Price:</td>
        <td className="detail-value">Rs.{reservationDetails.totalPrice}/=</td>
      </tr>
      <tr>
        <td className="detail-label">Ref ID:</td>
        <td className="detail-value">{reservationDetails.uniqueId}</td>
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
</div>
<div className="footer">
        <p>දුම්රිය වෙන්කිරීම් සඳහා 365 අමතන්න</p>
        <p>ரயில்வே முன்பதிவுகளுக்கு 365 ஐ டயல் செய்யவும்</p>
        <p>Dial 365 for railway bookings</p>

      </div>
      </div>


      <button className="download-button" onClick={downloadImage}>
        Download Ticket
      </button>
    </div>
  );
};

export default TicketDisplay;
