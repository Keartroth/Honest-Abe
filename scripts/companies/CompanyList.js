import { useCompanies } from "./companyProvider.js";
import { Company } from "./Company.js";

// DOM reference for an element with the id of corporations.
const contentTarget = document.querySelector("#corporations");

// DOM reference for an element with the id of corporationsHeader.
const contentHeaderTarget = document.querySelector("#corporationsHeader");

/*
* A function that maps over an array and returns a string of HTML utilizing the
* Company function and inserts that string on the DOM at the reference node.
*/
const render = (arrayOfCompanies) => {
    contentTarget.innerHTML += arrayOfCompanies.map(c => Company(c)).join("");
}

// A function that passes an array of companies to the render function; CompanyList is invoked on main.
export const CompanyList = () => {

    // Declare a variable to hold all the companies from the fetch call in getCompanies.
    const allTheCompanies = useCompanies();

    // Inserts a string of HTML as a header for the companies article.
    contentHeaderTarget.innerHTML = "<h3>List of Politically Infuential Companies</h3>"

    // Invokes render with allTheCompanies as the parameter to the argument.
    render(allTheCompanies);
}