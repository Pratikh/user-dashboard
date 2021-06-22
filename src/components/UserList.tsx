import { useDispatch } from "react-redux";
import { actions } from "../reduxStore";
import { Link } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import "./UserList.scss";

const { deleteUserAction } = actions;

interface UserListInterface {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

interface props {
  userList: UserListInterface[];
}

function UserList({ userList }: props) {
  const dispatch = useDispatch();
  function deleteUser(id: number){
    dispatch(deleteUserAction(id));
  };
  return userList.map((user: UserListInterface) => {
    return (
      <Card key={user.id} className="m-2 userTile">
        <Container>
          <Card.Img className="top my-card-image" src={user.avatar} />
        </Container>
        <Card.Body >
          <Card.Title>{user.first_name}</Card.Title>
          <Card.Text>
            <span>Email :</span> {user.email}
          </Card.Text>
          <div className="bottomButtons" >
            <Link to={`/user/${user.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button variant="danger" onClick={deleteUser.bind({}, +user.id)}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  });
}

export default UserList;
