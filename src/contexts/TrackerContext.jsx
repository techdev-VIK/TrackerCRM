import { createContext, useContext } from "react";

const TrackerContext = createContext();
export default TrackerContext;

export const sampleLeads = [
  {
    _id: "65bd32a1e8a2c11f9b0d3f01",
    name: "John Doe",
    source: "Website",
    salesAgent: "Laurie Jackson",
    status: "New",
    tags: [
      { value: "high-value", label: "High Value" },
      { value: "follow-up", label: "Follow-up" }
    ],
    budget: 200000,
    timeToClose: 14,
    priority: "High",
    createdAt: new Date("2024-02-04T10:00:00.000Z"),
    updatedAt: new Date("2024-02-04T10:00:00.000Z"),
  },
  {
    _id: "65bd32a1e8a2c11f9b0d3f02",
    name: "Alice Smith",
    source: "Referral",
    salesAgent: "John Diaz",
    status: "Contacted",
    tags: [
      { value: "urgent", label: "Urgent" },
      { value: "follow-up", label: "Follow-up" }
    ],
    budget: 1000000,
    timeToClose: 10,
    priority: "High",
    createdAt: new Date("2024-02-02T12:00:00.000Z"),
    updatedAt: new Date("2024-02-03T14:00:00.000Z"),
  },
  {
    _id: "65bd32a1e8a2c11f9b0d3f03",
    name: "Michael Johnson",
    source: "Cold Call",
    salesAgent: "Stark Charles",
    status: "Qualified",
    tags: [
      { value: "interested", label: "Interested" }
    ],
    budget: 8000000,
    timeToClose: 7,
    priority: "Medium",
    createdAt: new Date("2024-01-30T09:30:00.000Z"),
    updatedAt: new Date("2024-02-01T11:45:00.000Z"),
  },
  {
    _id: "65bd32a1e8a2c11f9b0d3f04",
    name: "Sarah Brown",
    source: "Advertisement",
    salesAgent: "Smith Dave",
    status: "Proposal Sent",
    tags: [
      { value: "potential-client", label: "Potential Client" },
      { value: "negotiation", label: "Negotiation" }
    ],
    budget: 51000,
    timeToClose: 21,
    priority: "High",
    createdAt: new Date("2024-01-28T15:15:00.000Z"),
    updatedAt: new Date("2024-02-03T16:20:00.000Z"),
  },
  {
    _id: "65bd32a1e8a2c11f9b0d3f05",
    name: "David Wilson",
    source: "Email",
    salesAgent: "Johnny Carlos",
    status: "New",
    tags: [
      { value: "follow-up", label: "Follow-up" },
      { value: "needs-more-info", label: "Needs More Info" }
    ],
    budget: 63000,
    timeToClose: 30,
    priority: "Low",
    createdAt: new Date("2024-01-27T08:10:00.000Z"),
    updatedAt: new Date("2024-01-27T08:10:00.000Z"),
  },
  {
    _id: "65bd32a1e8a2c11f9b0d3f06",
    name: "Emma Taylor",
    source: "Referral",
    salesAgent: "Bruno Marz",
    status: "Closed",
    tags: [
      { value: "successful-deal", label: "Successful Deal" }
    ],
    budget: 26000,
    timeToClose: 12,
    priority: "Medium",
    createdAt: new Date("2024-01-25T14:00:00.000Z"),
    updatedAt: new Date("2024-01-30T16:00:00.000Z"),
    closedAt: new Date("2024-01-30T16:00:00.000Z"),
  },
  {
    _id: "65bd32a1e8a2c11f9b0d3f07",
    name: "Oliver Martinez",
    source: "Other",
    salesAgent: "Sophia Campbell",
    status: "Contacted",
    tags: [
      { value: "high-value", label: "High Value" },
      { value: "vip-client", label: "VIP Client" }
    ],
    budget: 16000,
    timeToClose: 5,
    priority: "High",
    createdAt: new Date("2024-01-24T10:20:00.000Z"),
    updatedAt: new Date("2024-02-01T12:30:00.000Z"),
  }
];
