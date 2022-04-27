import { useEffect, useState } from "react";

function Pagination({ items, limitItems, setPage, actualPage, setActualPage }) {
  const [totalPage, setTotalPage] = useState(
    Math.ceil(items.length / limitItems)
  );
  const [paginationNav, setPaginationNav] = useState(() => {
    let aux = [];
    for (let i = 1; i <= totalPage; i++) {
      aux.push(i);
    }
    return aux;
  });

  useEffect(() => {
    listItems(actualPage);
  }, []);

  function listItems(pageNumber) {
    let result = [];
    let count = pageNumber * limitItems - limitItems;
    let delimiter = count + limitItems;
    if (pageNumber <= totalPage) {
      // console.log("COUNT", count);
      for (let i = count; i < delimiter; i++) {
        if (items[i] != null) {
          result.push(items[i]);
        }
        count++;
      }
      // console.log(
      //   "RESULT",
      //   result,
      //   "DELIMITER",
      //   delimiter,
      //   "PAGENUMBER",
      //   pageNumber,
      //   "TOTALPAGE",
      //   totalPage,
      //   "LIMITITEMS",
      //   limitItems,
      //   "items",
      //   items
      // );
      if (result.length !== 0) {
        setPage(result);
      }
      setActualPage(pageNumber);
    }
  }
  // Exemplos de uso:  var next = ['Next 1','Next 2','Next 3','Next 4','Next 5'];
  // var resultNext = listItems(next, 1, 2); var resultNext2 = listItems(next, 2, 2);
  // var resultNext3 = listItems(next, 3, 2);

  return (
    <div className="pagination">
      <button type="button" onClick={() => listItems(actualPage - 1)}>
        &lt;&lt;
      </button>
      {paginationNav.map((pageNumber, index) => (
        <button
          type="button"
          className={pageNumber === actualPage ? "active" : ""}
          key={index}
          onClick={() => listItems(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button type="button" onClick={() => listItems(actualPage + 1)}>
        &gt;&gt;
      </button>
    </div>
  );
}

export default Pagination;
