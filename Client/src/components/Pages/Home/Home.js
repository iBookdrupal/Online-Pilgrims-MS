import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid } from "semantic-ui-react";
import PostCard from "../Post/PostCard";
import { FETCH_POSTS_QUERY } from "../../../api/posts";

const Home = () => {
  const { loading, error, data } = useQuery(FETCH_POSTS_QUERY);

  if (loading) return <h1>Loading Posts...</h1>;
  if (error) return <h1>error</h1>;

  return (
    <Grid columns="three" divided>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>

      <Grid.Row>
        {data.getPosts &&
          data.getPosts.map((post) => (
            <Grid.Column key={post.id}>
              <PostCard post={post} style={{ marginBottom: 20 }} />
            </Grid.Column>
          ))}
      </Grid.Row>
    </Grid>
  );
};

export default Home;
