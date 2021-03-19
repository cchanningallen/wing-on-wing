import Image from 'next/image';
import { Title } from './typography';

export default function PostHeader({ title, coverImage, date, author }) {
    console.log({ title, coverImage, date });

    return (
        <div className="h-half w-full bg-gray-50 relative flex justify-center items-center">
            <Image src={coverImage.url} layout="fill" objectFit="cover" />
            <Title className="z-10 max-w-lg text-center bg-lightbox-dark text-white p-2">
                {title}
            </Title>
        </div>
    );
}
