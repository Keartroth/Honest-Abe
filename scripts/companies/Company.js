//Function that returns an HTML representation of a company.
export const Company = (companyObject) => {
    return`
        <section class="corporation">
            <header class="corporation__name">
                <h1>${companyObject.company}</h1>
            </header>
            <div class="corporation__info">
                <div>Address: ${companyObject.address}</div>
            </div>
        </section>
    `
}