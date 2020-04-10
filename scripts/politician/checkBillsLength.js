// A function that checks the length of an array and returns different strings depending on the length.
export const checkBillsLength = (politicianObject) => {
    if (politicianObject.bills.length === 0) {
        return`
        <p>No sponsored bills</p>`
    } else {
        return`
        ${
            politicianObject.bills.map(d => {
                return`
                <li>${d.name}   ( ${d.interestName} )</li>`
            }).join("")
        }`
    }
}