import { useState } from "react";
import Pagination from "./Pagination";
import { users } from "../assets/users";

function Main() {
  const [userData, setUserData] = useState(users);
  const [actualPage, setActualPage] = useState(1);
  const USERS_PER_PAGE = 5;

  function getTotalPages() {
    return Math.ceil(users.length / USERS_PER_PAGE);
  }

  /*
    function deleteUser(id) {
        users = users.filter((user) => user.id !== id)
        render()
    }
    function createButtonElement(textContent) {
        const buttonElement = document.createElement('button')
        buttonElement.textContent = textContent
        buttonElement.type = 'button'
        return buttonElement
    }
    
    function getcurrentPageUsers(){
        const startIndex = (currentPage - 1) * USERS_PER_PAGE
        const endIndex =  startIndex + USERS_PER_PAGE
    
        return users.slice(startIndex, endIndex)
    }
    
    function createButtonElement(textContent) {
        const buttonElement = document.createElement('button')
        buttonElement.textContent = textContent
        buttonElement.type = 'button'
        return buttonElement
    }
    
    function createColumnEditar(user){
        const editButton = document.createElement('button')
        editButton.type = 'button'
        editButton.classList.add('edit')
        editButton.textContent = 'editar'
    
        return editButton
    }
    
    function createColumnExcluir(user){
        const deleteButton = document.createElement('button')
        deleteButton.type = 'button'
        deleteButton.classList.add('delete')
        deleteButton.textContent = 'excluir'
    
        deleteButton.addEventListener('click', () => deleteUser(user.id))
    
        return deleteButton
    }
    
    function createUserRow(user){
        const userRow = document.createElement('tr')
        userRow.id = user.id
        userRow.classList.add('user_row')
    
        const columnEditar = createColumnEditar(user)
        const columnExcluir = createColumnExcluir(user)
     
        userRow.appendChild(columnEditar)
        userRow.appendChild(columnExcluir)
    
        return userRow
    }
    
    function createUserRows(userData){
        return userData.map(createUserRow)
    }
    
    function renderUsers(){
        const userData = getcurrentPageUsers()
        const userRows = createUserRows(userData)
    
        const userContainer = document.querySelector('.users')
        userContainer.replaceChildren()
        userRows.forEach((userRows) => {userContainer.appendChild(userRows)})
    }
    
    function render(){
        renderUsers()
        const totalPages = getTotalPages()
        if (currentPage > totalPages) currentPage = totalPages
        renderPagination(totalPages)
    }
    
    render()
    */

  const emptyRows = USERS_PER_PAGE - userData;

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
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.first_name + " " + user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.created_at}</td>
              <td className="action_buttons">
                <button type="button" className="text_button edit_button">
                  Editar{" "}
                </button>
                <button type="button" className="text_button delete_button">
                  Excluir
                </button>
              </td>
            </tr>
          ))}
          {emptyRows > 0 && userData.length > 0 && (
            <tr style={{ height: 57.19 * emptyRows, border: 0 }}></tr>
          )}
        </tbody>
      </table>
      <Pagination
        items={users}
        limitItems={USERS_PER_PAGE}
        setPage={setUserData}
        actualPage={actualPage}
        setActualPage={setActualPage}
      />
    </main>
  );
}

export default Main;
