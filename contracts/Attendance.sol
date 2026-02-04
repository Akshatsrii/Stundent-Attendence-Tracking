// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Attendance {

    // =========================
    // STRUCTS & MAPPINGS
    // =========================

    struct Student {
        uint256 roll;
        bool exists;
        uint256 attendanceCount;
    }

    mapping(address => Student) private students;

    // =========================
    // EVENTS
    // =========================

    event StudentRegistered(address student, uint256 roll);
    event AttendanceMarked(address student, uint256 day);

    // =========================
    // STUDENT FUNCTIONS
    // =========================

    // Register student (one time)
    function registerStudent(uint256 roll) public {
        require(!students[msg.sender].exists, "Already registered");

        students[msg.sender] = Student({
            roll: roll,
            exists: true,
            attendanceCount: 0
        });

        emit StudentRegistered(msg.sender, roll);
    }

    // Mark attendance (only if registered)
    function markAttendanceByStudent(uint256 day) public {
        require(students[msg.sender].exists, "Student not registered");

        students[msg.sender].attendanceCount += 1;

        emit AttendanceMarked(msg.sender, day);
    }

    // =========================
    // AUTH / LOGIN CHECK
    // =========================

    // 🔥 THIS IS IMPORTANT FOR LOGIN
    function isStudentRegistered(address student)
        public
        view
        returns (bool)
    {
        return students[student].exists;
    }

    // =========================
    // VIEW FUNCTIONS
    // =========================

    function getStudentDetails(address student)
        public
        view
        returns (uint256 roll, uint256 attendanceCount)
    {
        require(students[student].exists, "Student not registered");

        Student memory s = students[student];
        return (s.roll, s.attendanceCount);
    }
}
