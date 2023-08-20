import wretch from 'wretch'

const CONTENT_API_URL = import.meta.env.CONTENT_API_URL as string
const CONTENT_API_USERNAME = import.meta.env.CONTENT_API_USERNAME as string
const CONTENT_API_PASSWORD = import.meta.env.CONTENT_API_PASSWORD as string

const gql = String.raw
const w = wretch(CONTENT_API_URL).auth(
  `Basic ${Buffer.from(
    `${CONTENT_API_USERNAME}:${CONTENT_API_PASSWORD}`
  ).toString('base64')}`
)

export const getPosts = await w
  .post({
    query: gql`
      query GetPosts {
        posts(where: { status: PUBLISH, categoryName: "blog" }) {
          nodes {
            title
            date
            excerpt
          }
        }
      }
    `,
  })
  .json((json) => json)
