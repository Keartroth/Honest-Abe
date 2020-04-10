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

const contentTarget = document.querySelector("#politicians");

const render = (politiciansArray) => {
    contentTarget.innerHTML += politiciansArray.map(p => Politician(p)).join("")
};

export const PoliticianList = () => {
    const allThePolititians = usePoliticians();
    const allThePACs = usePACs();
    const allThePACDonations = usePACDonations();
    const allTheInterests = useInterests();
    const allTheCorporateInterests = useCorporateInterests();
    const allTheLegislations = useLegislations();
    const allThePoliticiansLegislations = usePoliticianLegislations();
    const allTheCompanies = useCompanies();
    const allTheCorporateDonations = useCorporateDonations();

    contentTarget.innerHTML = "<h3>List of Politicians</h3>"
    allThePolititians.map(p => {
        p.donors = [];
        p.bills = [];
        p.corporations = [];

        allThePACDonations.filter(d => d.politicianId === p.id).map(object => {
            let donorObject ={};
            let foundPAC = allThePACs.find(cp => cp.id === object.pacId);
            donorObject.name = foundPAC.registeredName;
            donorObject.amount = object.amount;
            donorObject.pacId = object.pacId;
            p.donors.push(donorObject);
        })
        allThePoliticiansLegislations.filter(l => l.politicianId === p.id).map(object => {
            let foundLegislation = allTheLegislations.find(cl => cl.id === object.legislationId);
            let foundInterest = allTheInterests.find(i => i.id === foundLegislation.interestId);
            foundLegislation.interestName = foundInterest.about;
            p.bills.push(foundLegislation);
        })
        p.bills.map(b => {
            allTheCorporateInterests.filter(ci => ci.interestId === b.interestId).map(cci => {
                let currentCorporationDonations = allTheCorporateDonations.filter(cd => cd.corporationId === cci.corporationId);
                p.donors.map(d => {
                    let foundCorporateDonation = currentCorporationDonations.find(ccd => {
                        let fccd = ccd.pacId === d.pacId
                        return fccd !== undefined
                    }); 
                    let foundCorporation = allTheCompanies.find(c => c.id === foundCorporateDonation.corporationId);
                    p.corporations.push(foundCorporation);
                })
            })
        })
        const uniqueSet = new Set(p.corporations);
        p.corporations = [...uniqueSet];
    })
    render(allThePolititians);
}