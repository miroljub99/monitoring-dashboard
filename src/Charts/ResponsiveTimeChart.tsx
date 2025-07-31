import { BarChart,ResponsiveContainer,XAxis,YAxis,Bar,CartesianGrid,Tooltip } from "recharts"; 

interface ResponsiveTimeChartProps{
    data:{timestamp: string,value: number}[];
    color: string;
    fontSize: number | string;
    height?: number | string;
    width?: number | string;
}

export default function ResponsiveTimeChart({data,color,fontSize,height,width}:ResponsiveTimeChartProps){
    
    return(<>
        <ResponsiveContainer width={width ?? '100%'} height={height ?? `100%`}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey='timestamp' tick={{fontSize:`${fontSize}`}}/>
                <YAxis/>
                <Tooltip labelStyle={{color:'black'}}/>
                <Bar dataKey='value' fill={color} animationDuration={600} animationBegin={300}/>
            </BarChart>
        </ResponsiveContainer>
    </>);
}