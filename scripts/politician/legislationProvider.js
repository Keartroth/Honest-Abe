let legislations = []

export const useLegislations = () => legislations.slice()

export const getLegislations = () => fetch("http://localhost:8088/legislations")
    .then(response => response.json())
    .then(data => legislations = data)