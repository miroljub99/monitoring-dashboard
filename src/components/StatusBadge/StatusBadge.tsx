import type { Service } from "../../types"

interface StatusBadgeProps {
    status: Service['status'];
};

/**
 * Mapping of service status to corresponding visual representation.
 * Each status is associated with a color, emoji, and label.
 */
const statusMap = {
  online: { color: 'green', emoji: '\u{1F7E2}', label: 'Online' },
  offline: { color: 'red', emoji: '\u{1F534}', label: 'Offline' },
  degraded: { color: 'orange', emoji: '\u{1F7E0}', label: 'Degraded' },
};

/**
 * Component that displays the current service status as a badge.
 * Shows an emoji and a label based on the service status.
 */
export default function StatusBadge({status}: StatusBadgeProps){

    const {emoji,label} = statusMap[status];
    return(<>
        <span>{emoji+` `+label}</span>
    </>);
}