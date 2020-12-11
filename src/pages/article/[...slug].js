import React from 'react';
import { useRouter } from 'next/router';

const Article = () => {
  const router = useRouter();
  const slug = router.query.slug || [];
  // console.log(slug.length > 3);

  return (
    <>
      <h1>
        Slug:
        {slug.join('/')}
      </h1>
    </>
  );
};

// Article.getInitialProps = async () => {
//   console.log('----');
//   // if (slug.length > 3) {
//   //   return;
//   // }
// };

export default Article;
