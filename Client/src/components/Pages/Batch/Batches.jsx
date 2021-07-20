import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Table, Button, Icon } from "semantic-ui-react";
import BatchCard from "../Batch/BatchCard.jsx";
import { FETCH_BATCH_QUERY } from "../../../api/batches.jsx";

import { AuthContext } from "./../../../context/auth";

const Batches = () => {
  const { loading, error, data } = useQuery(FETCH_BATCH_QUERY);
  const { user } = useContext(AuthContext);

  if (loading) return <h1>Loading Users...</h1>;
  if (error) return <h1>error</h1>;
  return (
    <>
      <div className="pusher">
        <Button
          color="blue"
          floated="right"
          icon
          labelPosition="left"
          size="small"
        >
          <Icon name="add" /> New Batch
        </Button>
        <div className="main-content">
          <h2>{data.getBatch.length} Batch(es) </h2>

          <div className="ui grid stackable padded">
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Batches</Table.HeaderCell>
                  <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              {!user && <h2> User not authenticated</h2>}

              {data.getBatch &&
                data.getBatch.map((batch) => (
                  <Table.Body>
                    <BatchCard
                      key={batch.id}
                      batch={batch}
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

export default Batches;
