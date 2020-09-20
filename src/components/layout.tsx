import React, { ReactNode } from 'react';

interface IProps {
  props: any;
  children: ReactNode;
  location: Location;
}

const Layout = (children: IProps) => <>{children}</>;

export default Layout;
