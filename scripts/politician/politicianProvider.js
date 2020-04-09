let politicians = []

export const usePoliticians = () => politicians.slice()

export const getPoliticians = () => fetch("http://localhost:8088/politicians")
    .then(response => response.json())
    .then(data => politicians = data)