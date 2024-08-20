export async function loginAdmin(username, password) {
    let admin = await fetch('http://localhost:2005/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    return admin;
}