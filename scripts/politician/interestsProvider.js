// Declare an empty array to hold all the data from the fetch call.
let interests = []

// Declare and export a function to copy the fetched data to be used in other modules.
export const useInterests = () => interests.slice()

/*
* Function to perform the fetch call for the interests resource
*  and then fills the previously empty array with our parsed data.
*/
export const getInterests = () => fetch("http://localhost:8088/interests")
    .then(response => response.json())
    .then(data => interests = data)