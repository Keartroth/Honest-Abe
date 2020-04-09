let pacs = []

export const usePACs = () => pacs.slice()

export const getPACs = () => fetch("http://localhost:8088/pacs")
    .then(response => response.json())
    .then(data => pacs = data)