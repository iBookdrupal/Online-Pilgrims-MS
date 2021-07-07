import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Image } from "semantic-ui-react";
import PostCard from "../Post/PostCard";
import PostForm from "../Post/PostForm";
import HomepageLayout from "./HomepageLayout.jsx";
import { FETCH_POSTS_QUERY } from "../../../api/posts";

import { AuthContext } from "./../../../context/auth";

const Home = () => {
  const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);
  const { user } = useContext(AuthContext);

  if (loading) return <h1>Loading Posts...</h1>;
  if (error) return <h1>error</h1>;

  return (
    <>
      <div className="content">
        <HomepageLayout />
      </div>
    </>
  );
};

export default Home;
