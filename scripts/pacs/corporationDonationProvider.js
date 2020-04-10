// Declare an empty array to hold all the data from the fetch call.
let corporateDonations = []

// Declare and export a function to copy the fetched data to be used in other modules.
export const useCorporateDonations = () => corporateDonations.slice()

/*
* Function to perform the fetch call for the corporatedonations resource
*  and then fills the previously empty array with our parsed data.
*/
export const getCorporateDonations = () => fetch("http://localhost:8088/corporatedonations")
    .then(response => response.json())
    .then(data => corporateDonations = data)