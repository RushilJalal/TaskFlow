let projectList = ['My Day', 'Personal']

export function renderSidebar() {
    const sidebar = document.getElementsByClassName('sidebar')
    sidebar.classList.add("sidebar")
    document.body.appendChild(sidebar);

    const headingDiv = document.createElement('div')
    headingDiv.classList.add('heading-div')

    const heading = document.createElement('div');
    heading.textContent = 'Projects '
    heading.classList.add('sidebar-heading')

    const addProjectButton = document.createElement('button')
    addProjectButton.textContent = '+'
    addProjectButton.classList.add("add-project-button")

    headingDiv.appendChild(heading)
    headingDiv.appendChild(addProjectButton);


    sidebar.appendChild(headingDiv);

    projectList.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.textContent = project
        sidebar.appendChild(projectItem)
    })

}