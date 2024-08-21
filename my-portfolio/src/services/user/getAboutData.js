export async function getAboutData() {
    let data = await fetch('http://localhost:2005/about');

    return data;
}