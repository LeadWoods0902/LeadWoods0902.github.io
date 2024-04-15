// Fetch the number of commits and set the document title accordingly
async function setDocumentTitle() {
    try {
        const response = await fetch('https://api.github.com/repos/LeadWoods0902/LeadWoods0902.github.io/commits');
        const commits = await response.json();
        const numCommits = commits.length;
        if (numCommits !== null) {
            console.log('Number of commits:', numCommits);
            document.title = `The LeadenWoods: V${numCommits}`;
        } else {
            console.log('Failed to fetch number of commits.');
        }
    } catch (error) {
        console.error('Error fetching commits:', error);
    }
}

setDocumentTitle();
