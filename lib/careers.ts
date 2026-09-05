export interface CareerRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time / On-site
  experience: string;
  summary: string;
  responsibilities: string[];
}

export const openRoles: CareerRole[] = [
  {
    id: "trader-base-oils",
    title: "Junior Energy Trader (Base Oils and Distillates)",
    department: "Commercial Trading Desk",
    location: "Dubai, UAE (Garhoud Deira)",
    type: "Full-Time / On-Site",
    experience: "3–5 Years in Oil & Gas Trading",
    summary:
      "Responsible for spot physical trading of Group I Base Oils (SN 150, SN 500, BS 150) and middle distillates across GCC and Asian export markets.",
    responsibilities: [
      "Manage physical supply contracts and spot parcel pricing with regional refineries.",
      "Evaluate COA technical specifications and ensure compliance with buyer parameters.",
      "Coordinate laycan schedules, vessel chartering, and discharge port logistics.",
    ],
  },
  {
    id: "qa-chemist",
    title: "Petrochemical QA/QC Inspection Specialist",
    department: "Quality Assurance & Technical Compliance",
    location: "Dubai, UAE / Jebel Ali Port Desk",
    type: "Full-Time / On-Site",
    experience: "4+ Years Petroleum Quality Testing",
    summary:
      "Oversees laboratory sampling, test method validation, and independent inspection reports for incoming and outgoing bulk fuel/base oil parcels.",
    responsibilities: [
      "Review independent lab batch reports for kinematic viscosity, flash point, and sulfur content.",
      "Maintain COA verification protocol for every commercial vessel load.",
      "Audit terminal storage tanks and blending operations for zero contamination.",
    ],
  },
  {
    id: "maritime-logistics",
    title: "Maritime Tanker Logistics Officer",
    department: "Shipping & Operations",
    location: "Dubai, UAE (Garhoud Deira)",
    type: "Full-Time / On-Site",
    experience: "3+ Years Marine Freight & Chartering",
    summary:
      "Coordinates charter party agreements, bill of lading documentation, and flexitank container logistics out of UAE ports.",
    responsibilities: [
      "Prepare shipping instructions, customs declarations, and Certificate of Origin documents.",
      "Monitor vessel movement, NOR tender, and demurrage minimization.",
      "Liaise with port agents and freight forwarders for flexitanks and ISO tank deliveries.",
    ],
  },
];
