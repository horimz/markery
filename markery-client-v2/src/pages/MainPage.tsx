import React from "react";
import { MainTemplate } from "../components/main/MainTemplate";

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = props => {
  return <MainTemplate>Main</MainTemplate>;
};

export { MainPage as default };
