// A style sheet
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
    container: {
      zIndex: 1200,
    },
    popup: {
        width: '24em',
        overflow: 'hidden',
        borderRadius: 8,
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: '400',
        color: theme.palette.text.title
    },
    closeButton: {
        color: theme.palette.text.primary,

        '&:focus': {
            boxShadow: 'none',
        },
        '&:hover': {
            color: theme.palette.text.title,
        }
    },
    image: {
      margin: theme.spacing(0, 'auto', 2),
    },
    htmlContainer: {
        fontSize: '1rem',
        lineHeight: 1.5,
        margin: theme.spacing(1, 3, .5),

        '& a': {
            textDecoration: 'none',
            color: theme.palette.primary.main,
        }
    },
    confirmButton: {
        border: 0,
        margin: '.3125em',
        cursor: 'pointer',
        color: theme.palette.common.white,
        boxSizing: 'border-box',
        fontSize: '0.875rem',
        lineHeight: 1.75,
        padding: theme.spacing(.75, 2),
        borderRadius: 4,
        fontFamily: 'inherit',
        backgroundColor: theme.palette.primary.main,

        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        }
    },
    cancelButton: {
        border: 0,
        margin: '.3125em',
        cursor: 'pointer',
        color: theme.palette.common.white,
        boxSizing: 'border-box',
        fontSize: '0.875rem',
        lineHeight: 1.75,
        padding: theme.spacing(.75, 2),
        borderRadius: 4,
        fontFamily: 'inherit',
        backgroundColor: theme.palette.grey[600],

        '&:hover, &:focus, &:active': {
            backgroundColor: theme.palette.grey[700],
        }
    },
    footer: {
        marginTop: '1.5rem',
        fontSize: '.875rem',
        borderColor: theme.palette.divider,
        '& a': {
            textDecoration: 'none',
            color: theme.palette.primary.main,
        }
    }
}));

export default useStyles;
