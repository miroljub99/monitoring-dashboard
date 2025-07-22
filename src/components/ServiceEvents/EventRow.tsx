import styled from "@emotion/styled";

interface EventRowProps {
  time: string;
  type: string;
  message: string;
  color: string;
}

export default function EventRow({ time, type, message, color }: EventRowProps) {
  return (
    <Row>
      <Cell>{time}</Cell>
      <TypeCell color={color}>{type}</TypeCell>
      <Cell>{message}</Cell>
    </Row>
  );
}

const Row = styled.tr(({ theme }) => ({
  borderBottom: `1px solid ${theme.colors.border}`,
}));

const Cell = styled.td(({ theme }) => ({
  padding: theme.spacing(2),
  fontSize: 14,
  color: theme.colors.text,
}));

const TypeCell = styled(Cell)<{ color: string }>(({ color }) => ({
  fontWeight: 600,
  color,
}));