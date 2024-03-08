const baseURL = "https://alexaaronespinoza42.github.io/wdd230/";
const linksURL = "https://alexaaronespinoza42.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const activityLinks = document.getElementById('activity-links');

  weeks.forEach(week => {
    const weekListItem = document.createElement('li');
    const weekTitle = document.createElement('h2');
    weekTitle.textContent = `Week ${week.lesson}:`;
    weekListItem.appendChild(weekTitle);

    const linksList = document.createElement('ul');

    week.links.forEach(link => {
      const linkItem = document.createElement('li');
      const linkAnchor = document.createElement('a');
      linkAnchor.href = `${baseURL}${link.url}`;
      linkAnchor.textContent = link.title;
      linkItem.appendChild(linkAnchor);
      linksList.appendChild(linkItem);
    });

    weekListItem.appendChild(linksList);
    activityLinks.appendChild(weekListItem);
  });
}

getLinks();
