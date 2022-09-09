import React from 'react';
import {Box, Typography} from '@mui/material'
import {makeStyles} from '@mui/styles'
import Item from "./Item";

const useStyles = makeStyles((theme) => ({
    ItemList: {
        display: 'flex',
        width: '80%',
        height: '80%'
    },
    ItemListsSidebar: {
        background: "#8154cd",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "30%",
        textAlign: "center",
        boxShadow: "0 19px 38px rgba(0, 0, 0, .3), 0 15px 12px rgba(0, 0, 0, .1)"
    },
    ItemListTitle: {
        fontSize: "3rem",
        color: "#fff",
        fontWeight: "bold",
        margin: 60,
    },
    ImgSidebar: {
        width: "50%",
        boxShadow: "0 19px 38px rgba(0, 0, 0, .3), 0 15px 12px rgba(0, 0, 0, .1)",
        borderRadius: "50%",
        zIndex: 2
    },
    ItemListSticker: {
        height: "90%",
        width: "70%",
        background: "#fff",
        alignItems: "center",
        boxShadow: "0 19px 38px rgba(0, 0, 0, .3), 0 15px 12px rgba(0, 0, 0, .1)",
        marginTop: '25px'
    }
}))

const ItemsList = () => {

    const classes = useStyles()
    return (
        <Box className={classes.ItemList}>
            <Box className={classes.ItemListsSidebar}>
                <Typography  variant="h1" component="h2" className={classes.ItemListTitle}>
                    Hello
                    <br/>
                    World
                </Typography>
                <img className={classes.ImgSidebar} src="https://images.unsplash.com/photo-1528366715316-efc0cd8da962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0aWNrZXJ8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="imgSidebar"/>
            </Box>
            <Box className={classes.ItemListSticker}>
                <Item/>
            </Box>
        </Box>
    );
};

export default ItemsList;