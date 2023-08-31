import React, { useState } from 'react';
import '../style/Timetable.css';
import jsonData from '../pages/schedule.json';

const Timetable = () => {
  // State to store selected origin, destination, and schedule visibility
  const [selectedOrigin, setSelectedOrigin] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showSchedule, setShowSchedule] = useState(false);

  // Array of origin values obtained from the JSON data
  const originValues = jsonData.schedule.map(entry => entry.origin);

  // Function to find the selected schedule based on origin and destination
  const findSelectedSchedule = () => {
    return jsonData.schedule.find(entry => entry.origin === selectedOrigin)
      .trainSchedules.find(schedule => schedule.destination === selectedDestination);
  };

  // Handler for origin selection change
  const handleOriginChange = event => {
    const origin = event.target.value;
    setSelectedOrigin(origin);
    setSelectedDestination(null); // Reset selected destination
    setShowSchedule(false); // Hide schedule
  };

  // Handler for destination selection change
  const handleDestinationChange = event => {
    setSelectedDestination(event.target.value);
    setShowSchedule(false); // Hide schedule
  };

  // Handler for the "Find" button click
  const handleFindClick = () => {
    // Show schedule only if origin and destination are selected
    setShowSchedule(selectedOrigin && selectedDestination);
  };

  // Get the selected schedule based on origin and destination
  const selectedSchedule = selectedOrigin && selectedDestination && findSelectedSchedule();

  return (
    <div className="container">
      {/* Left side */}
      <div className="left-side">
        {/* Origin picker */}
        <div className="picker-container">
          <label className="select-label" htmlFor="originSelect">
            Select Origin:
          </label>
          <select
            id="originSelect"
            value={selectedOrigin}
            onChange={handleOriginChange}
            className="select-element"
          >
            <option value="">Select an origin</option>
            {/* Map origin values to options */}
            {originValues.map((origin, index) => (
              <option key={index} value={origin}>
                {origin}
              </option>
            ))}
          </select>
        </div>
        {/* Destination picker */}
        <div className="picker-container">
          <label className="select-label" htmlFor="destinationSelect">
            Select Destination:
          </label>
          <select
            id="destinationSelect"
            value={selectedDestination}
            onChange={handleDestinationChange}
            className="select-element"
          >
            <option value="">Select a destination</option>
            {/* Display destination options based on selected origin */}
            {selectedOrigin &&
              jsonData.schedule.find(entry => entry.origin === selectedOrigin).trainSchedules.map((schedule, index) => (
                <option key={index} value={schedule.destination}>
                  {schedule.destination}
                </option>
              ))}
          </select>
        </div>
        {/* "Find" button */}
        <button className="find-button" onClick={handleFindClick}>
          Find
        </button>
      </div>
      {/* Right side */}
      <div className="right-side">
        {/* Display selected schedule information */}
        {showSchedule && selectedSchedule && (
          <div className="schedule-info">
            <h2>{selectedOrigin} to {selectedDestination}</h2>
            <p>Departure Time: {selectedSchedule.departureTime}</p>
            <p>Arrival Time: {selectedSchedule.arrivalTime}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timetable;
