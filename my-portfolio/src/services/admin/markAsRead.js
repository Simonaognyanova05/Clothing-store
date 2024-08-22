export async function markAsRead(messageId) {
    let result = await fetch(`http://localhost:2005/contact/${messageId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
    });

    return result;
}