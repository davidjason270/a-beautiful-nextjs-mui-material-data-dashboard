
import { useTheme } from '@emotion/react';
import scss from './TransactionPerDay.module.scss'
import { Card, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import DataChart from '@/components/DataChart';
import {lineChartData} from "@/components/mockdata";

export type TransactionCardType = {
    title:string,
    value:string,
    changeValue: string
}


const TransactionPerDay = ()=>{
    const theme = useTheme();
    
    return (
        <Grid container gap={2} className={scss.wrapper}>
            <Paper className={scss.transactions}>
                <div className={scss.chart}>
                    <Typography>Transactions Per Day</Typography>
                    <DataChart type={"line"} data={lineChartData} />
                </div>
                <div className={scss.cardWrapper}>
                    <Card className={scss.card} variant={"outlined"}>
                        <div className={scss.cardTitle}>
                            <Typography>Total Products</Typography>
                        </div>
                        <div className={scss.cardValue}>
                            <Typography>1.275</Typography>
                            <Typography color={theme.palette.success.main} fontSize={14}>428.7%</Typography>
                        </div>
                    </Card>

                    <Card className={scss.card} variant={"outlined"}>
                        <div className={scss.cardTitle}>
                            <Typography>But-to-Detail</Typography>
                        </div>
                        <div className={scss.cardValue}>
                            <Typography>1.275</Typography>
                            <Typography color={theme.palette.success.main} fontSize={14}>428.7%</Typography>
                        </div>
                    </Card>

                    <Card className={scss.card} variant={"outlined"}>
                        <div className={scss.cardTitle}>
                            <Typography>Refunds</Typography>
                        </div>
                        <div className={scss.cardValue}>
                            <Typography>1.275</Typography>
                            <Typography color={theme.palette.success.main} fontSize={14}>428.7%</Typography>
                        </div>
                    </Card>

                </div>
            </Paper>
        </Grid>
    );
}

export default TransactionPerDay;