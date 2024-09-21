import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const SingleUser = (props) => {
  const { firstName, lastName, phone } = props.user;

  return (
    <TableRow hover={true}>
      <TableCell>{firstName}</TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{phone}</TableCell>
    </TableRow>
  );
};
