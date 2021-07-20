import { Icon, Table, Button } from "semantic-ui-react";
import moment from "moment";
//import { Link } from "react-router-dom";

const BatchCard = ({ batch: { createdAt, id, batchName } }) => {
  return (
    <>
      <Table.Row>
        <Table.Cell>
          <Icon bordered color="teal" name="user" />
          <strong>
            {batchName} <br />{" "}
          </strong>
          <Icon bordered color="red" name="time" />
          {moment(createdAt).fromNow()}
        </Table.Cell>
        <Table.Cell>
          <Icon name="delete" color="red" style={{ margin: "5px" }} />
          <Icon color="blue" name="edit" style={{ margin: "5px" }} />
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default BatchCard;
