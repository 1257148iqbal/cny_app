import { Backdrop, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useBackDrop } from "app/hooks/useBackdrop";
import React from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
    padding: 10,
  },
  masterInfoBoxTableCell: {
    paddingRight: 0,
    maxWidth: 16,
    [theme.breakpoints.down("md")]: {
      maxWidth: 55,
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const CustomBackDrop = () => {
  const classes = useStyles();
  const openBackdrop = useBackDrop();

  return (
    <Backdrop className={classes.backdrop} open={openBackdrop}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default CustomBackDrop;
