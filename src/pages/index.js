import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <main>
      
      <Layout pageTitle="Home Page">
      <p>Home Page</p>
      <StaticImage alt="dog"
                  src=""></StaticImage>
      </Layout>
    </main>
  );
};

export default IndexPage;
