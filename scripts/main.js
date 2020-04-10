import { getPoliticians } from "./politician/politicianProvider.js";
import { PoliticianList } from "./politician/PoliticianList.js";
import { getCompanies } from "./companies/companyProvider.js";
import { CompanyList } from "./companies/CompanyList.js";
import { getPACs } from "./pacs/pacProvider.js";
import { PACList } from "./pacs/PACList.js";
import { getCorporateDonations } from "./pacs/corporationDonationProvider.js";
import { getPACDonations } from "./politician/pacDonationsProvider.js";
import { getCorporateInterests } from "./politician/corporateInterestsProvider.js";
import { getInterests } from "./politician/interestsProvider.js";
import { getLegislations } from "./politician/legislationProvider.js";
import { getPoliticianLegislations } from "./politician/politicianLegislationProvider.js";

getPoliticians()
    .then(getPACs)
    .then(getPACDonations)
    .then(getCorporateInterests)
    .then(getInterests)
    .then(getLegislations)
    .then(getPoliticianLegislations)
    .then(PoliticianList)

getCompanies()
    .then(CompanyList)

getPACs()
    .then(getCorporateDonations)
    .then(PACList)