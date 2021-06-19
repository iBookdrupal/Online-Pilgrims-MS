import React from "react";
import gql from "graphql-tag";
import { Form, Button } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";

import { useForm } from "../../utils/hooks";
import { FETCH_POSTS_QUERY } from "../../../api/posts";
function PostForm() {
  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    body: "",
  });

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POSTS_QUERY,
      });
      data.getPosts = [result.data.createPost, ...data.getPosts];
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
      values.body = "";
    },
  });

  function createPostCallback() {
    createPost();
  }
  return (
    <Form
      onSubmit={onSubmit}
      className="four wide computer eight wide tablet sixteen wide mobile"
    >
      <h2>Create a Post </h2>
      <Form.Field>
        <Form.Input
          placeholder="hi world"
          name="body"
          onChange={onChange}
          value={values.body}
        />

        <Button type="submit" color="teal">
          Post
        </Button>
      </Form.Field>
    </Form>
  );
}

const CREATE_POST_MUTATION = gql`
  mutation createPost($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;

export default PostForm;
