import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>First name</TableCell>
        <TableCell>Last name</TableCell>
        <TableCell>Phone number</TableCell>
      </TableRow>
    </TableHead>
  );
};
