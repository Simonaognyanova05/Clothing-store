export default function ContactContainer({message}) {
    return (
        <div id="message-container" style={{margin: '50px'}}>
            <h3>Тема: {message.name}</h3>
            <p>{message.message}</p>
            <p><strong>From:</strong> {message.email}</p>
            <a className="readedMessage" href="/ready">Mark as read</a>
        </div>
    );
}