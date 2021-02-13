import React from 'react';
import loadable from '@loadable/component';

const HomePage = loadable(() => import('./Home'));

type PageType = {
  path: string;
  component: React.ReactNode;
  title: string;
};

export type Pages = {
  Home: PageType;
  [key: string]: PageType;
};

export const pages: Pages = {
  Home: {
    path: '/',
    component: <HomePage />,
    title: 'Home',
  },
};

type Props = {
  pageName?: string;
};

const Page: React.FC<Props> = ({ pageName }) => {
  return (
    <>
      <main>{pages[pageName].component || pages.Home.component}</main>
    </>
  );
};

export { Page };
