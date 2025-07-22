import styled from "@emotion/styled";
import EventRow from "./EventRow";

interface RowData {
  time: string;
  type: string;
  message: string;
  color: string;
}

interface EventTableProps {
  events: RowData[];
  rowLimit: number; 
}

export default function EventTable({ events, rowLimit }: EventTableProps) {
  
  if (events.length === 0) {
    return (
      <Table>
        <thead>
          <tr>
            <Th>Time</Th>
            <Th>Type</Th>
            <Th>Message</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={3}>No events available</td>
          </tr>
        </tbody>
      </Table>
    );
  }

  
  const emptyRows = rowLimit - events.length;
  const visibleEvents = events.slice(0, rowLimit);

  return (
    <Table>
      <thead>
        <tr>
          <Th>Time</Th>
          <Th>Type</Th>
          <Th>Message</Th>
        </tr>
      </thead>
      <tbody>
        {visibleEvents.map((e, idx) => (
          <EventRow key={idx} {...e} />
        ))}

        {emptyRows > 0 &&
          Array.from({ length: emptyRows }).map((_, idx) => (
            <tr key={`empty-${idx}`}>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

const Table = styled.table(({ theme:{colors,borderRadius} }) => ({
  width: "100%",
  borderCollapse: "separate",
  background: colors.surface,
  borderRadius: borderRadius.lg,
  overflow: "hidden",
}));

const Th = styled.th(({ theme: {spacing,colors} }) => ({
  textAlign: "left",
  padding: spacing(2),
  fontSize: 14,
  color: colors.textMuted,
  background: colors.background,
  borderBottom: `1px solid ${colors.border}`,
}));