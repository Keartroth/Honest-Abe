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
            <div class="pac__donations">
                <h4>PAC Donations to ${politicianObject.name.first} ${politicianObject.name.last}</h4>
            <ul>
                ${
                    politicianObject.donors.map(d => {
                        return`
                        <li>${d.name} (${d.amount})</li>`
                    }).join("")
                }
            </ul>
        </div>
        </section>
    `
}