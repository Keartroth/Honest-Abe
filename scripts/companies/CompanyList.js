import { useCompanies } from "./companyProvider.js";
import { Company } from "./Company.js";

const contentTarget = document.querySelector("#corporations");
const contentHeaderTarget = document.querySelector("#corporationsHeader");

const render = (arrayOfCompanies) => {
    contentTarget.innerHTML += arrayOfCompanies.map(c => {
        return Company(c)
    }).join("");
}

export const CompanyList = () => {
    const allTheCompanies = useCompanies();
    contentHeaderTarget.innerHTML = "<h3>List of Politically Infuential Companies</h3>"
    render(allTheCompanies);
}