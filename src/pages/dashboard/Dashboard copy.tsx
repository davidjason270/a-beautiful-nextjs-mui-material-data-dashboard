import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import scss from './dashboard.module.scss';

export default function Dashboard()
{
    return(
        <Box>

            <Grid container spacing={1} className={scss.topCardsContainer} >
                <Grid size={4}>
                    <Paper className={scss.dataCard}>sx=4</Paper>
                </Grid>
                <Grid size={4}>
                    <Paper className={scss.dataCard}>sx=4</Paper>
                </Grid>
                <Grid size={4}>
                    <Paper className={scss.dataCard}>sx=4</Paper>
                </Grid>
            </Grid>

            <Grid size={12} marginY={2}>
                <Paper className={scss.dataCard}>sx=8</Paper>
            </Grid>
        </Box>
    );
}