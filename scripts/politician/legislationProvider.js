// Declare an empty array to hold all the data from the fetch call.
let legislations = []

// Declare and export a function to copy the fetched data to be used in other modules.
export const useLegislations = () => legislations.slice()

/*
* Function to perform the fetch call for the legislations resource
*  and then fills the previously empty array with our parsed data.
*/
export const getLegislations = () => fetch("http://localhost:8088/legislations")
    .then(response => response.json())
    .then(data => legislations = data)