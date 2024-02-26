import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getListUsers } from "../services/services";
import User from "../components/User";

function Users() {
  const [list, setList] = useState([]);
  const history = useHistory();

  console.log('list', list)

  useEffect(() => {
    (async () => {
      let todo = await getListUsers();
      setList(todo);
    })();
  }, []);

  const removeItem = (id) => {
    setList((prevState) => prevState.filter((el) => el.id !== id));
  };

  const redirectItem = (id) => {
    history.push(`/user/${id}`);
  };

  return (
    <>
    <h3>Users Name</h3>
      {list.length ? (
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => redirectItem(item.id)}>Edit</button>
              <button onClick={() => removeItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default Users;
