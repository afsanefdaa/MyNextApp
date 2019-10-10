import React from 'react';
import { useRouter } from 'next/router';
import {
  StateHook, EffectHook, ContextHook, MemoHook, CustomHook, ReducerHook, Layout,
} from '../../../components';
import { withAuthSync } from '../../../hoc/withAuth';

const Hook = () => {
  const router = useRouter();
  const { hook } = router.query;
  return (
    <div>
      {
        hook === 'useState'
        && <StateHook />
      }
      {
        hook === 'useEffect'
        && <EffectHook />
      }
      {
        hook === 'useCustomHook'
        && <CustomHook />
      }
      {
        hook === 'useContext'
        && <ContextHook />
      }
      {
        hook === 'useMemo'
        && <MemoHook />
      }
      {
        hook === 'useReducer'
        && <ReducerHook />
      }
    </div>
  );
};

Hook.Layout = Layout;
export default withAuthSync(Hook);
