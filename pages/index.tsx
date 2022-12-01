import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import data from '../data/posts.json';
import Date from '../components/date';
import { Post } from '../types/Post';

export async function getStaticProps() {
  const posts = data.posts;
  return {
    props: {
      posts
    },
  };
}

type Props = {
  posts: Post[]
}

export default function Home({posts}: Props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
       
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>{title}</Link>
           <br />
           <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small>
         </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}