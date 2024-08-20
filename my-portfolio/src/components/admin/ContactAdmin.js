export default function ContactAdmin() {
    return (
        <section id="admin">
            <div className="content">
                <h2>Messages from Users</h2>
                <div id="message-container">
                    <h3>Тема: Web Programirane</h3>
                    <p>I want to learn react. How can I do?</p>
                    <p><strong>From:</strong> Simona</p>
                    <a className="readedMessage" href="/ready">Mark as read</a>

                    {/* {messages.length > 0 ? (
                        messages.map((message) => (
                            <div key={message.id} className="message">
                                <h3>{message.title}</h3>
                                <p>{message.content}</p>
                                <p><strong>From:</strong> {message.sender}</p>
                            </div>
                        ))
                    ) : (
                        <p>No messages to display.</p>
                    )} */}
                </div>
            </div>
        </section>
    );
}