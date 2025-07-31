import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { type Event } from "@/types";
import EventTable from "./EventTable";
import { Paragraph } from "../UI/Typography";

interface ServiceEventsProps{
    events: Event[];
    rowLimit?: number;
}


export default function ServiceEvents({ events, rowLimit = 5 }: ServiceEventsProps) {
  const theme = useTheme();

  const formatted = events.slice(0, rowLimit).map((event) => ({
    time: new Date(event.timestamp).toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    }),
    type: event.type,
    message: event.message,
    color: event.type === "error" ? theme.colors.error : event.type === "notification" ? theme.colors.warning : theme.colors.primary,
  }));

  return (
    <Wrapper>
      <Paragraph>Service Events</Paragraph>
      <EventTable events={formatted} rowLimit={rowLimit}/>
    </Wrapper>
  );
}

const Wrapper = styled.div(({ theme:{spacing,colors,borderRadius,shadow} }) => ({
  display:'flex',
  flexDirection:'column',
  width:600,
  gap:spacing(4),
  padding:`${spacing(2)} ${spacing(4)}`,
  background:colors.surface,
  borderRadius: borderRadius.lg,
  border: `1px solid ${colors.border}`,
  boxShadow: shadow.md,
}));