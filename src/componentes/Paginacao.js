function Pagination() {

    /* TRANSFORMAR EM JSX
    
    function changePage(newPage) {
        const totalPages = getTotalPages()
        if (newPage >= 1 && newPage <= totalPages) {
            currentPage = newPage
            render()
        }
    }

    function createPrevPageButton() {
        const prevPageButton = createButtonElement('<<')
        prevPageButton.addEventListener('click', () => {
            changePage(currentPage - 1)
        })
        return prevPageButton
    }

    function createNextPageButton() {
        const nextPageButton = createButtonElement('>>')
        nextPageButton.addEventListener('click', () => {
            changePage(currentPage + 1)
        })
        return nextPageButton
    }

    function createPaginationButton(page) {
        const paginationButton = createButtonElement(page)
        if (page === currentPage) paginationButton.classList.add('active')
        paginationButton.addEventListener('click', () => changePage(page))

        return paginationButton
    }

    function renderPagination(totalPages) {
        const pagination = document.querySelector('.pagination')
        pagination.replaceChildren()

        if (totalPages) {
            const prevPageButton = createPrevPageButton()
            pagination.appendChild(prevPageButton)

            for (let page = 1; page <= totalPages; page++) {
                const paginationButton = createPaginationButton(page)
                pagination.appendChild(paginationButton)
            }

            const nextPageButton = createNextPageButton()
            pagination.appendChild(nextPageButton)
        }
    }
    */

    return (
        <div class="users_actions">
            <div class="pagination">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    )
}

export default Pagination