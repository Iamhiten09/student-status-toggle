document.addEventListener('DOMContentLoaded', () => {
    const students = [
        { name: 'Alice', status: 'pass' },
        { name: 'Bob', status: 'fail' },
        { name: 'Charlie', status: 'pass' },
        { name: 'Dave', status: 'fail' },
        { name: 'Eve', status: 'pass' }
    ];

    const studentTable = document.getElementById('studentTable');
    const toggleAllBtn = document.getElementById('toggleAllBtn');

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td class="status ${student.status}" data-index="${index}">${student.status}</td>
        `;
        studentTable.appendChild(row);
    });

    toggleAllBtn.addEventListener('click', () => {
        students.forEach((student, index) => {
            const statusCell = document.querySelector(`.status[data-index="${index}"]`);
            student.status = student.status === 'pass' ? 'fail' : 'pass';
            statusCell.textContent = student.status;
            statusCell.classList.toggle('pass');
            statusCell.classList.toggle('fail');
        });
    });
});
