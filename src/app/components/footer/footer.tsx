import {Box, Link} from "@mui/material";
import {Label} from "reactstrap";
import './footer.scss';
import {makeStyles} from "@material-ui/core/styles";
import {DRAWER_WIDTH} from "../../resources/constants";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    appFooter: {
        width: '100%',
        alignSelf: 'flex-end'
    },
}));
const Footer = (props: any) => {
    const classes = useStyles();
    return (
        <Box className={'footer-component'}>
            <Box className={'footer-main'}>
                <Label className={'copyright'}>©copyright by <Link href={'https://www.yusufjameel.com'}> Yusuf
                    Jameel</Link></Label>
            </Box>
        </Box>
    )
}
export default Footer;
