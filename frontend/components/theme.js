import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#000000',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#f7f1e1',
        },
    },
    typography: {
        fontFamily: "'Raleway', san-serif",
    },
    overrides: {

    },
    props: {
    }

}));

export default theme;