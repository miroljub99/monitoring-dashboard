import styled from "@emotion/styled";
import { Heading1,Heading2,Paragraph } from "@/components";

export default function Home(){
    return(<>
    <Container>
        <Section>
            <Heading1>Monitoring Dashboard</Heading1>
            <Subtitle>Modern monitoring demo inspired by enterprise tools for DevOps and IT teams.</Subtitle>
        </Section>
        <Section>
            <Heading2>About the Project</Heading2>
            <Paragraph>
                Inspired by leading platforms like Dynatrace and Grafana,<br /> 
                this demo presents a real-time dashboard UI 
                for tracking the status and key metrics of multiple services in a single view.
            </Paragraph>
        </Section>
        <Section>
            <Heading2>Key Features</Heading2>
            <FeaturesList>
                <li>Real-time service status cards (CPU, memory, response time, uptime, errors)</li>
                <li>Detailed and expandable technical view per service</li>
                <li>Responsive UI: optimized for desktop screen</li>
                <li>“Coming soon” features: Settings and Support</li>
                <li>Built with React, Zustand, Emotion, Axios, Jest</li>
            </FeaturesList>
        </Section>
        <Section>
            <Heading2>How to Use</Heading2>
            <Paragraph>
                Navigate to the Dashboard to see an overview of all monitored services.<br />
                Click on any service card for detailed technical and performance metrics.<br />
                Settings and Support are currently in development.
            </Paragraph>
        </Section>
        <Section>
            <Note>
                <strong>Device Support:</strong><br />
                This dashboard is intended for desktop and tablet use.<br />
                On mobile devices, you’ll be prompted to use a larger screen.
            </Note>
        </Section>
        <Section>
            <Heading2>Motivation</Heading2>
            <Paragraph>
                This project was built as a portfolio piece to showcase my skills in front-end engineering,<br /> 
                UI/UX design for dashboards, and enterprise-level responsive web applications.
            </Paragraph>
        </Section>
    </Container>
    </>);
}

const Container = styled.div(({theme:{spacing,borderRadius,colors,shadow}})=>({
    overflowY:'scroll',
    background:colors.surface,
    border:`1px solid ${colors.border}`,
    borderRadius:borderRadius.md,
    boxShadow:shadow.md,
    padding:`${spacing(8)} ${spacing(8)}`,
}));

const Section = styled.div(({theme:{spacing,colors}})=>({
    display:'flex',
    flexDirection:'column',
    gap:spacing(2),
    marginBottom:spacing(8),
    'p':{
        color:colors.textMuted,
    }
}));

const Subtitle = styled.div(({theme:{font,colors}})=>({
    fontSize:font.size.h3,
    color:colors.textMuted,

}));

const FeaturesList = styled.ul(({theme:{spacing,colors}})=>({
    listStyle:'disc',
    paddingLeft:spacing(10),
    marginTop:spacing(2),
    'li':{
        padding:spacing(1),
        fontSize:'18px',
        color:colors.textMuted,
    }
}));

const Note = styled.div(({theme:{colors,spacing,font,borderRadius}})=>({
    width:'fit-content',
    background:colors.background,
    padding:spacing(6),
    fontSize: font.size.paragraph,
    lineHeight:font.lineHeight.paragraph,
    border:`1px solid ${colors.border}`,
    borderRadius: borderRadius.sm,
    color:colors.textMuted,
    'strong':{
        color:colors.text,
        lineHeight:'28px',
    }

}));