import React from 'react';
import {Box, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 400,
        borderBottom: '1px solid teal'
    },
    itemBtn: {
        display: 'flex',
        marginRight: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%'
    },
    arrowIcon: {
        fontSize: 'large',
        margin: 10,
        cursor: 'pointer'
    },
    itemText : {
        width: "75%",
        fontSize: "1.2rem"
    },
    itemEmoji : {
        fontSize: "2rem",
        marginLeft: "auto",
        borderRadius: "50%",
        boxShadow: "0 19px 38px rgba(0, 0, 0, .3), 0 15px 12px rgba(0, 0, 0, .1)"
    }
}))

const Item = (props) => {

    const classes = useStyles()
    const {votes, text} = props
    return (
        <Box className={classes.item}>
            <Box className={classes.itemBtn}>
                <ArrowUpwardIcon onClick={props.upVote} className={classes.arrowIcon}/>
                <Typography variant="h5">{votes}</Typography>
                <ArrowDownwardIcon onClick={props.downVote} className={classes.arrowIcon}/>
            </Box>
            <Box className={classes.itemText}>
                {text}
            </Box>
            <Box className={classes.itemEmoji}>
                <i className="em em-laughing"></i>
            </Box>
        </Box>
    );
};

export default Item;