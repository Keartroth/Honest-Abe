// Declare an empty array to hold all the data from the fetch call.
let politicians = []

// Declare and export a function to copy the fetched data to be used in other modules.
export const usePoliticians = () => politicians.slice()

/*
* Function to perform the fetch call for the politicians resource and then
* fills the previously empty array with our parsed data.
*/
export const getPoliticians = () => fetch("http://localhost:8088/politicians")
    .then(response => response.json())
    .then(data => politicians = data)