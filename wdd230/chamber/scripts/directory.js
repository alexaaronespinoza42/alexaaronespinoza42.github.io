const linksURL = "https://alexaaronespinoza42.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector("#cards");

async function getCompaniesData(){
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayCompanies(data.companies);
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

const displayCompanies = (companies) =>{
    companies.forEach((company) => {
        let card = document.createElement("section");
        let cName = document.createElement("h2");
        let logo = document.createElement("img");
        let cDescription = document.createElement("p");
        let address = document.createElement("p");
        let cPhone = document.createElement("p");
        let website = document.createElement("a");
        let membership = document.createElement("h3");

        logo.setAttribute("src", company.image);
        logo.setAttribute("alt", `Logo of ${company.name}`);
        logo.setAttribute("width", "auto");
        logo.setAttribute("height", "auto");

        cName.textContent = `${company.name}`;
        cDescription.textContent = `${company.other_information}`;
        address.textContent = `${company.address}`;
        cPhone.textContent = `Phone: ${company.phone}`;
        membership.textContent = `${company.membership_level} Membership`;
        website.setAttribute("href", `${company.website}`);
        website.textContent = company.website;
        website.setAttribute("target", "_blank");

        card.appendChild(logo);
        card.appendChild(cName);
        card.appendChild(cDescription);
        card.appendChild(address);
        card.appendChild(cPhone);
        card.appendChild(membership);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

getCompaniesData();

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("article");

gridButton.addEventListener("click", () =>{
    display.classList.add("grid-directory");
    display.classList.remove("list-directory");
});

listButton.addEventListener("click", showList);

function showList(){
    display.classList.add("list-directory");
    display.classList.remove("grid-directory");
}
