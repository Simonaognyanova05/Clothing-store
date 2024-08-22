export async function getProjects() {
    let data = await fetch('http://localhost:2005/admin/getProjects');

    return data;
}