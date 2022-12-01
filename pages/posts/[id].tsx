import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head';
import data from '../../data/posts.json';
import Date from '../../components/date';
import { Post } from '../../types/Post';





export async function getStaticPaths() {
    const posts = data.posts;
    return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
      fallback: true,
    };
  }
  

  export async function getStaticProps(context: any) {
    const post = data.posts.find( p => p.id === context.params.id);
    return {
      props: {
        post
      },
    };
  }

type Props = {
    post: Post
}

export default function PostPage({post}: Props) {
    return (
        <Layout>
           <Head>
            <title>Blog</title>
         </Head>
         <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={post.date} />
        </div>
        <p>{post.content}</p>
      </article>
        </Layout>
      );
}