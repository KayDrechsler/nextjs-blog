import ReactDOM from 'react-dom';
import styles from './notification.module.css';

function Notification(props) {
    const { title, message, status } = props;

    let statusClasses = '';

    if (status === 'success') {
        statusClasses = styles.success;
    }

    if (status === 'error') {
        statusClasses = styles.error;
    }

    const cssClasses = `${styles.notification} ${statusClasses}`;

    return ReactDOM.createPortal((
        <div className={cssClasses}>
            <h2 className={styles.headline}>{title}</h2>
            <p className={styles.copytext}>{message}</p>
        </div>
    ), document.getElementById('notifications'));
};

export default Notification;
