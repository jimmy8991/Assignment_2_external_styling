function changeContent(heading, selectedLinkId) {
    document.getElementById('content-heading').innerText = heading;
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.style.color = 'blue'; // Reset all links to blue
    });
    document.getElementById(selectedLinkId).style.color = 'purple'; // Highlight the selected link

    var contentArea = document.getElementById('content-area');
    contentArea.innerHTML = ''; // Clear the content area
    contentArea.style.flexDirection = 'row'; // Set content area flex direction to row for side by side layout
            contentArea.style.flexWrap = 'wrap'; // Allow content to wrap within the content area
            contentArea.style.justifyContent = 'flex-start'; // Align content to the start of the content area
            contentArea.style.alignItems = 'flex-start'; // Align items to the start of the cross axis
            contentArea.style.gap = '10px'; // Add gap between item
    
            // For Work Experience
            if (heading === 'Work Experience') {
                const workExperiences = [
                    {
                        companyName: "McDonald’s",
                        companyUrl: "https://www.mcdonalds.com",
                        jobTitle: "Department Manager",
                        dates: "Nov 28, 2018 - Aug 5, 2020"
                    },
                    {
                        companyName: "Motivate Bike Share Company (Citi Bike)",
                        companyUrl: "https://www.citibikenyc.com",
                        jobTitle: "Sales Associate",
                        dates: "March 26, 2017 - August 22, 2017"
                    },
                    {
                        companyName: "Duane Reade Pharmacy",
                        companyUrl: "https://www.walgreens.com",
                        jobTitle: "Cashier",
                        dates: "November 12, 2016 - March 15, 2017"
                    }
                ];
                workExperiences.forEach(function(exp) {
                    var expDiv = document.createElement('div');
                    expDiv.style.width = '30%'; // Set width for each experience block
                    expDiv.innerHTML = `
                        <strong>${exp.companyName}</strong> <br>
                        <a href="${exp.companyUrl}" target="_blank" style="color: blue;">Company Site</a> <br>
                        ${exp.jobTitle} <br>
                        ${exp.dates}
                    `;
                    contentArea.appendChild(expDiv);
                });
            } 
            // For Education Experience - 'else if' is used here
            else if (heading === 'Education Experience') {
                const educationExperiences = [
                    {
                        schoolName: "State University of New York at Albany",
                        schoolUrl: "https://www.albany.edu",
                        period: "Fall 2017 - Present"
                    },
                    {
                        schoolName: "Urban Dove Team Charter High School",
                        schoolUrl: "https://urbandove.org",
                        period: "2013 - 2017"
                    },
                    {
                        schoolName: "Excellence Boys Charter School",
                        schoolUrl: "https://excellenceboys.uncommonschools.org",
                        period: "2005 - 2013"
                    }
                ];
                educationExperiences.forEach(function(edu) {
                    var eduDiv = document.createElement('div');
                    eduDiv.style.width = '30%'; // Set width for each education block
                    eduDiv.innerHTML = `
                        <strong>${edu.schoolName}</strong> <br>
                        <a href="${edu.schoolUrl}" target="_blank" style="color: blue;">School Site</a> <br>
                        ${edu.period}
                    `;
                    contentArea.appendChild(eduDiv);
                });
            } 
            // For Related Awards and Skills - 'else if' is used here
            else if (heading === 'Related Awards and Skills') {
                const skillsAwards = {
                    skills: [
                        "Inventory Management",
                        "Leadership and Management",
                        "Customer Service Excellence"
                    ],
                    awards: [
                        "Employee of the Year 2019 - McDonald's",
                        "Top Sales Associate - Citi Bike, August 2017"
                    ]
                };
                var skillsDiv = document.createElement('div');
                skillsDiv.style.width = '30%'; // Set width for the skills block
                skillsDiv.innerHTML = '<strong>Skills:</strong><br>' + skillsAwards.skills.join('<br>');

                var awardsDiv = document.createElement('div');
                awardsDiv.style.width = '30%'; // Set width for the awards block
                awardsDiv.innerHTML = '<strong>Awards:</strong><br>' + skillsAwards.awards.join('<br>');

                contentArea.appendChild(skillsDiv);
                contentArea.appendChild(awardsDiv);
            }
        }

// Initialize with Work Experience content
window.onload = function() {
    changeContent('Work Experience', 'workExperienceLink');
};
