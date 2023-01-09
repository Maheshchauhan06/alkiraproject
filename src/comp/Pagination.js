import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./Page.css";

const Pagination = ({ setcurrentpage, currentpage }) => {
  const nextpage = () => {
    if (currentpage == 4) {
      setcurrentpage(1);
    } else {
      setcurrentpage(currentpage + 1);
    }
  };
  const prevpage = () => {
    if (currentpage == 1) {
      setcurrentpage(4);
    } else {
      setcurrentpage(currentpage - 1);
    }
  };

  return (
    <div className="pagebox">
      <div className="pages">
        <NavigateBeforeIcon
          onClick={() => prevpage()}
          sx={{
            cursor: "pointer",
            color: "white",
            background: "#074684",
            fontSize: "1.3rem",
            padding: ".1rem",
          }}
        />
        <button
          style={{
            padding: ".3rem",
            cursor: "pointer",
            color: "white",
            background: "#074684",
            width: "1.5rem",
            border: "none",
          }}
          onClick={() => setcurrentpage(1)}
        >
          {" "}
          1{" "}
        </button>
        <button
          style={{
            padding: ".3rem",
            cursor: "pointer",
            color: "white",
            background: "#074684",
            width: "1.5rem",
            border: "none",
          }}
          onClick={() => setcurrentpage(4)}
        >
          {" "}
          4{" "}
        </button>

        <NavigateNextIcon
          onClick={() => nextpage()}
          sx={{
            cursor: "pointer",
            color: "white",
            background: "#074684",
            fontSize: "1.3rem",
            padding: ".1rem",
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
