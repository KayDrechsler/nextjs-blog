import ReactMarkdown from 'react-markdown';
import PostHeader from "./post-header";
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import styles from './post-content.module.css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const PostContent = (props) => {
    const { post } = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;
    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <div className={styles.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${image.properties.src}`}
                            alt="Post image"
                            width={600}
                            height={300}
                            priority
                        />
                    </div>
                );
            }
            return <p>{paragraph.children}</p>;
        },

        code(code) {
            const { className, children } = code;
            const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
            return (
                <SyntaxHighlighter
                    style={atomDark}
                    language={language}
                    children={children}
                />
            );
        },
    }

    return (
        <article className={styles.content}>
            <PostHeader title={post.title} image={imagePath} className={styles.headline} />
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    );
};

export default PostContent;