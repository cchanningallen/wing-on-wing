import Layout from '../components/layout';
import CMS from '../lib/cms';
import { Title } from '../components/typography';
import RichText from '../components/rich-text';

function AboutUsPage({ page }) {
    return (
        <Layout>
            <div className="bg-gray-200 min-h-screen flex justify-center">
                <div className="max-w-5xl pt-32 flex flex-col items-center">
                    <Title>{page.title}</Title>
                    <RichText content={page.content.raw} />
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const page = await CMS.getPage('about-us');

    return {
        props: {
            page,
        },
    };
}

export default AboutUsPage;
