// A function that checks the length of an array and returns different strings depending on the length.
export const checkCorporationsLength = (politicianObject) => {
    if (politicianObject.corporations.length === 0) {
        return`
        <p>No corporations that share interests with any bills sponsored by this politician have contributed to PACs that have contributed to this politician</p>`
    } else {
        return`
        ${
            politicianObject.corporations.map(d => {
            return`
            <li>${d.company}</li>`
            }).join("")
        }`
    }
}