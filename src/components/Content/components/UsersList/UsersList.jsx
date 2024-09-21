import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { TableHeader } from "./TableHeader";
import { SingleUser } from "./SingleUser";

export const UsersList = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHeader />
        <TableBody>
          {props.users.map((user) => (
            <SingleUser user={user} key={user.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
