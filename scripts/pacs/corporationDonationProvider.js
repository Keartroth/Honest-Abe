let corporateDonations = []

export const useCorporateDonations = () => corporateDonations.slice()

export const getCorporateDonations = () => fetch("http://localhost:8088/corporatedonations")
    .then(response => response.json())
    .then(data => corporateDonations = data)