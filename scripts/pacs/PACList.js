import { usePACs } from "./pacProvider.js";
import { useCorporateDonations } from "./corporationDonationProvider.js";
import { PAC } from "./PAC.js";
import { useCompanies } from "../companies/companyProvider.js";

const contentTarget = document.querySelector("#pacs");

const render = (arrayOfPACs) => {
    contentTarget.innerHTML += arrayOfPACs.map(p => {
        return PAC(p)
    }).join("");
}

export const PACList = () => {
    const allThePACs = usePACs();
    const allTheCorporateDonations = useCorporateDonations();
    const allTheCompanies = useCompanies();

    contentTarget.innerHTML = "<h3>List of PACs</h3>"
    allThePACs.map(p => {
        p.donors = [];
        allTheCorporateDonations.filter(d => d.pacId === p.id).map(object => {
            p.donors.push(object)
            let corporation = allTheCompanies.find(c => c.id === object.corporationId)
            object.name = corporation.company
        })
    })
    render(allThePACs);
}