import Head from 'next/head';
import Layout from '../../components/layout';
import Container from '../../components/container';
// import MoreStories from '../../components/more-stories';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import SectionSeparator from '../../components/section-separator';
import cms from '../../lib/cms';

export async function getStaticProps({ params }) {
    const { post } = await cms.get(
        `
            query PostPageQuery($slug: String!) {
                post(where: { slug: $slug }) {
                    id
                    slug
                    title
                    tags
                    date
                    excerpt
                    author {
                        name
                        id
                    }
                    content {
                        html
                        markdown
                        raw
                        text
                    }
                    coverImage {
                        url
                        width
                        height
                        size
                    }
                }
            }
        `,
        {
            slug: params.slug,
        }
    );

    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const { posts } = await cms.get(`
        {
            posts {
                slug
                title
            }
        }
    `);

    return {
        paths: posts.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    };
}

export default ({ post }) => (
    <Layout>
        {/* <Head>{renderMetaTags(metaTags)}</Head> */}
        <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
        />
        <PostBody title={post.title} content={post.content.raw} />
        <SectionSeparator />
        {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
    </Layout>
);
