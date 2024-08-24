import { useState, useEffect } from "react";
import { getMessages } from "../../../services/admin/getMessages";
import ContactContainer from "./ContactContainer";

export default function ContactAdmin() {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        getMessages()
            .then(result => {
                return result.json();
            })
            .then(res => {
                setMessage(res);
            })
    }, [message]);

    return (
        <section id="admin">
            <div className="content">
                <h2>Messages from Users</h2>
                {
                    message.length > 0
                        ? message.map(x => <ContactContainer key={x._id} message={x} />)
                        : <h1>No messages!</h1>
                }
            </div>
        </section>
    );
}