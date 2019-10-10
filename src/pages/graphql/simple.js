import React from 'react';
import {
  Divider, Spin, Card, Tag,
} from 'antd';
import { useQuery } from 'graphql-hooks';
import { Layout } from '../../components';
import { withAuthSync } from '../../hoc/withAuth';

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
  const { loading, data } = useQuery(allPostsQuery, {
    variables: { skip: 0, first: 50 },
    updateData: (prevResult, result) => ({
      ...result,
      allPosts: [...prevResult.allPosts, ...result.allPosts],
    }),
  });

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

Simple.Layout = Layout;
export default withAuthSync(Simple);
