import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const ScoresTable = ({ allScores }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      <TableContainer component={Paper}>
        <Typography variant="h5">Leaderboard</Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Date Submitted</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allScores.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.users.email}
                </TableCell>
                <TableCell align="right">{row.users.name}</TableCell>
                <TableCell align="right">{row.score}</TableCell>
                <TableCell align="right">{row.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScoresTable;
