import { Icon, Table, Button } from "semantic-ui-react";
import moment from "moment";
//import { Link } from "react-router-dom";

const UserCard = ({ user: { createdAt, id, username, email } }) => {
  return (
    <>
      <Table.Row>
        <Table.Cell>
          <Icon bordered color="teal" name="user" />
          <strong>
            {username} <br />{" "}
          </strong>
          <Icon bordered color="blue" name="mail" />
          {email}
          <br />
          <Icon bordered color="red" name="time" />
          {moment(createdAt).fromNow()}
        </Table.Cell>
        <Table.Cell>
          <Button
            inverted
            color="green"
            floated="right"
            icon
            labelPosition="left"
            size="small"
          >
            <Icon name="checkmark" /> Approve
          </Button>
          <Button
            inverted
            color="orange"
            floated="right"
            icon
            labelPosition="left"
            size="small"
          >
            <Icon name="user x" /> Disable
          </Button>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default UserCard;
