export async function getDetailsProject(projectId) {
    let data = await fetch(`http://localhost:2005/admin/getDetails/${projectId}`);

    return data;
}