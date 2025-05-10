import { useNavigate } from "react-router-dom";

const Pagination = ({ pages, setPage }) => {
  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/${pages[index]}`);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      {pages.map((_, index) => (
        <button
          key={index}
          onClick={() => (setPage ? setPage(index + 1) : handleClick(index))}
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#9474d9",
            color: "white",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
