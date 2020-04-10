import { checkingBillsLength, checkingDonorsLength, checkingCorporationsLength } from "./PoliticianList.js"

/*
* Function that returns an HTML representation of a politician with a list of all bills, PAC donors,
* and all corporations that share the same interests as the politician's legislation,
* and have contributed to PACs that have contributed to the politician.
*/
export const Politician = (politicianObject) => {
    return `
        <section class="politician">
            <header class="politician__name">
                <h1>${politicianObject.name.first} ${politicianObject.name.last}</h1>
            </header>
            <div class="politician__info">
                <div>Age: ${politicianObject.age}</div>
                <div>Represents: ${politicianObject.district}</div>
            </div>
            <div class="politician__bills">
                <h4>Sponsored Bills</h4>
                <div>
                    ${
                        checkingBillsLength(politicianObject)
                    }
                </div>
            </div>
            <div class="pac__donations">
                <h4>PAC Donations to ${politicianObject.name.first} ${politicianObject.name.last}</h4>
                <ul>
                    ${
                        checkingDonorsLength(politicianObject)
                    }
                </ul>
            </div>
            <div class="politician__influencers">
                <h4>Influencing Corporations</h4>
                <ul>
                    ${
                        checkingCorporationsLength(politicianObject)
                    }
                </ul>
            </div>
        </section>
    `
}