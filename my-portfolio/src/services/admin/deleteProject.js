export async function deleteProject(projectId) {
    let data = await fetch(`http://localhost:2005/admin/deleteProject/${projectId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    });

    return data;
}