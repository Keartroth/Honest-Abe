// Declare an empty array to hold all the data from the fetch call.
let corporateInterests = []

// Declare and export a function to copy the fetched data to be used in other modules.
export const useCorporateInterests = () => corporateInterests.slice()

/*
* Function to perform the fetch call for the corporateinterests resource
*  and then fills the previously empty array with our parsed data.
*/
export const getCorporateInterests = () => fetch("http://localhost:8088/corporateinterests")
    .then(response => response.json())
    .then(data => corporateInterests = data)