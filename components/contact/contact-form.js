import { use, useState, useEffect } from 'react';
import Notification from '../ui/notification';
import styles from './contact-form.module.css';

const sendContactData = async (contactDetails) => {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
    };
};

const ContactForm = () => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
    const [requestError, setRequestError] = useState();

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [requestStatus]);

    const sendMessageHandler = async (event) => {
        event.preventDefault();

        // Another layer of frontend side validation could be added here.
        setRequestStatus('pending');

        try {
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage,
            });
            setRequestStatus('success');
            setEnteredEmail('');
            setEnteredName('');
            setEnteredMessage('');
        } catch (error) {
            setRequestError(error.message);
            setRequestStatus('error');
            return;
        };
    };

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!'
        };
    };

    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully!'
        };
    };

    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError,
        };
    };

    return (
        <section className={styles.contact}>
            <h1 className={styles.headline}>How can I help you?</h1>
            <form>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label className={styles.label} htmlFor="email">Your Email</label>
                        <input
                            className={styles.input}
                            type="email"
                            id="email"
                            required
                            value={enteredEmail}
                            onChange={(event) => setEnteredEmail(event.target.value)}
                        />
                    </div>
                    <div className={styles.control}>
                        <label className={styles.label} htmlFor="name">Your Name</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="name"
                            required
                            value={enteredName}
                            onChange={(event) => setEnteredName(event.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.control}>
                    <label className={styles.label} htmlFor="message">Your Message</label>
                    <textarea
                        className={styles.textarea}
                        id="message"
                        rows="5"
                        required
                        value={enteredMessage}
                        onChange={(event) => setEnteredMessage(event.target.value)}
                    ></textarea>
                </div>
                <div className={styles.actions}>
                    <button className={styles['form-button']} onClick={sendMessageHandler}>Send Message</button>
                </div>
            </form>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
        </section>
    );
};

export default ContactForm;