import type { ReactNode } from "react";
import "./EmptyState.css"

interface EmptyStateProps {
  title:string;
  message:string;
  action?: ReactNode;
}
const EmptyState = ({ title, message, action} : EmptyStateProps) => {
  return (
    <div className="empty-state">
      <div className="empty-state_icon" aria-hidden="true">
        0
      </div>
      <h2 className="empty-state_title">{title}</h2>
      <p className="empty-state_message">{message}</p>
      {action && <div className="empty-state_action">{action}</div>}
    </div>
  );
};
export default EmptyState;