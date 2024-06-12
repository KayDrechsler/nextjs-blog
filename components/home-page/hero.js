import Image from 'next/image';
import styles from './hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles['image-wrapper']}>
                <Image
                    className={styles.image}
                    src="/images/site/kaydrechsler_upscaled.png"
                    alt="An image showing the blog author Kay Drechsler"
                    width={300}
                    height={300}
                />
            </div>
            <h1 className={styles['hero-headline']}>Hello, I'm Kay!</h1>
            <p className={styles['hero-copytext']}>I blog about webdevelopment, painting, cooking and more.</p>
        </section>
    );
};

export default Hero;