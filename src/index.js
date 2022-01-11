fetch('http://localhost:3000/pups'), {
    method: 'FETCH',
    headers: {
        'content-type': 'application/json',
    }
    body: JSON.stringify(data),
}
