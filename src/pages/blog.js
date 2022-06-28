import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/Layout";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`);
  return (
    <main>
    
    <Layout pageTitle="About Me">
    <p>Blog Page 입니다.</p>

    <ul>
     {data.allFile.nodes.map((node)=>(
      <li key={node.name}>{node.name}</li>
     ))}
    </ul>
    </Layout>
  </main>
  );
};

export default BlogPage;