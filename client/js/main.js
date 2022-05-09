fetch('http://127.0.0.1:3001/employees').then(res => res.json()).then(data => {
    data.forEach(employee => {
        const employeeCard = document.createElement('div');
        employeeCard.classList.add('employee-card');
        employeeCard.innerHTML = `Employee: ${employee.name}`;
        document.body.appendChild(employeeCard);
    })
})