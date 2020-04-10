// Declare an empty array to hold all the data from the fetch call.
let pacDonations = []

// Declare and export a function to copy the fetched data to be used in other modules.
export const usePACDonations = () => pacDonations.slice()

/*
* Function to perform the fetch call for the pacdonations resource
*  and then fills the previously empty array with our parsed data.
*/
export const getPACDonations = () => fetch("http://localhost:8088/pacdonations")
    .then(response => response.json())
    .then(data => pacDonations = data)