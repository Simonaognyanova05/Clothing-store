export async function createProject(title, description, img) {
    let result = await fetch('http://localhost:2005/admin/createProject', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title, description, img })
    });

    return result;
}