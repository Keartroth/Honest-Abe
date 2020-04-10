import { usePoliticians } from "./politicianProvider.js";
import { Politician } from "./Politician.js";
import { usePACs } from "../pacs/pacProvider.js";
import { usePACDonations } from "./pacDonationsProvider.js";
import { useInterests } from "./interestsProvider.js";
import { useCorporateInterests } from "./corporateInterestsProvider.js";
import { useLegislations } from "./legislationProvider.js";
import { usePoliticianLegislations } from "./politicianLegislationProvider.js";
import { useCompanies } from "../companies/companyProvider.js";
import { useCorporateDonations } from "../pacs/corporationDonationProvider.js";

// DOM reference for an element with the id of politicians.
const contentTarget = document.querySelector("#politicians");

// DOM reference for an element with the id of politicianHeader.
const contentHeaderTarget = document.querySelector("#politicianHeader");

// A function that checks the length of an array and returns different strings depending on the length.
export const checkingBillsLength = (politicianObject) => {
    if (politicianObject.bills.length === 0) {
        return`
        <p>No sponsored bills</p>`
    } else {
        return`
        ${
            politicianObject.bills.map(d => {
                return`
                <li>${d.name}   ( ${d.interestName} )</li>`
            }).join("")
        }
        `
    }
}

// A function that checks the length of an array and returns different strings depending on the length.
export const checkingDonorsLength = (politicianObject) => {
    if (politicianObject.donors.length === 0) {
        return`
        <p>No donations from any PACs</p>`
    } else {
        return`
        ${
            politicianObject.donors.map(d => {
            return`
            <li>${d.name}   ( $${d.amount} )</li>`
            }).join("")
        }
        `
    }
}

// A function that checks the length of an array and returns different strings depending on the length.
export const checkingCorporationsLength = (politicianObject) => {
    if (politicianObject.corporations.length === 0) {
        return`
        <p>No corporations that share interests with any bills sponsored by this politician have contributed to PACs that have contributed to this politician</p>`
    } else {
        return`
        ${
            politicianObject.corporations.map(d => {
            return`
            <li>${d.company}</li>`
            }).join("")
        }
        `
    }
}

/*
* A function that maps over an array and returns a string of HTML utilizing the
* Politician function and inserts that string on the DOM at the reference node.
*/
const render = (politiciansArray) => {
    contentTarget.innerHTML += politiciansArray.map(p => Politician(p)).join("")
};

