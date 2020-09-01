import React, { ReactNode } from 'react';

interface Props {
  props: any;
  children: ReactNode;
  location: Location;
}

const Layout = (children: Props) => <>{children}</>;

export default Layout;
