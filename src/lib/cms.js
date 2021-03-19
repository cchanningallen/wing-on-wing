import { GraphQLClient } from 'graphql-request';

class CMS {
    constructor({ url, key }) {
        this._client = new GraphQLClient(url, {
            headers: {
                authorization: `Bearer ${key}`,
            },
        });
    }

    async get(gql, variables = {}) {
        return await this._client.request(gql, variables);
    }

    async getPosts(type, imageHeight, imageWidth) {
        const data = await this.get(
            `
                query DestinationPosts($type: PostType!, $width: Int!, $height: Int!) {
                    posts(where: {type: $type}) {
                        slug
                        coverImage {
                            url(transformation: {image: {resize: {height: $height, width: $width, fit: crop}}})
                            width
                            height
                        }
                        title
                        date
                        excerpt
                    }
                }
            `,
            {
                type,
                width: imageWidth,
                height: imageHeight,
            }
        );

        return data.posts;
    }

    async getPage(slug) {
        const data = await this.get(
            `
                query Page($slug: String!) {
                    page(where: {slug: $slug}) {
                        title
                        subtitle
                        content {
                            raw
                        }
                    }
                }
            `,
            {
                slug,
            }
        );

        return data.page;
    }
}

export default new CMS({
    url: process.env.GRAPHCMS_URL,
    key: process.env.GRAPHCMS_API_KEY,
});
