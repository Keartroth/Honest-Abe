// A function that checks the length of an array and returns different strings depending on the length.
export const checkDonorsLength = (politicianObject) => {
    if (politicianObject.donors.length === 0) {
        return`
        <p>No donations from any PACs</p>`
    } else {
        return`
        ${
            politicianObject.donors.map(d => {
            return`
            <li>${d.name}   ( $${d.amount} )</li>`
            }).join("")
        }`
    }
}