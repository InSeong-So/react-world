import { useParams } from '@solidjs/router';

const ArticlePage = () => {
  const params = useParams();

  return (
    <>
      <h1>아티클 페이지</h1>
      <div>{params.slug}</div>
    </>
  );
};

export default ArticlePage;
