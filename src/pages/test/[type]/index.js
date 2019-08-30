import React, { useState } from 'react';
import { Input } from 'antd';
import { useRouter } from 'next/router';


const Test = () => {
  const router = useRouter();
  const { type } = router.query;

  const [someThing, setSomething] = useState('Hey Guys');
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      {
        type === 'cypress' && (
          <div>
            <Input onChange={(e) => setSomething(e.target.value)}/>
            <p>About</p>
            <button type="submit" onClick={() => setVisibility(!visibility) }>click</button>
            <span className="test" style={{ display: visibility ? 'block' : 'none'}}>{someThing}</span>
          </div>
        )
      }
      {
        type === 'jest' && (
          <div>
            jest in progress
          </div>
        )
      }
      </>
  )
}

export default Test;
