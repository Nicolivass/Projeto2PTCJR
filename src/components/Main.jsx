import { useState } from "react";
import Pagination from "./Pagination";
import { users } from "../assets/users";

function Main() {
  const [userData, setUserData] = useState(users);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const USERS_PER_PAGE = 5;

  function deleteUser(userId) {
    const newUserData = userData.filter((user) => user.id !== userId);
    setUserData(newUserData);
  }

  return (
    <main>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Cadastrado em</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((user, index) => (
            <tr key={index}>
              <td>{user.first_name + " " + user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.created_at}</td>
              <td className="action_buttons">
                <button type="button" className="text_button edit_button">
                  Editar{" "}
                </button>
                <button
                  type="button"
                  className="text_button delete_button"
                  onClick={() => deleteUser(user.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        data={userData}
        pageSize={USERS_PER_PAGE}
        setCurrentPageData={setCurrentPageData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
}

export default Main;
