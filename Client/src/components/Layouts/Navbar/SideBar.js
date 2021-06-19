<Grid columns="three" divided>
  <Grid.Row className="page-title">
    <h1>Recent Posts</h1>
  </Grid.Row>
  {user && (
    <Grid.Column>
      <PostForm />
    </Grid.Column>
  )}

  <Grid.Row>
    {data.getPosts &&
      data.getPosts.map((post) => (
        <Grid.Column key={post.id}>
          <PostCard post={post} style={{ marginBottom: 20 }} />
        </Grid.Column>
      ))}
  </Grid.Row>
</Grid>;
