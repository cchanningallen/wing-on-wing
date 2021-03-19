import Layout from '../components/layout';
import CMS from '../lib/cms';
import { Title } from '../components/typography';
import RichText from '../components/rich-text';
import PostTile, { IMAGE_HEIGHT, IMAGE_WIDTH } from '../components/post-tile';

function DestinationsPage({ page, posts }) {
    console.log({ posts });
    return (
        <Layout>
            <div className="bg-gray-200 min-h-screen flex justify-center">
                <div className="max-w-5xl pt-32 flex flex-col items-center">
                    <Title>{page.title}</Title>
                    {page.content?.raw && (
                        <RichText content={page.content.raw} />
                    )}
                    <div className="container my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {posts.map((post, i) => (
                            <PostTile key={i} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const posts = await CMS.getPosts('DESTINATION', IMAGE_HEIGHT, IMAGE_WIDTH);
    const page = await CMS.getPage('destinations');

    return {
        props: {
            page,
            posts,
        },
    };
}

export default DestinationsPage;
