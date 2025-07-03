
import React from 'react';
import { Grid, Paper } from '@mui/material';
import scss from './TransactionBottomRow.module.scss';
import DataChart from '@/components/DataChart';
import { doughnutChartData } from '@/components/mockdata';

const TransactionBottomRow =()=>{
    return (
        <Grid container gap={2} className={scss.bottomRow}>
            <Grid>
                <Paper className={scss.dataCard}>
                    <p>Transaction per user Type</p>
                    <DataChart type={"doughnut"} data={doughnutChartData} />
                </Paper>
            </Grid>

            <Grid>
                <Paper className={scss.dataCard}>
                    <p>Transaction per user Type</p>
                    <DataChart type={"doughnut"} data={doughnutChartData} />
                </Paper>
            </Grid>

            <Grid>
                <Paper className={scss.dataCard}>
                    <p>Transaction per user Type</p>
                    <DataChart type={"doughnut"} data={doughnutChartData} />
                </Paper>
            </Grid>

             <Grid>
                <Paper className={scss.dataCard}>
                    <p>Transaction per user Type</p>
                    <DataChart type={"doughnut"} data={doughnutChartData} />
                </Paper>
            </Grid>
        </Grid>
    );
}

export default TransactionBottomRow;