import RichText from './rich-text';
import { Title } from './typography';

export default function PostBody({ title, content }) {
    return (
        <div className="max-w-xl mx-auto py-4">
            <Title>{title}</Title>
            <RichText content={content} />
        </div>
    );
}
