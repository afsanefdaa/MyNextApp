import React, { useState } from 'react';
import {
  Divider, Spin, Card, Tag,
} from 'antd';
import { useQuery } from 'graphql-hooks';

const { Meta } = Card;

export const allPostsQuery = `
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    }
    _allPostsMeta {
      count
    }
  }
`;

const Simple = () => {
  const [skip, setSkip] = useState(0);

  const { loading, data, error } = useQuery(allPostsQuery, {
    variables: { skip, first: 50 },
    updateData: (prevResult, result) => ({
      ...result,
      allPosts: [...prevResult.allPosts, ...result.allPosts],
    }),
  });
  console.log(data);
  // createdAt: "2019-09-09T17:24:48.000Z"
  // id: "ck0cof15z0vn20165f2z3rgm5"
  // title: "Formidable"
  // url: "https://formidable.com"
  // votes: 2
  return (
    <>
      <span>Simple sample</span>
      <Divider dashed />
      <Spin spinning={loading} delay={500}>
        <div style={{
          display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center',
        }}
        >
          {
            data && data.allPosts.map((item) => (
              <Card
                hoverable
                key={`post_${item.id}`}
                style={{ margin: '10px' }}
              >
                <Meta title={item.title} description={item.url} />
                <Divider dashed />
                <Tag color="purple">{`Votes:${item.votes}`}</Tag>
              </Card>
            ))
          }
        </div>
      </Spin>
    </>
  );
};

export default Simple;
