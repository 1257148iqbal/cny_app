import { Button, ButtonGroup, CircularProgress, Tooltip } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Delete, DoneOutline, Edit, Visibility } from '@mui/icons-material';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  btnViewChild: {
    color: '#1976D2'
  },
  btnViewParent: {
    '&:hover': {
      backgroundColor: '#1976D2',
      '& $btnViewChild': {
        color: '#FFFFFF'
      }
    }
  },
  btnEditChild: {
    color: '#4CAF50'
  },
  btnEditParent: {
    '&:hover': {
      backgroundColor: '#4CAF50',
      '& $btnEditChild': {
        color: '#FFFFFF'
      }
    },
    '&:disabled': {
      backgroundColor: '#CCC',
      '& $btnEditChild': {
        color: '#000'
      }
    }
  },
  btnDeleteChild: {
    color: '#F44336'
  },
  btnDeleteParent: {
    '&:hover': {
      backgroundColor: '#F44336',
      '& $btnDeleteChild': {
        color: '#FFFFFF'
      }
    }
  },
  btnReactiveChild: {
    color: '#9A4EF1'
  },
  btnReactiveParent: {
    '&:hover': {
      backgroundColor: '#9A4EF1',
      '& $btnReactiveChild': {
        color: '#FFFFFF'
      }
    }
  },
  buttonProgress: {
    color: grey[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}));

const ActionButtonGroup = props => {
  const {
    appearedViewButton,
    appearedEditButton,
    appearedDeleteButton,
    appearedReactiveButton,
    onView,
    onEdit,
    onDelete,
    onRestore,
    editInProgress
  } = props;
  const classes = useStyles();
  return (
    <ButtonGroup>
      {appearedViewButton && (
        <Tooltip arrow title="View" placement="bottom">
          <Button className={classes.btnViewParent} onClick={onView}>
            <Visibility className={classes.btnViewChild} />
          </Button>
        </Tooltip>
      )}
      {appearedEditButton && (
        <Tooltip arrow title="Edit" placement="bottom">
          <Button className={classes.btnEditParent} onClick={onEdit} disabled={editInProgress}>
            <Edit className={classes.btnEditChild} />
            {editInProgress && <CircularProgress size={24} className={classes.buttonProgress} />}
          </Button>
        </Tooltip>
      )}
      {appearedDeleteButton && (
        <Tooltip arrow title="Delete" placement="bottom">
          <Button className={classes.btnDeleteParent} onClick={onDelete}>
            <Delete className={classes.btnDeleteChild} />
          </Button>
        </Tooltip>
      )}
      {appearedReactiveButton && (
        <Tooltip arrow title="Re-active" placement="bottom">
          <Button className={classes.btnReactiveParent} onClick={onRestore}>
            <DoneOutline className={classes.btnReactiveChild} />
          </Button>
        </Tooltip>
      )}
    </ButtonGroup>
  );
};

ActionButtonGroup.propTypes = {
  appearedViewButton: PropTypes.bool,
  onView: PropTypes.func,
  appearedEditButton: PropTypes.bool,
  onEdit: PropTypes.func,
  appearedDeleteButton: PropTypes.bool,
  onDelete: PropTypes.func,
  appearedReactiveButton: PropTypes.bool,
  onRestore: PropTypes.func,
  editInProgress: PropTypes.bool
};

ActionButtonGroup.defaultProps = {
  appearedViewButton: false,
  onView: () => {
    // eslint-disable-next-line no-console
    console.error(`'onView' event not passed!!`);
  },
  appearedEditButton: false,
  onEdit: () => {
    // eslint-disable-next-line no-console
    console.error(`'onEdit' event not passed!!`);
  },
  appearedDeleteButton: false,
  onDelete: () => {
    // eslint-disable-next-line no-console
    console.error(`'onDelete' event not passed!!`);
  },
  appearedReactiveButton: false,
  onRestore: () => {
    // eslint-disable-next-line no-console
    console.error(`'onDelete' event not passed!!`);
  },
  editInProgress: false
};

export default ActionButtonGroup;
