import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { markAsRead } from '../../services/admin/markAsRead';

export default function MarkAsRead() {
    const navigate = useNavigate();
    const { messageId } = useParams();

    useEffect(() => {
        markAsRead(messageId)
            .then(() => {
                navigate('/admin/contacts');
                alert('The message is marked as read!');
            })
    }, [])
    return null;
}