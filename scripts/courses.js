const courses = [
  { code: "WDD 130", credits: 3, completed: true, type: "wdd" },
  { code: "WDD 131", credits: 3, completed: true, type: "wdd" },
  { code: "WDD 231", credits: 3, completed: false, type: "wdd" },
  { code: "CSE 110", credits: 2, completed: true, type: "cse" }
];

const container = document.getElementById("courseCards");
const totalCredits = document.getElementById("totalCredits");

function displayCourses(list) {
  container.innerHTML = "";
  const credits = list.reduce((sum, c) => sum + c.credits, 0);

  list.forEach(course => {
    const div = document.createElement("div");
    div.className = `course ${course.completed ? "completed" : ""}`;
    div.textContent = course.code;
    container.appendChild(div);
  });

  totalCredits.textContent = `Total Credits for the course(s) listed above is ${credits}`;
}

displayCourses(courses);

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    if (filter === "all") {
      displayCourses(courses);
    } else {
      displayCourses(courses.filter(c => c.type === filter));
    }
  });
});

