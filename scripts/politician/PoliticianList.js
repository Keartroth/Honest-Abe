import { usePoliticians } from "./politicianProvider.js";
import { Politician } from "./Politician.js";

const contentTarget = document.querySelector("#politicians");

const render = (politiciansArray) => {
    contentTarget.innerHTML += politiciansArray.map(p => Politician(p)).join("")
};

export const PoliticianList = () => {
    const allThePolititians = usePoliticians();
    render(allThePolititians);
}