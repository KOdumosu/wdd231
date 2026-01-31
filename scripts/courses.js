const courses = [
  {
    code: "WDD 130",
    credits: 2,
    completed: true,
    type: "wdd",
    subject: "WDD",
    number: "130",
    title: "Web Fundamentals",
    description: "This course introduces students to the world wide web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this as a major",
    certificate: "Web and Computer Programming",
    technology: ["HTML", "CSS"]
  },
  {
    code: "WDD 131",
    credits: 3,
    completed: true,
    type: "wdd",
    subject: "WDD",
    number: "131",
    title: "Dynamic Web Fundamentals",
    description: "This course, Dynamic Web Fundamentals is an introductory 3-credit course that covers the essentials of using JavaScript for building dynamic web pages. It is a core component of the Web Development Certificate program.",
    certificate: "Web Development",
    technology: ["JavaScript"]
  },
  {
    code: "WDD 231",
    credits: 3,
    completed: false,
    type: "wdd",
    subject: "WDD",
    number: "231",
    title: "Frontend Web Development I",
    description: "The course Frontend Web Development I is a part of a Web Development Certificate program and is an introductory yet intensive course covering. It aims to provide students with the foundational skills to design and build responsive and interactive web interfaces using modern tools.",
    certificate: "Web Development",
    technology: ["HTML", "CSS", "JavaScript"]
  },
  {
    code: "CSE 110",
    credits: 2,
    completed: true,
    type: "cse",
    subject: "CSE",
    number: "110",
    title: "Introduction to Programming",
    description: "  This course introduces students to the fundamental concepts of programming using Python. Topics include variables, data types, control structures, functions, and basic data structures. Students will gain hands-on experience through coding exercises and projects. As it provides a foundational understanding of computer science principles through the Python programming language. It is designed for students with little to no prior coding experience.The course is designed to transition students from basic computer literacy to functional programming competence.",
    certificate: "Computer Science",
    technology: ["Python"]
  }
];

const container = document.getElementById("courseCards");
const totalCredits = document.getElementById("totalCredits");
const courseDetails = document.getElementById("course-details");

/* ==========================
   DISPLAY COURSES
   ========================== */
function displayCourses(list) {
  container.innerHTML = "";
  const credits = list.reduce((sum, c) => sum + c.credits, 0);

  list.forEach(course => {
    const div = document.createElement("div");
    div.className = `course course-card ${course.completed ? "completed" : ""}`;
    div.textContent = course.code;

    // 🔹 MODAL TRIGGER
    div.addEventListener("click", () => {
      displayCourseDetails(course);
    });

    container.appendChild(div);
  });

  totalCredits.textContent = `Total Credits for the course(s) listed above is ${credits}`;
}

/* ==========================
   MODAL DISPLAY FUNCTION
   ========================== */
function displayCourseDetails(course) {
  courseDetails.innerHTML = `
  <div class="modal-header">
    <h2>${course.subject} ${course.number}</h2>
    <button id="closeModal" aria-label="Close dialog">❌</button>
  </div>

  <div class="modal-body">
    <h3>${course.title}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
  </div>
`;
  courseDetails.showModal();

  // Close button
  document.getElementById("closeModal").addEventListener("click", () => {
    courseDetails.close();
  });

  // Close when clicking outside modal
  courseDetails.addEventListener("click", (event) => {
    if (event.target === courseDetails) {
      courseDetails.close();
    }
  });
}

/* ==========================
   INITIAL LOAD
   ========================== */
displayCourses(courses);

/* ==========================
   FILTER BUTTONS
   ========================== */
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


