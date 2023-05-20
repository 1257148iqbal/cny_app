import { lighten, TableCell, TableRow } from '@mui/material';
import { withStyles } from '@mui/styles';


export const StyledTableHeadCell = withStyles(theme => ({
  root: {
    backgroundColor: lighten(theme.palette.background.paper, 0.1),
    boxSizing: 'small'
  },
  head: {
    backgroundColor: '#045170',
    color: '#FFF',
    border: '1px solid #FFF',
    boxShadow: '5px 5px 5px grey',
    borderRadius: '5px 5px 0 0',
    textAlign: 'center'
  },
  body: {
    fontSize: 12
  }
}))(TableCell);

export const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    '&:hover': {
      backgroundColor: '#DAE9F8',
      cursor: 'pointer',
      transition: '0.4s all ease'
    }
  }
}))(TableRow);

export const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.dark,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);
