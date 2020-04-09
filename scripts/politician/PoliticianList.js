import { usePoliticians } from "./politicianProvider.js";
import { Politician } from "./Politician.js";
import { usePACs } from "../pacs/pacProvider.js";
import { usePACDonations } from "./pacDonationsProvider.js";

const contentTarget = document.querySelector("#politicians");

const render = (politiciansArray) => {
    contentTarget.innerHTML += politiciansArray.map(p => Politician(p)).join("")
};

export const PoliticianList = () => {
    const allThePolititians = usePoliticians();
    const allThePACs = usePACs();
    const allThePACDonations = usePACDonations();

    contentTarget.innerHTML = "<h3>List of Politicians</h3>"
    allThePolititians.map(p => {
        p.donors = [];
        allThePACDonations.filter(d => d.politicianId === p.id).map(object => {
            let donorObject ={};
            let foundPAC = allThePACs.find(cp => cp.id === object.pacId);
            donorObject.name = foundPAC.registeredName;
            donorObject.amount = object.amount;
            p.donors.push(donorObject);
        })
    })
    render(allThePolititians);
}