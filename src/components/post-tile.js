import Image from 'next/image';
import NextLink from 'next/link';

const IMAGE_HEIGHT = 300;
const IMAGE_WIDTH = 300;

function PostTile({ post }) {
    const { slug, title, coverImage, date, excerpt } = post;
    return (
        <NextLink href={`/posts/${slug}`}>
            <div
                style={{ height: IMAGE_HEIGHT, width: IMAGE_WIDTH }}
                className="relative group cursor-pointer flex justify-center items-center text-center"
            >
                <div className="absolute h-full w-full">
                    <Image
                        src={coverImage.url}
                        height={IMAGE_HEIGHT}
                        width={IMAGE_WIDTH}
                    />
                </div>
                <div className="z-20 absolute h-full w-full group-hover:border-white border group-hover:transform group-hover:scale-95 transition-all"></div>
                <div className="z-10 bg-lightbox-dark m-4 p-4">
                    <h2 className="font-fancy text-xl text-white">{title}</h2>
                </div>
            </div>
        </NextLink>
    );
}

export { IMAGE_HEIGHT, IMAGE_WIDTH };
export default PostTile;
