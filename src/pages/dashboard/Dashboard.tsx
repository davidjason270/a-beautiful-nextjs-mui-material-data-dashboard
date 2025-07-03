import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import scss from './dashboard.module.scss';
import DataRibbon from "@/components/dashboard/DataRibbon";
import TransactionPerDay from "@/components/dashboard/TransactionPerDay";
import TransactionBottomRow from "@/components/dashboard/TransactionsBottomRow";

export default function Dashboard()
{
    return(
        <Box>
            <Grid container gap={4} >
                <DataRibbon/>
                <TransactionPerDay/>
            </Grid>
            <TransactionBottomRow />
        </Box>
    );
}