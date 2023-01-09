import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "./Pagination";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Games from "./Games";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({ Teams }) {
  const [currentpage, setcurrentpage] = React.useState(1);
  const [postperpage, setpostperpage] = React.useState(7);

  const lastpostindex = currentpage * postperpage;
  const firstpostindex = lastpostindex - postperpage;
  const currentpost = Teams.slice(firstpostindex, lastpostindex);

  // mui model box
  const [name, setname] = React.useState("");
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, name, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setname(name);
    console.log(name);
    setState({ ...state, [anchor]: open });
  };

  const anchor = "right";

  return (
    <TableContainer
      sx={{
        width: "90vw",
        height: "76vh",
        marginTop: "2rem",
      }}
      component={Paper}
    >
      <Table sx={{ minWidth: "80%" }} aria-label="customized table">
        <TableHead>
          <TableRow className="tablerow">
            <StyledTableCell
              style={{
                fontWeight: "bold",
                backgroundColor: "#074684",
              }}
            >
              {" "}
              Team Name{" "}
            </StyledTableCell>
            <StyledTableCell
              style={{ fontWeight: "bold", backgroundColor: "#074684" }}
              align="center"
            >
              City
            </StyledTableCell>
            <StyledTableCell
              style={{ fontWeight: "bold", backgroundColor: "#074684" }}
              align="center"
            >
              {" "}
              Abbreviation{" "}
            </StyledTableCell>
            <StyledTableCell
              style={{ fontWeight: "bold", backgroundColor: "#074684" }}
              align="center"
            >
              {" "}
              Confernece{" "}
            </StyledTableCell>
            <StyledTableCell
              style={{ fontWeight: "bold", backgroundColor: "#074684" }}
              align="center"
            >
              {" "}
              Division{" "}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentpost.map((value) => {
            return (
              <StyledTableRow
                onClick={toggleDrawer(anchor, value.id, true)}
                sx={{ cursor: "pointer" }}
              >
                <StyledTableCell component="th" scope="row">
                  {value.name}{" "}
                </StyledTableCell>
                <StyledTableCell align="center"> {value.city}</StyledTableCell>
                <StyledTableCell align="center">
                  {" "}
                  {value.abbreviation}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {" "}
                  {value.conference}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {" "}
                  {value.division}
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
      <Pagination
        totalpost={Teams.length}
        postperpage={postperpage}
        setcurrentpage={setcurrentpage}
        currentpage={currentpage}
      />
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {" "}
        <Games name={name} />
        <Box sx={{ width: 250 }}></Box>
      </Drawer>
    </TableContainer>
  );
}
