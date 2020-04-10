// Declare an empty array to hold all the data from the fetch call.
let pacs = []

// Declare and export a function to copy the fetched data to be used in other modules.
export const usePACs = () => pacs.slice()

/*
* Function to perform the fetch call for the pacs resource and then
* fills the previously empty array with our parsed data.
*/
export const getPACs = () => fetch("http://localhost:8088/pacs")
    .then(response => response.json())
    .then(data => pacs = data)