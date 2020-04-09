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