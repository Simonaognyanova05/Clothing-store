export async function sentMessage(name, email, message) {
    let result = await fetch('http://localhost:2005/contact', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    });

    return result;
}