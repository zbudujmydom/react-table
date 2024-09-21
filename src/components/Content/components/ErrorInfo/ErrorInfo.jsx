import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

export const ErrorInfo = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <Alert severity="error">
        <div>There is some error</div>
        <Button variant="outlined" onClick={handleClick}>
          Reload
        </Button>
      </Alert>
    </div>
  );
};
