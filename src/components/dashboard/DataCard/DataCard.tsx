import React from "react";
import { Grid, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import scss from './DataCard.module.scss';
import { InfoOutline } from "@mui/icons-material";

export type DataCardProps = {
    title: string,
    value: string,
    description: string
}

const DataCard =(props: DataCardProps)=>{
    const {title, value, description } = props;
    return (
        <Paper className={scss.dataCard}>
            <div className={scss.header} >
                <Typography fontSize={"h6"} color={"lightslategrey"}>{title}</Typography>
                <Tooltip title={<Typography fontSize={16}>{`${description} which is ${value}`}</Typography>}>
                    <IconButton>
                        <InfoOutline/>
                    </IconButton>
                </Tooltip>
            </div>
            <Typography fontSize={"h4"}>{value}</Typography>
        </Paper>
    );
}

export default DataCard;