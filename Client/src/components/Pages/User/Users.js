import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Table } from "semantic-ui-react";
import UserCard from "../User/UserCard.js";
import { FETCH_USERS_QUERY } from "../../../api/user.js";

import { AuthContext } from "./../../../context/auth";

const Users = () => {
  const { loading, error, data } = useQuery(FETCH_USERS_QUERY);
  const { user } = useContext(AuthContext);

  if (loading) return <h1>Loading Users...</h1>;
  if (error) return <h1>error</h1>;
  console.log(data.getUsers);
  return (
    <>
      <div className="pusher">
        <div className="main-content">
          <h2>{data.getUsers.length} Users </h2>
          <div className="ui grid stackable padded">
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Users</Table.HeaderCell>
                  <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              {!user && <h2> User not authenticated</h2>}

              {data.getUsers &&
                data.getUsers.map((user) => (
                  <Table.Body>
                    <UserCard
                      key={user.id}
                      user={user}
                      style={{ marginBottom: 20 }}
                    />
                  </Table.Body>
                ))}
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
