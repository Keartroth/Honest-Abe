//Function that returns an HTML representation of a PAC with a list of all corporate donors.
export const PAC = (PACObject) => {
    return`
        <section class="pac">
            <header class="pac__name">
                <h1>${PACObject.registeredName}</h1>
            </header>
            <div class="pac__info">
                <div>${PACObject.address}</div>
            </div>
            <div class="pac__donors">
                <h4>Corporate Donations to ${PACObject.registeredName}</h4>
                <ul>
                 ${
                    PACObject.donors.map(d => {
                        return`
                        <li>${d.name} (${d.amount})</li>`
                    }).join("")
                 }
                </ul>
            </div>
        </section>
        `
}