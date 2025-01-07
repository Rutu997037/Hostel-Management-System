const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const students = JSON.parse(localStorage.getItem('students')) || [];
    const student = students.find((s) => s.email === email && s.password === password);

    if (student) {
        alert(`Welcome back, ${student.name}!`);
        window.location.href = '../pages/student-dashboard.html';
    } else {
        alert('Invalid credentials!');
    }
});
