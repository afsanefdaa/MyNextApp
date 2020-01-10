import React from 'react';
import { Link, Layout } from '../components';

const Index = () => (
  <>
      Welcome
    <Link href="/login">Login</Link>
  </>
);

Index.Layout = Layout;

export default Index;
