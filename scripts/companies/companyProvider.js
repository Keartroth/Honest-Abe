let companies = []

export const useCompanies = () => companies.slice()

export const getCompanies = () => fetch("http://localhost:8088/corporations")
    .then(response => response.json())
    .then(data => companies = data)