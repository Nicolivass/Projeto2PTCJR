import { useEffect } from "react";

function Pagination({
  data,
  pageSize,
  setCurrentPageData,
  currentPage,
  setCurrentPage,
}) {
  // Total de páginas
  const totalPage = Math.ceil(data.length / pageSize);

  // Quantidade de botões e seus indexs
  let labelIndexs = [];
  for (let i = 1; i <= totalPage; i++) {
    labelIndexs.push(i);
  }

  useEffect(() => {
    goToPage(currentPage);
    console.log(currentPage);
  }, [currentPage, data]);

  function goToPage(pageNumber) {
    let res = [];
    let count = pageNumber * pageSize - pageSize;
    let delimiter = count + pageSize;

    // Somente se a pagina for menor que o total de páginas
    if (pageNumber <= totalPage) {
      for (let i = count; i < delimiter; i++) {
        if (data[i]) {
          res.push(data[i]);
        }
      }
      if (res.length !== 0 || data.length === 0) {
        setCurrentPageData(res);
        setCurrentPage(pageNumber);
      }
    } else {
      goToPage(pageNumber - 1);
    }
  }

  return (
    <div className="pagination">
      <button type="button" onClick={() => goToPage(currentPage - 1)}>
        &lt;&lt;
      </button>
      {labelIndexs.map((pageNumber, index) => (
        <button
          key={index}
          type="button"
          className={pageNumber === currentPage ? "active" : ""}
          onClick={() => goToPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button type="button" onClick={() => goToPage(currentPage + 1)}>
        &gt;&gt;
      </button>
    </div>
  );
}

export default Pagination;
