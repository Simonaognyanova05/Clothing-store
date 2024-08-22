export async function updateHomePage(title, subtitle, img1, img2, img3) {
    let welcome = await fetch('http://localhost:2005/admin/welcome', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title, subtitle, img1, img2, img3 })
    });

    return welcome;
}