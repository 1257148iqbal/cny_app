import { Box, CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { makeStyles } from "@mui/styles";
import { green } from "@mui/material/colors";
import { Save } from "@mui/icons-material";
import JumboButton from "@jumbo/components/JumboButton";
import { useBackDrop } from "app/hooks/useBackdrop";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  buttonSuccess: {
    margin: 5,
    border: "none",
    backgroundColor: "#FFFFFF",
    color: "#62AD2D",
    [theme.breakpoints.up("xs")]: {
      marginRight: 0,
    },
    "&:hover": {
      backgroundColor: "#62AD2D",
      color: "#FFFFFF",
      border: "none",
    },
  },

  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const SaveButton = React.forwardRef((props) => {
  const { type, onClick, ...rest } = props;
  const loading = useBackDrop();

  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <JumboButton
        // ref={ref}
        type={type || "button"}
        variant="contained"
        color="default"
        endIcon={<Save />}
        className={classes.buttonSuccess}
        disabled={loading}
        onClick={onClick}
        {...rest}
      >
        Save
      </JumboButton>

      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </Box>
  );
});

SaveButton.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SaveButton;
