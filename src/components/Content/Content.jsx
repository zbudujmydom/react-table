import axios from "axios";
import { useEffect, useState } from "react";
import { UsersList } from "./components/UsersList/UsersList";
import CircularProgress from "@mui/material/CircularProgress";
import { ErrorInfo } from "./components/ErrorInfo/ErrorInfo";
import { EmptyList } from "./components/EmptyList/EmptyList";

export const Content = () => {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => setUsers(response.data.users))
      .catch(() => setShowError(true))
      .finally(() => setIsFetching(false));
  }, []);

  if (isFetching) {
    return <CircularProgress sx={{ margin: "100px" }} />;
  }

  if (showError) {
    return <ErrorInfo />;
  }

  if (users.length === 0) {
    return <EmptyList />;
  }

  return (
    <section>
      <UsersList users={users} />
    </section>
  );
};
