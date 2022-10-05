import { Layout } from "@/styled-components";
import React from "react";
import { CreateButton } from "./components/CreateButton";
import { HomeTitle } from "./styled-components";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <Layout>
      <HomeTitle>Home Castle</HomeTitle>
	  <CreateButton/>
    </Layout>
  );
};

export default Home;
