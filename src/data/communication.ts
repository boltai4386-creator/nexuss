export interface CommunicationTool {
  id: number;
  name: string;
  description: string;
  icon: string;
  color: 'blue' | 'purple' | 'green';
}

export const communicationTools: CommunicationTool[] = [
  {
    id: 1,
    name: "Slack",
    description: "For all the communications, updates, feedbacks and reviews!",
    icon: "💬",
    color: "blue"
  },
  {
    id: 2,
    name: "Notion",
    description: "For the project management and scheduling scheduling",
    icon: "📋",
    color: "purple"
  },
  {
    id: 3,
    name: "WhatsApp",
    description: "For Direct Communication if its urgent for you then",
    icon: "📱",
    color: "green"
  }
];