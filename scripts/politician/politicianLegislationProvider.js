// Declare an empty array to hold all the data from the fetch call.
let politicianLegislations = []

// Declare and export a function to copy the fetched data to be used in other modules.
export const usePoliticianLegislations = () => politicianLegislations.slice()

/*
* Function to perform the fetch call for the politicianlegislations resource
*  and then fills the previously empty array with our parsed data.
*/
export const getPoliticianLegislations = () => fetch("http://localhost:8088/politicianlegislations")
    .then(response => response.json())
    .then(data => politicianLegislations = data)