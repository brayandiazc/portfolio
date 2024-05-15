document.addEventListener("DOMContentLoaded", () => {
  fetchGitHubProjects();
});

function fetchGitHubProjects() {
  const username = "brayandiazc";
  const url = `https://api.github.com/users/${username}/repos`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const projectsList = document.getElementById("projects-list");
      data.forEach((repo) => {
        const project = document.createElement("div");
        project.classList.add("project");
        project.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description available"}</p>
                    <a href="${repo.html_url}" target="_blank">Ver en GitHub</a>
                `;
        projectsList.appendChild(project);
      });
    })
    .catch((error) => console.error("Error fetching projects:", error));
}
