const rooms = [
    { roomNumber: '101', block: 'A', status: 'Available' },
    { roomNumber: '102', block: 'A', status: 'Occupied' },
    { roomNumber: '103', block: 'A', status: 'Available' },
];

const complaints = [
    { description: 'Air Conditioner not working', status: 'Pending' },
    { description: 'Water leakage', status: 'Resolved' },
];

function populateRoomTable() {
    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = '';
    rooms.forEach((room) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${room.roomNumber}</td>
            <td>${room.block}</td>
            <td>${room.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

function populateComplaints() {
    const complaintsList = document.querySelector('.complaints-list');
    complaintsList.innerHTML = '';
    complaints.forEach((complaint) => {
        const div = document.createElement('div');
        div.className = 'complaint';
        div.innerHTML = `
            <p><strong>Complaint:</strong> ${complaint.description}</p>
            <p><strong>Status:</strong> ${complaint.status}</p>
        `;
        complaintsList.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateRoomTable();
    populateComplaints();
});
