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
        </section>
    `
}