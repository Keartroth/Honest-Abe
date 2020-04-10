let interests = []

export const useInterests = () => interests.slice()

export const getInterests = () => fetch("http://localhost:8088/interests")
    .then(response => response.json())
    .then(data => interests = data)