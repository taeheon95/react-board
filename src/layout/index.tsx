import React, { ReactElement } from "react";
import Content from "./Content";
import Header from "./Header";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}

export default Layout;
