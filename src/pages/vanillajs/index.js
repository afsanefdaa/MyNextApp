import React from 'react';
import { useRouter } from 'next/router';
import { Tag } from 'antd';
import { Layout } from '../../components';
import { withAuthSync } from '../../hoc/withAuth';


const Vallinajs = () => {
  const router = useRouter();
  const handleClick = (lesson) => {
    router.push('/[vanillajs]/[lesson]', `/vanillajs/${lesson}`, { shallow: true });
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Tag color="magenta" onClick={() => handleClick('ofconst')}>Old-fashion Const</Tag>
        <Tag color="red" onClick={() => handleClick('ajax')}>JS ajax</Tag>
        <Tag color="volcano" onClick={() => handleClick('unsplashapi')}>Unsplash API</Tag>
        <Tag color="orange" onClick={() => handleClick('callapplybind')}>Call- Apply- Bind</Tag>
        <Tag color="gold" onClick={() => handleClick('closure')}>Closure</Tag>
        <Tag color="lime" onClick={() => handleClick('IIFE')}>IIFE</Tag>
        <Tag color="green" onClick={() => handleClick('this')}>This</Tag>
        <Tag color="cyan" onClick={() => handleClick('settimeout')}>setTimeout</Tag>
      </div>
    </>
  );
};
Vallinajs.Layout = Layout;
export default withAuthSync(Vallinajs);
