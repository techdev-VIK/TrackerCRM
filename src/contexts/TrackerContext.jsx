import { createContext, useContext } from "react";


const TrackerContext = createContext();

export default TrackerContext;


export const sampleLeads = [
    {
      _id: "65bd32a1e8a2c11f9b0d3f01",
      name: "John Doe",
      source: "Website",
      salesAgent: "65bc12345e8a2c11f9b0d100",
      status: "New",
      tags: ["High Value", "Follow-up"],
      timeToClose: 14,
      priority: "High",
      createdAt: new Date("2024-02-04T10:00:00.000Z"),
      updatedAt: new Date("2024-02-04T10:00:00.000Z"),
    },
    {
      _id: "65bd32a1e8a2c11f9b0d3f02",
      name: "Alice Smith",
      source: "Referral",
      salesAgent: "65bc12345e8a2c11f9b0d101",
      status: "Contacted",
      tags: ["Urgent", "Follow-up"],
      timeToClose: 10,
      priority: "High",
      createdAt: new Date("2024-02-02T12:00:00.000Z"),
      updatedAt: new Date("2024-02-03T14:00:00.000Z"),
    },
    {
      _id: "65bd32a1e8a2c11f9b0d3f03",
      name: "Michael Johnson",
      source: "Cold Call",
      salesAgent: "65bc12345e8a2c11f9b0d102",
      status: "Qualified",
      tags: ["Interested"],
      timeToClose: 7,
      priority: "Medium",
      createdAt: new Date("2024-01-30T09:30:00.000Z"),
      updatedAt: new Date("2024-02-01T11:45:00.000Z"),
    },
    {
      _id: "65bd32a1e8a2c11f9b0d3f04",
      name: "Sarah Brown",
      source: "Advertisement",
      salesAgent: "65bc12345e8a2c11f9b0d103",
      status: "Proposal Sent",
      tags: ["Potential Client", "Negotiation"],
      timeToClose: 21,
      priority: "High",
      createdAt: new Date("2024-01-28T15:15:00.000Z"),
      updatedAt: new Date("2024-02-03T16:20:00.000Z"),
    },
    {
      _id: "65bd32a1e8a2c11f9b0d3f05",
      name: "David Wilson",
      source: "Email",
      salesAgent: "65bc12345e8a2c11f9b0d104",
      status: "New",
      tags: ["Follow-up", "Needs More Info"],
      timeToClose: 30,
      priority: "Low",
      createdAt: new Date("2024-01-27T08:10:00.000Z"),
      updatedAt: new Date("2024-01-27T08:10:00.000Z"),
    },
    {
      _id: "65bd32a1e8a2c11f9b0d3f06",
      name: "Emma Taylor",
      source: "Referral",
      salesAgent: "65bc12345e8a2c11f9b0d105",
      status: "Closed",
      tags: ["Successful Deal"],
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
      salesAgent: "65bc12345e8a2c11f9b0d106",
      status: "Contacted",
      tags: ["High Value", "VIP Client"],
      timeToClose: 5,
      priority: "High",
      createdAt: new Date("2024-01-24T10:20:00.000Z"),
      updatedAt: new Date("2024-02-01T12:30:00.000Z"),
    }
  ];

  