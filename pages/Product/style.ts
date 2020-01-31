import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles( ({
    card: {
        width: 800,
        height: 700,
        marginLeft: 250,
        marginTop:20,
    },
    media: {
        height: 300,
        backgroundSize: 'contain',
    },
    text1: {
        fontFamily: 'Open Sans',
        fontSize: '20px',
    },
    text2: {
        fontFamily: 'Open Sans',
        fontSize: '20px',
        textDecoration:'line-through',
    },
}));
export default useStyles