import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Image } from "semantic-ui-react";
import PostCard from "../Post/PostCard";
import PostForm from "../Post/PostForm";
import { FETCH_POSTS_QUERY } from "../../../api/posts";

import { AuthContext } from "./../../../context/auth";

const Posts = () => {
  const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);
  const { user } = useContext(AuthContext);

  if (loading) return <h1>Loading Posts...</h1>;
  if (error) return <h1>error</h1>;

  return (
    <>
      <div className="pusher">
        <div className="main-content">
          <h2>Recent Posts</h2>
          <div className="ui grid stackable padded">
            {user && (
              <Grid.Row>
                <PostForm />
              </Grid.Row>
            )}

            {data.getPosts &&
              data.getPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  style={{ marginBottom: 20 }}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
