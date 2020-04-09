let pacDonations = []

export const usePACDonations = () => pacDonations.slice()

export const getPACDonations = () => fetch("http://localhost:8088/pacdonations")
    .then(response => response.json())
    .then(data => pacDonations = data)