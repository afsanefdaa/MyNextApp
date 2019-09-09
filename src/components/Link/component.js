import React from 'react';
import NextLink from 'next/link';
import { withRouter } from 'next/router';


const Link = withRouter(({ router, children, ...props }) => (
  <NextLink {...props}>
    <a>{children}</a>
    {/* { */}
    {/*  React.cloneElement(Children.only(children), { */}
    {/*    className: router.pathname === props.href ? `active` : null */}
    {/*  }) */}
    {/* } */}
  </NextLink>
));

export default Link;
