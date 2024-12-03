import Head from 'next/head';
import { getPostData } from '../lib/posts';

export default function Home({ postData }) {
  return (
    <>
      <Head>
        <title>Static Site Generation</title>
        <meta name="description" content="This is a sample static site." />
        <meta property="og:title" content="My Static Site" />
        <meta property="og:description" content="This is a sample static site using Next.js." />
      </Head>
      <style jsx>{`
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f9f9f9;
          color: #333;
          margin: 0;
          padding: 0;
        }
        header {
          background-color: #4caf50;
          color: white;
          padding: 1rem;
          text-align: center;
          font-size: 1.5rem;
          font-weight: bold;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
        footer {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 1rem;
          position: fixed;
          bottom: 0;
          width: 100%;
          font-size: 0.9rem;
        }
        article {
          max-width: 800px;
          margin: 2rem auto;
          padding: 2rem;
          background-color: white;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }
        h2 {
          font-size: 2rem;
          color: #4caf50;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1rem;
          line-height: 1.6;
        }
        .cta {
          text-align: center;
          margin-top: 2rem;
        }
        .cta a {
          display: inline-block;
          background-color: #4caf50;
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 5px;
          text-decoration: none;
          font-size: 1rem;
          font-weight: bold;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s;
        }
        .cta a:hover {
          background-color: #45a049;
        }
      `}</style>
      <header>Welcome to My Static Site</header>
      <article>
        <h2>{postData.data.title}</h2>
        <p>{postData.content}</p>
      </article>
      <div className="cta">
        <a href="#">Learn More</a>
      </div>
      <footer>@Asad Ullah. All rights reserved</footer>
    </>
  );
}

// Fetching data at build time
export async function getStaticProps() {
  const postData = getPostData(); // Retrieves data using the server-side `fs` module
  return {
    props: {
      postData,
    },
  };
}
