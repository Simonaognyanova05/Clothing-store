export async function updateAboutMe(name, specialty, location, education, description, profileImage) {
    let welcome = await fetch('http://localhost:2005/admin/about', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, specialty, location, education, description, profileImage })
    });

    return welcome;
}