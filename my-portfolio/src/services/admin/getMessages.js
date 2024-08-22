export async function getMessages() {
    let messages = await fetch('http://localhost:2005/contact');

    return messages;
}