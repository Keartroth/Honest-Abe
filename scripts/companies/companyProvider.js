// Declare an empty array to hold all the data from the fetch call.
let companies = []

// Declare and export a function to copy the fetched data to be used in other modules.
export const useCompanies = () => companies.slice()

/*
* Function to perform the fetch call for the corporations resource and then
* fills the previously empty array with our parsed data.
*/
export const getCompanies = () => fetch("http://localhost:8088/corporations")
    .then(response => response.json())
    .then(data => companies = data)