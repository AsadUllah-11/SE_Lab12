import { getPostData } from '../lib/posts';

export default function Home() {
  const { data, content } = getPostData();
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
