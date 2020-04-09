import { getPoliticians } from "./politician/politicianProvider.js";
import { PoliticianList } from "./politician/PoliticianList.js";
import { getCompanies } from "./companies/companyProvider.js";
import { CompanyList } from "./companies/CompanyList.js";
import { getPACs } from "./pacs/pacProvider.js";
import { PACList } from "./pacs/PACList.js";
import { getCorporateDonations } from "./pacs/corporationDonationProvider.js";

getPoliticians()
    .then(PoliticianList)

getCompanies()
    .then(CompanyList)

getPACs()
    .then(getCorporateDonations)
    .then(PACList)