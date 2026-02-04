import React from "react";
import "../styles/transport.css";

const Transport = () => {
  return (
    <main className="transport-page">

      {/* Header */}
      <section className="transport-header">
        <h1>Transport Services</h1>
        <p>
          Safe and comfortable transportation facility for students and staff covering all major routes.
        </p>
      </section>

      {/* Route Table */}
      <section className="transport-table-section">
        <table className="transport-table">
          <thead>
            <tr>
              <th>Route</th>
              <th>Bus Number</th>
              <th>Pick-up Time</th>
              <th>Drop Time</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Chandigarh to Campus</td>
              <td>BUS–09</td>
              <td>7:30 AM</td>
              <td>4:30 PM</td>
            </tr>

            <tr>
              <td>Panchkula to Campus</td>
              <td>BUS–14</td>
              <td>7:45 AM</td>
              <td>4:45 PM</td>
            </tr>

            <tr>
              <td>Mohali to Campus</td>
              <td>BUS–05</td>
              <td>7:40 AM</td>
              <td>4:40 PM</td>
            </tr>

            <tr>
              <td>Kharar to Campus</td>
              <td>BUS–21</td>
              <td>7:35 AM</td>
              <td>4:35 PM</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Bus Safety */}
      <section className="bus-safety-section">
        <h2>Bus Safety Guidelines</h2>

        <ul className="safety-list">
          <li>Follow the instructions given by transport staff.</li>
          <li>Do not stand near the bus door while travelling.</li>
          <li>Arrive 5 minutes early at the pick-up point.</li>
          <li>Seat belts must be used when available.</li>
        </ul>
      </section>

    </main>
  );
};

export default Transport;
