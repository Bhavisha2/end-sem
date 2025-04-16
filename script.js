    const gradeToPoint = {
      A: 4,
      B: 3,
      C: 2,
      D: 1,
      F: 0
    };

    function calculateGPA() {
      const gradeElements = document.querySelectorAll('.course-grade');
      let totalPoints = 0;
      let validGrades = 0;

      gradeElements.forEach(select => {
        const grade = select.value;
        if (grade && gradeToPoint.hasOwnProperty(grade)) {
          totalPoints += gradeToPoint[grade];
          validGrades++;
        }
      });

      const resultDiv = document.getElementById('result');
      if (validGrades === 0) {
        resultDiv.textContent = "Please enter at least one valid grade.";
        resultDiv.style.color = "#e74c3c";
      } else {
        const gpa = (totalPoints / validGrades).toFixed(2);
        resultDiv.textContent = `Estimated GPA: ${gpa}`;
        resultDiv.style.color = "#27ae60";
      }
    }

    function addCourse() {
      const container = document.getElementById('courseContainer');
      const newRow = document.createElement('div');
      newRow.classList.add('row');
      newRow.innerHTML = `
        <input type="text" placeholder="Course Name" class="course-name">
        <select class="course-grade">
          <option value="">Grade</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="F">F</option>
        </select>
      `;
      container.appendChild(newRow);
    }