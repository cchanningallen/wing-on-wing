import Image from 'next/image';
import CMS from '../lib/cms';
import Link from 'next/link';
import Layout from '../components/layout';
import Container from '../components/container';
import { Title, Paragraph } from '../components/typography';
import RichText from '../components/rich-text';

function IndexPage({ posts, page }) {
    return (
        <Layout>
            <div className="bg-gray-200 min-h-screen flex justify-center">
                <div className="max-w-5xl pt-32">
                    <Title>{page.title}</Title>
                    <RichText content={page.content.raw} />
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const { posts } = await CMS.get(
        `
            query HomePagePosts($count: Int!) {
                posts(first: $count, orderBy: date_DESC) {
                    id
                    slug
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
                    title
                    tags
                    date
                    excerpt
                }
            }
        `,
        {
            count: 3,
        }
    );

    const page = await CMS.getPage('home');

    return {
        props: {
            posts,
            page,
        },
    };
}

export default IndexPage;