// A function that passes an array of politician objects to the render function; PoliticianList is invoked on main.
export const PoliticianList = () => {

    // Declare a variable to hold all the politicians from the fetch call in getPoliticians.
    const allThePoliticians = usePoliticians();

    // Declare a variable to hold all the PACs from the fetch call in getPACs.
    const allThePACs = usePACs();

    // Declare a variable to hold all the PAC donations from the fetch call in getPACDonations.
    const allThePACDonations = usePACDonations();

    // Declare a variable to hold all the interests from the fetch call in getInterests.
    const allTheInterests = useInterests();

    // Declare a variable to hold all the corporate interest relationships from the fetch call in getCorporateInterests.
    const allTheCorporateInterests = useCorporateInterests();

    // Declare a variable to hold all the legislations from the fetch call in getLegislations.
    const allTheLegislations = useLegislations();

    // Declare a variable to hold all the politician legislation relationships from the fetch call in getPoliticianLegislations.
    const allThePoliticianLegislations = usePoliticianLegislations();

    // Declare a variable to hold all the companies from the fetch call in getCompanies.
    const allTheCompanies = useCompanies();

    // Declare a variable to hold all the corporate donations relationships from the fetch call in getCorporateDonations.
    const allTheCorporateDonations = useCorporateDonations();

    // Inserts a string of HTML as a header for the politicians article.
    contentHeaderTarget.innerHTML = "<h3>List of Politicians</h3>"

    // Iterate overr the array, allThePoliticians.
    allThePoliticians.map(p => {

        // For every politician object, p, create a new property, donors.
        p.donors = [];

        // For every politician object, p, create a new property, bills.
        p.bills = [];

        // For every politician object, p, create a new property, corporations.
        p.corporations = [];

        /*
        * For each iteration of allThePoliticians (line 60), iterate through the array of PAC donations to politicians
        *  to filter for a new array of only donations relating to the current politician object, p, from line 60. Then
        * iterate over this new array with the .map array method.
        */
        allThePACDonations.filter(d => d.politicianId === p.id).map(politicianObject => {

            // For each iteration of the filtered array, create a new empty object, donorObject.
            let donorObject ={};

            /*
            * Iterate the array of PACs and return the first object, cp, whose id matches
            * the property, pacId, of the politicianObject from line 76 and capture the
            * returned value in the variable, foundPAC.
            */
            let foundPAC = allThePACs.find(cp => cp.id === politicianObject.pacId);

            // Create a property of name on the donorObject and set the value equal to foundPAC.registeredName.
            donorObject.name = foundPAC.registeredName;

            // Create a property of amount on the donorObject and set the value equal to politicianObject.amount.
            donorObject.amount = politicianObject.amount;

            // Create a property of pacId on the donorObject and set the value equal to politicianObject.pacId.
            donorObject.pacId = politicianObject.pacId;

            // push the donorObject into the array, p.donors, that is declared on line 63.
            p.donors.push(donorObject);
        })

        /*
        * For each iteration of allThePoliticians (line 60), iterate through the array of politician legislation relationships
        * to filter for a new array of only objects relating to the current politician object, p, from line 60. Then
        * iterate over this new array with the .map array method.
        */
        allThePoliticianLegislations.filter(l => l.politicianId === p.id).map(politicianLegislationObject => {

            /*
            * Iterate the array of legislations and return the first object, cl, whose id matches
            * the property, legislationId, of the politicianLegislationObject from line 106 and capture the
            * returned value in the variable, foundLegislation.
            */
            let foundLegislation = allTheLegislations.find(cl => cl.id === politicianLegislationObject.legislationId);

            /*
            * Iterate the array of interests and return the first object, i, whose id matches
            * the property, interestId, of the foundLegislation from line 113 and capture the
            * returned value in the variable, foundInterest.
            */
            let foundInterest = allTheInterests.find(i => i.id === foundLegislation.interestId);

            // Create a property of interestName on the foundLegislation object and set the value equal to foundInterest.about.
            foundLegislation.interestName = foundInterest.about;

            // push the foundLegislation object into the array, p.bills, that is declared on line 66.
            p.bills.push(foundLegislation);
        })

        /*
        * For each iteration of allThePoliticians (line 60), iterate overr the array, p.bills,
        * which contains all legislation related to the current politician object, p, line 60.
        * 
        * In order to find all corporations that share the same interests as the politician's legislation,
        * and, have contributed to PACs that have contributed to the politician, perform the following steps:
        * 
        * Step One: Filter for all corporations interested in the current legilation's field of interest.
        * Step Two: Look at all PAC donations to the current politician.
        * Step Three: For each PAC donation, search for a corporate donation in the filtered array of corporate donations (only those that share interest with the current bill).
        * Step Four: Find the corresponding company name from the corporate donation, assign it to a property, push the object into an array on the current politician.
        * Step Five: Create a Set object with the array of companies to remove redundant objects.
        * Step Six: Replace the array of companies with a new array, created by transforming the Set object into an array.
        */
        p.bills.map(b => {

            /*
             * For each iteration of p.bills (line 133 - legislation which the current politician has sponsored),
             * iterate over the array of corporate interests to filter for a new array of objects relating
             * to the current legislation object, b, from line 133. Then iterate over this new array with the .map array method.
             */
            allTheCorporateInterests.filter(ci => ci.interestId === b.interestId).map(cci => {

                /*
                * For each iteration of the filtered array, cci, iterate over the array of corporate donations to PACs
                * and store the filtered array in the variable, currentCorporationDonations.
                */
                let currentCorporationDonations = allTheCorporateDonations.filter(cd => cd.corporationId === cci.corporationId);

                /*
                * For each iteration of the filtered array, cci, iterate over the array of PAC donations (p.donors line 63)
                * to the current politician, p (line 60).
                */
                p.donors.map(d => {

                    /*
                    * Iterate the array of corporate donations to PACs and return the first object, ccd, 
                    * whose pacId matches the property, pacId, of the donation object, d, from line 162
                    * and capture the returned value in the variable, foundCorporateDonation.
                    * If there is no matching corporate donation, and the find method would return undefined,
                    * do not return anything (line 173).
                    */
                    let foundCorporateDonation = currentCorporationDonations.find(ccd => {
                        let fccd = ccd.pacId === d.pacId
                        return fccd !== undefined
                    });

                    /*
                    * Iterate the array of companies and return the first object, c, whose id matches the property, corporationId,
                    * of the corporate donation object, foundCorporateDonation, from line 171, and capture the returned value
                    * in the variable, foundCorporation.
                    */
                    let foundCorporation = allTheCompanies.find(c => c.id === foundCorporateDonation.corporationId);

                    // push the foundCorporation object into the array, p.corporations, that is declared on line 69.
                    p.corporations.push(foundCorporation);
                })
            })
        })

        // Create a Set object from the array, p.corporations; this will remove any redundant objects.
        const uniqueSet = new Set(p.corporations);

        // Replace the array, p.corporations, with an array created by transforming the Set object, uniqueSet (line 190), into an array.
        p.corporations = [...uniqueSet];
    })
    
    // Invokes render with allThePACs as the parameter to the argument.
    render(allThePoliticians);
}