import { getPoliticians } from "./politician/politicianProvider.js";
import { PoliticianList } from "./politician/PoliticianList.js";
import { getCompanies } from "./companies/companyProvider.js";
import { CompanyList } from "./companies/CompanyList.js";

getPoliticians()
    .then(PoliticianList)

getCompanies()
    .then(CompanyList)