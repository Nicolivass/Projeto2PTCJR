import Pagination from "./Paginacao"
import Mockdata from "./Mockdata"

function Main() {

    let currentPage = 1
    const USERS_PER_PAGE = 5


    function getTotalPages() {
        return Math.ceil(users.length / USERS_PER_PAGE)
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

    return (
        <>
            <main>
                <div>
                    <table id="tbPessoas">
                        <thead>
                            <tr class="user_row">
                                <td class="column">Nome</td>
                                <td class="column">Email</td>
                                <td class="column">Cadastrado em</td>
                            </tr>
                        </thead>
                        <tbody class="users">
                            <tr class="user_row">
                                <td class="nome_column"></td>
                                <td class="email_column"></td>
                                <td class="cadastro_column"></td>
                                <td class="editar_column"><button type="button" class="edit">Editar</button></td>
                                <td class="excluir_column" td><button type="button" class="delete">Excluir</button></td>
                            </tr>
                            <tr class="user_row">
                                <td class="nome_column"></td>
                                <td class="email_column"></td>
                                <td class="cadastro_column"></td>
                                <td class="editar_column"><button type="button" class="edit">Editar</button></td>
                                <td class="excluir_column"><button type="button" class="delete">Excluir</button></td>
                            </tr>
                            <tr class="user_row">
                                <td class="nome_column"></td>
                                <td class="email_column"></td>
                                <td class="cadastro_column"></td>
                                <td class="editar_column"><button type="button" class="edit">Editar</button></td>
                                <td class="excluir_column"><button type="button" class="delete">Excluir</button></td>
                            </tr>
                            <tr class="user_row">
                                <td class="nome_column"></td>
                                <td class="email_column"></td>
                                <td class="cadastro_column"></td>
                                <td class="editar_column"><button type="button" class="edit">Editar</button></td>
                                <td class="excluir_column"><button type="button" class="delete">Excluir</button></td>
                            </tr>
                            <tr class="user_row">
                                <td class="nome_column"></td>
                                <td class="email_column"></td>
                                <td class="cadastro_column"></td>
                                <td class="editar_column"><button type="button" class="edit">Editar</button></td>
                                <td class="excluir_column"><button type="button" class="delete">Excluir</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Pagination />
            </main >
            <script src="mockdata.js"></script>
        </>
    )
}

export default Main