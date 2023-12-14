import {Box} from "@mui/material";
import Header from  "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () =>{

    return (
    <Box m="20px">
        <Box>
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
        </Box>
        <Box height="75vh">
            <BarChart/>
        </Box>

    </Box>
    )
}
export default Bar;