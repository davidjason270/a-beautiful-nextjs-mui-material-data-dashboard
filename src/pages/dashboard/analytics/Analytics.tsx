import dynamic from "next/dynamic";
import { useDemoData } from '@mui/x-data-grid-generator';
const DataGridClient = dynamic(() => import('@/components/DataChart'), { ssr: false });

const Analytics = ()=>{ 
    const { data } = useDemoData({ dataSet: "Commodity", rowLength: 500, maxColumns:15 });
    return (
    <>
        <h1>Analytics</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sint explicabo enim nam adipisci fugit.</p>

        <div style={{ height: "600px", width: "100%" }}>
        <DataGridClient loading={!data} {...data} />
        </div>
    </>);

}

export default Analytics;