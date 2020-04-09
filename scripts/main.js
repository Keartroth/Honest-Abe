import { getPoliticians } from "./politician/politicianProvider.js";
import { PoliticianList } from "./politician/PoliticianList.js";

getPoliticians()
    .then(PoliticianList)