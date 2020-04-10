let politicianLegislations = []

export const usePoliticianLegislations = () => politicianLegislations.slice()

export const getPoliticianLegislations = () => fetch("http://localhost:8088/politicianlegislations")
    .then(response => response.json())
    .then(data => politicianLegislations = data)