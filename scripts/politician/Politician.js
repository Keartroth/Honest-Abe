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
                        politicianObject.bills.map(d => {
                            return`
                            <li>${d.name}   ( ${d.interestName} )</li>`
                        }).join("")
                    }
                </div>
            </div>
            <div class="pac__donations">
                <h4>PAC Donations to ${politicianObject.name.first} ${politicianObject.name.last}</h4>
                <ul>
                    ${
                        politicianObject.donors.map(d => {
                        return`
                        <li>${d.name}   ( $${d.amount} )</li>`
                        }).join("")
                    }
                </ul>
            </div>
            <div class="politician__influencers">
                <h4>Influencing Corporations</h4>
                <ul>
                ${
                    politicianObject.corporations.map(d => {
                    return`
                    <li>${d.company}</li>`
                    }).join("")
                }
                </ul>
            </div>
        </section>
    `
}