const projects = [
    {
      "title": "Weather App",
      "description_short": "A web app that displays weather information.",
      "description_long": "This project is a responsive web application that fetches weather data from a third-party API and displays it in an intuitive UI.",
      "techstack": ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      "link": "https://github.com/user/weather-app",
      "date_started": "2023-01-15",
      "date_completed": "2023-02-10",
      "on_hold": false
    },
    {
      "title": "Portfolio Website",
      "description_short": "A personal portfolio website.",
      "description_long": "A portfolio website to showcase personal projects, resume, and contact information.",
      "techstack": ["HTML", "CSS", "JavaScript"],
      "link": "https://user.github.io/portfolio",
      "date_started": "2022-11-01",
      "date_completed": null,
      "on_hold": false
    },
    // Add the remaining projects from the JSON example...
  ];
  
  // Initial display of projects
  let filteredProjects = [...projects];
  displayProjects(filteredProjects);
  
  // Filter and Sort Event Handlers
  document.getElementById('search-input').addEventListener('input', filterProjects);
  document.getElementById('start-date').addEventListener('change', filterProjects);
  document.getElementById('end-date').addEventListener('change', filterProjects);
  document.getElementById('completed-filter').addEventListener('change', filterProjects);
  document.getElementById('sort-start').addEventListener('click', () => sortProjects('date_started'));
  document.getElementById('sort-end').addEventListener('click', () => sortProjects('date_completed'));
  
  function filterProjects() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const completedFilter = document.getElementById('completed-filter').value;
  
    filteredProjects = projects.filter(project => {
      const inSearch = searchText === '' || 
        project.title.toLowerCase().includes(searchText) || 
        project.description_short.toLowerCase().includes(searchText) ||
        project.techstack.some(tech => tech.toLowerCase().includes(searchText));
      
      const inStartRange = !startDate || new Date(project.date_started) >= new Date(startDate);
      const inEndRange = !endDate || (project.date_completed && new Date(project.date_completed) <= new Date(endDate));
  
      let meetsCompleted = true;
      if (completedFilter === 'complete') {
        meetsCompleted = project.date_completed !== null
  