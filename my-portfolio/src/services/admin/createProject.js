export async function createProject(title, subtitle, description, gitLink, img) {
    let result = await fetch('http://localhost:2005/admin/createProject', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title, subtitle, description, gitLink, img })
    });

    return result;
}