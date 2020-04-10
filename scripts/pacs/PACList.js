import { usePACs } from "./pacProvider.js";
import { useCorporateDonations } from "./corporationDonationProvider.js";
import { PAC } from "./PAC.js";
import { useCompanies } from "../companies/companyProvider.js";

// DOM reference for an element with the id of pacs.
const contentTarget = document.querySelector("#pacs");

// DOM reference for an element with the id of pacsHeader.
const contentHeaderTarget = document.querySelector("#pacsHeader");

/*
* A function that maps over an array and returns a string of HTML utilizing the
* PAC function and inserts that string on the DOM at the reference node.
*/
const render = (arrayOfPACs) => {
    contentTarget.innerHTML += arrayOfPACs.map(p => PAC(p)).join("");
}

// A function that passes an array of PAC objects to the render function; PACList is invoked on main.
export const PACList = () => {

    // Declare a variable to hold all the PACs from the fetch call in getPACs.
    const allThePACs = usePACs();

    // Declare a variable to hold all the corporate donations from the fetch call in getCorporateDonations.
    const allTheCorporateDonations = useCorporateDonations();

    // Declare a variable to hold all the companies from the fetch call in getCompanies.
    const allTheCompanies = useCompanies();

    // Inserts a string of HTML as a header for the PACs article.
    contentHeaderTarget.innerHTML = "<h3>List of PACs</h3>"
    
    // Iterate overr the array, allThePACs.
    allThePACs.map(p => {

        // For every PAC object, p, create a new property, donors.
        p.donors = [];

        /*
        * Iterate through the array of corporate donations to PACs to filter for a new array
        * of only donations relating to the current PAC object, p, from line 35. Then
        * iterate over this new array with the .map array method.
        */
        allTheCorporateDonations.filter(d => d.pacId === p.id).map(donationObject => {
            
            // For each iteration of the filtered array, create a new empty object, donorObject.
            let donorObject ={};

            /*
            * Iterate the array of companies and return the first object, c, whose id matches
            * the property, corporationId, of the donationObject from line 45 and capture the
            * returned value in the variable, foundCorporation.
            */
            let foundCorporation = allTheCompanies.find(c => c.id === donationObject.corporationId);

            // Create a property of name on the donorObject and set the value equal to foundCorporation.company.
            donorObject.name = foundCorporation.company;

            // Create a property of amount on the donorObject and set the value equal to donationObject.amount.
            donorObject.amount = donationObject.amount;

            // push the donorObject into the array, p.donors, that is declared on line 38.
            p.donors.push(donorObject);
        })
    })
    // Invokes render with allThePACs as the parameter to the argument.
    render(allThePACs);
}