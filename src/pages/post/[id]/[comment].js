import React from 'react';
import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';

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

Comment.getInitialProps = ({ res }) => {
  if (res) {
    return { initialPropsCounter: 1 };
  }
  counter += 1;
  return {
    initialPropsCounter: counter,
  };
};

Comment.propTypes = {
  initialPropsCounter: PropTypes.number.isRequired,
};
export default Comment;
