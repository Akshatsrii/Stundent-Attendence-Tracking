import React from "react";
import "../styles/attendance.css";

const Attendance = () => {
  return (
    <main className="attendance-page">

      {/* Header */}
      <section className="attendance-header">
        <h1>Attendance Portal</h1>
        <p>Check your course-wise attendance records.</p>
      </section>

      {/* Attendance Table */}
      <section className="attendance-table-section">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Classes Held</th>
              <th>Classes Attended</th>
              <th>Percentage</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Data Structures</td>
              <td>45</td>
              <td>41</td>
              <td>91%</td>
            </tr>

            <tr>
              <td>Operating Systems</td>
              <td>40</td>
              <td>36</td>
              <td>90%</td>
            </tr>

            <tr>
              <td>DBMS</td>
              <td>42</td>
              <td>39</td>
              <td>92%</td>
            </tr>

            <tr>
              <td>Computer Networks</td>
              <td>38</td>
              <td>34</td>
              <td>89%</td>
            </tr>

            <tr>
              <td>OOP (C++)</td>
              <td>41</td>
              <td>37</td>
              <td>90%</td>
            </tr>
          </tbody>
        </table>
      </section>

    </main>
  );
};

export default Attendance;
