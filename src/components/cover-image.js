import Image from 'next/image';
import cn from 'classnames';
import Link from 'next/link';

export default function CoverImage({ title, image, slug }) {
    const imageComponent = (
        <Image
            className={cn('shadow-small', {
                'hover:shadow-medium transition-shadow duration-200': slug,
            })}
            src={image.url}
            layout="fill"
        />
    );
    return (
        <div className="-mx-5 sm:mx-0">
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a aria-label={title}>{imageComponent}</a>
                </Link>
            ) : (
                imageComponent
            )}
        </div>
    );
}
