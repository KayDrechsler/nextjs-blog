import Link from 'next/link';
import Image from 'next/image';

import styles from './posts-item.module.css';

const PostsItem = (props) => {
    const { title, image, excerpt, date, slug, } = props.post;
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <li className={styles.post}>
            <Link href={linkPath} className={styles.link}>
                <div className={styles['image-wrapper']}>
                    <Image
                        className={styles.image}
                        src={imagePath}
                        alt={title}
                        width={300}
                        height={200}
                        layout="responsive"
                    />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{title}</h3>
                    <time className={styles.date} dateTime={date}>{formattedDate}</time>
                    <p className={styles.copytext}>{excerpt}</p>
                </div>
            </Link>
        </li>
    );
};

export default PostsItem;