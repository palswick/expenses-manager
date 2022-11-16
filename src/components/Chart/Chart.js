import ChartBar from "./ChartBar";

import './Chart.css'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} label={dataPoint.label}
                                                         key={dataPoint.id} maxValue={totalMaximum}/>)}
        </div>
    );
};

export default Chart;