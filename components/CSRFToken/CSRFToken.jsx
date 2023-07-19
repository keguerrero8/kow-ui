import { useState, useEffect } from 'react';

export default function CSRFToken(){
    const [csrftoken, setcsrftoken] = useState('');

    const getCookie = (name) => {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetch(`http://127.0.0.1:8000/auth-sessions/csrf_cookie`, { credentials: 'include' })
            } catch (err) {

            }
        };

        fetchData();
        setcsrftoken(getCookie('csrftoken'));
    }, [csrftoken]);

    return (
        <input type='hidden' name='csrfmiddlewaretoken' value={csrftoken? csrftoken: ""} />
    );
};