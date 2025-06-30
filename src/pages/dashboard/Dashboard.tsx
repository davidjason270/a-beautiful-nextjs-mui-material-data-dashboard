import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import scss from './dashboard.module.scss';
import DataRibbon from "@/components/dashboard/DataRibbon";
import TransactionPerDay from "@/components/dashboard/TransactionPerDay";

export default function Dashboard()
{
    return(
        <Box>
            {/* Data Ribbon - Showing stats */}
            <DataRibbon/>
            {/* Transaction Per Day - graph - numerical Cards */}
            <TransactionPerDay/>
            {/* Transaction Doughnut - Charts */}
        </Box>
    );
}