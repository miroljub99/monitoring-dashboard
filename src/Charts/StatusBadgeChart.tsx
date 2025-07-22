import { PieChart,Pie,Cell, ResponsiveContainer,Label } from "recharts";
import { useTheme } from "@emotion/react";

export interface StatusBadgeChartProps {
    data: 'online'| 'offline'| 'degraded';
}

export default function StatusBadgeChart({data}:StatusBadgeChartProps){
    const theme = useTheme();
    let color,text;

    switch(data){
        case "online":
            text='Online';
            color= theme.colors.success;
            break;
        case 'offline':
            text='Offline';
            color=theme.colors.error;
            break;
        case 'degraded':
            text='Degraded';
            color=theme.colors.warning;
            break;
        default:
            text = 'Unknown';
            color = theme.colors.background;
    };

    return(<>
    <ResponsiveContainer width={150} height={150} aria-label={`Service status: ${text}`}>
        <PieChart >
            <Pie data={[{value:1}]}
                 cx={'50%'}
                 cy={'50%'}
                 innerRadius={'95%'}
                 outerRadius={'99%'}
                 startAngle={90}
                 endAngle={450}
                 isAnimationActive={false}
                 stroke="none"
                 fill={theme.colors.border}>
            </Pie>

            <Pie data={[{value:1}]}
                 cx={'50%'}
                 cy={'50%'}
                 innerRadius={'48%'}
                 outerRadius={'52%'}
                 fill={theme.colors.border}
                 isAnimationActive={false}
                 stroke="none"
                 >
            </Pie>
             <Pie data={[{value:1}]}
                 cx={'50%'}
                 cy={'50%'}
                 innerRadius={'52%'}
                 outerRadius={'93%'}
                 stroke="none"
                 startAngle={360}
                 endAngle={0}
                 isAnimationActive={false}>
                <Cell fill={theme.colors.background}></Cell>
            </Pie>
            <Pie data={[{value:1}]}
                 cx={'50%'}
                 cy={'50%'}
                 innerRadius={'52%'}
                 outerRadius={'93%'}
                 stroke="none"
                 startAngle={360}
                 endAngle={0}
                 animationDuration={600}>
                <Cell fill={color}></Cell>
                <Label position={'center'} fontSize={16} fill={theme.colors.text}>{text}</Label>
            </Pie>
        </PieChart>
    </ResponsiveContainer>
        
    </>);
}