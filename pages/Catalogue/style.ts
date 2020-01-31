import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( ({
    card: {
        width: 300,
        height: 300,
        marginTop:20,
        backgroundColor: 'transparent',
        cursor: 'pointer',
        boxSizingizing: 'border-box',
        color: '#0970e6',
        textDecoration: 'none',
        fontFamily: 'Open Sans',
        fontSize: '20px',
    },
    media: {
        height: 130,
        backgroundSize: 'contain',
    },
    text: {
        fontFamily: 'Open Sans',
        fontSize: '20px',
    },
    button: {
        marginLeft: '100'
    },
}));
export default useStyles;