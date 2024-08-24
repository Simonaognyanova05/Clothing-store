export async function updateProject(title, subtitle, description, gitLink, img, projectId) {
    let result = await fetch(`http://localhost:2005/admin/updateProject/${projectId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title, subtitle, description, gitLink, img })
    });

    return result;
}