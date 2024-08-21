export async function getHomeData() {
    let data = await fetch('http://localhost:2005/');

    return data;
}