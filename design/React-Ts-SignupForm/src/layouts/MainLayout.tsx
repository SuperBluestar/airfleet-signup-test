import React from "react";
import "./MainLayout.scss";

interface IMainLayoutProps {
  children?: any;
  style?: object;
  className?: string;
}

function MainLayout(props: IMainLayoutProps): React.ReactElement {
  return (
    <div className="main-layout">
      <div className="mask-bg"></div>
      {props.children}
    </div>
  );
}

export default MainLayout;
