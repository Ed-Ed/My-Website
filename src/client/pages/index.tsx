import React from "react";
import loadable from "@loadable/component";

// import Nav from "../components/Nav";
// import Footer from "../components/Footer";

const HomePage = loadable(() => import("./Home"));

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
    path: "/",
    component: <HomePage />,
    title: "Home"
  }
};

type Props = {
  pageName?: string;
};

const Page: React.FC<Props> = ({ pageName }) => {
  return (
    <>
      {/* <Nav pages={pages} /> */}
      <main>{pages[pageName].component || pages.Home.component}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Page;
