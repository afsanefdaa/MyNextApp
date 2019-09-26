import React from 'react';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';

let counter = 1;

const Comment = ({ initialPropsCounter }) => {
  const router = useRouter();
  const { id } = router.query;

  const reload = (cm) => {
    const { query } = Router;
    Router.push('/post/[id]/[comment]', `/post/${query.id}/${cm}`);
  };

  const incrementStateCounter = () => {
    const currentCounter = router.query.id || 0;
    const href = `/post/${Number(currentCounter) + 1}/halo`;
    Router.push('/post/[id]/[comment]', href, { shallow: true });
    // console.log(Router.query, '--')
  };

  return (
    <div>
      <button type="button" onClick={() => reload(200, 'hi')}>Reload</button>
      <button type="button" onClick={() => incrementStateCounter(300, 'hola')}>not reload</button>
      <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>Click</Link>
      <p>initialPropsCounter:</p>
      {
        initialPropsCounter
      }

      <p>not counter:</p>
      {
        router.query.id
      }
    </div>
  );
};

export default Comment;

Comment.getInitialProps = ({ res }) => {
  if (res) {
    return { initialPropsCounter: 1 };
  }
  counter++;
  return {
    initialPropsCounter: counter,
  };
};
