const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#gridView");
const listButton = document.querySelector("#listView");

async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

function displayMembers(members) {
  membersContainer.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("article");
    card.classList.add("member-card");

    card.innerHTML = `
      <h3 class="member-name">${member.name}</h3>
      <img src="images/members/${member.image}" alt="${member.name} logo">
      <p class="address">${member.address}</p>
      <p class="phone">${member.phone}</p>
      <a href="${member.website}" target="_blank" rel="noopener">
        ${member.website}
      </a>
    `;

    membersContainer.appendChild(card);
  });
}


/* View toggle */
gridButton.addEventListener("click", () => {
  membersContainer.classList.add("grid");
  membersContainer.classList.remove("list");
});

listButton.addEventListener("click", () => {
  membersContainer.classList.add("list");
  membersContainer.classList.remove("grid");
});

getMembers();