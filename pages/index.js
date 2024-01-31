import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Kane. I am an aspiring Software Developer. Currently taking Bachelor of Science in Information Technology Majoring in Web and Mobile Development.</p>
        <p>My expectation in this internship is high because several people are recommending TwistResources as the best company to learn or gain experience to.</p>
        <p>TwistResources is fun to work at. The environment is light and hear people laugh and that makes the air pleasant and makes it joyful despite the stressful job.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}