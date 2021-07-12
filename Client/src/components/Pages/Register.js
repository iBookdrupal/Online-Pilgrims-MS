import { useContext, useState } from "react";
import { Form, Button, Grid, Segment, Message } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "graphql-tag";

import { AuthContext } from "../../context/auth";
import { useForm } from "../utils/hooks";

const Register = (props) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(proxy, { data: { register: userData } }) {
      context.login(userData);
      props.history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <div className="form-container">
      <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : ""}>
        <h1>Register </h1>

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
                icon="envelope"
                iconPosition="left"
                placeholder="Email"
                name="email"
                value={values.email}
                error={errors.email ? true : false}
                onChange={onChange}
                type="email"
              />

              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                name="password"
                value={values.password}
                error={errors.password ? true : false}
                onChange={onChange}
                type="password"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={values.confirmPassword}
                error={errors.confirmPassword ? true : false}
                onChange={onChange}
                type="password"
              />

              <Button type="submit" color="teal" fluid size="large">
                Register
              </Button>
            </Segment>

            <Message>
              Already Registered? <a href="/login">Login</a> <br />
            </Message>
          </Grid.Column>
        </Grid>
      </Form>

      <div className="ui error ">
        <ul className="list">
          {Object.keys(errors).length > 0 &&
            Object.values(errors).map((value) => (
              <li
                className=" ui error message"
                key={value}
                style={{ listStyle: "none" }}
              >
                {value}{" "}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default Register;
