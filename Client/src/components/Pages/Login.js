import { useContext, useState } from "react";
import { Form, Button, Grid, Segment, Message } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "graphql-tag";
import { useForm } from "../utils/hooks";
import { AuthContext } from "../../context/auth";

const Login = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCalback, {
    username: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function loginUserCalback() {
    loginUser();
  }

  return (
    <body>
      <div className="form-container">
        <Form
          onSubmit={onSubmit}
          noValidate
          className={loading ? "loading" : ""}
          size="large"
        >
          <h1>Login </h1>
          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  name="username"
                  value={values.username}
                  error={errors.username ? true : false}
                  onChange={onChange}
                  type="text"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  error={errors.password ? true : false}
                  onChange={onChange}
                />
                <Button type="submit" color="teal" fluid size="large">
                  Login
                </Button>
              </Segment>
              <Message>
                New to us? <a href="/register">Sign Up</a> <br />
                Forgot Password? <a href="/register">Forgot Password</a>
              </Message>
            </Grid.Column>
          </Grid>
        </Form>

        <div className="ui error message">
          <ul className="list">
            {Object.keys(errors).length > 0 &&
              Object.values(errors).map((value) => (
                <li key={value}>{value} </li>
              ))}
          </ul>
        </div>
      </div>
    </body>
  );
};

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Login;