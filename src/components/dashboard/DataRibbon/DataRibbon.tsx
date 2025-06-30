import React from "react";
import { Grid,} from "@mui/material";
import DataCard from "../DataCard";
import scss from './DataRibbon.module.scss'

const DataRibbon =()=>{
    return(
        <Grid container gap={2} className={scss.dataRibbon}>
            <Grid>
                 <DataCard 
                    title={"Total Sales"} 
                    value={"462"} 
                    description={"The totals of all apersonal products in the current financial year"} />
            </Grid>
          
            <Grid>
                 <DataCard 
                    title={"Total Value"} 
                    value={"$25, 732.53"} 
                    description={"The total Sales of apersonal products in the current financial year"} />
            </Grid>

            <Grid>
                 <DataCard 
                    title={"Avg. Order Value"} 
                    value={"$153.30"} 
                    description={"The Avarage Order Value of all apersonal products in the current financial year"} />
            </Grid>

            <Grid>
                 <DataCard 
                    title={"Conversion Rate"} 
                    value={"0.61%"} 
                    description={"How many nitches became Sales"} />
            </Grid>

        </Grid>
    )
}
export default DataRibbon;