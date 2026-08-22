export interface DistillationProduct {
  id: string;
  slug: string;
  name: string;
  tempRange: string;
  note: string;
  swatchColor: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
}

export interface BaseOilGradeSpec {
  grade: string;
  viscosity40: string;
  viscosity100: string;
  viscosityIndex: string;
  flashPoint: string;
  pourPoint: string;
  color: string;
}

export interface ProductSpecTable {
  label: string;
  columns: { key: string; header: string; align?: "left" | "center" | "right" }[];
  rows: Record<string, string>[];
}

export interface ProductDocument {
  title: string;
  type: string;
  size: string;
  url: string; // Placeholder # link
}

export interface ProductGrade {
  name: string;
  slug?: string;
  pdfUrl?: string;
}

export interface ProductGradeGroup {
  groupName?: string;
  grades: ProductGrade[];
}

export interface ProductNavItem {
  name: string;
  slug: string;
  href: string;
}

export const productNavItems: ProductNavItem[] = [
  { name: "Base oil", slug: "base-oil", href: "/products/base-oil" },
  { name: "Bitumen", slug: "bitumen", href: "/products/bitumen" },
  { name: "Fuel oil", slug: "fuel-oil", href: "/products/fuel-oil" },
  { name: "Gas oil", slug: "gas-oil", href: "/products/gas-oil" },
  { name: "Grease", slug: "grease", href: "/products/grease" },
  { name: "Hydrocarbon oil", slug: "hydrocarbon-oil", href: "/products/hydrocarbon-oil" },
  { name: "Naphtha", slug: "naphtha", href: "/products/naphtha" },
  { name: "Rubber process oil", slug: "rubber-process-oil", href: "/products/rubber-process-oil" },
];

export interface ProductDetail {
  slug: string;
  name: string;
  tagline: string;
  distillationTemp: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  msdsUrl?: string;
  gradeGroups: ProductGradeGroup[];
  introParagraphs: string[];
  specTables: ProductSpecTable[];
  applications: string[];
  packingOptions: string[];
  documents: ProductDocument[];
}

export const COA_FOOTNOTE =
  "Figures are typical values, binding specs are on the COA for your parcel.";

export const distillationProducts: DistillationProduct[] = [
  {
    id: "naphtha",
    slug: "naphtha",
    name: "Virgin Naphtha (Light & Heavy)",
    tempRange: "30°C – 200°C",
    note: "Steam cracking feedstock & high-octane blendstock",
    swatchColor: "#E5901C",
    href: "/products/naphtha",
    imageSrc: "/images/products/naphtha.jpg",
    imageAlt: "Petrochemical plant atmospheric distillation towers for virgin naphtha",
    imageCaption: "Primary fractional distillation columns producing light and heavy virgin naphtha.",
  },
  {
    id: "gas-oil",
    slug: "gas-oil",
    name: "Gas Oil D2 & Ultra-Low Sulfur Diesel",
    tempRange: "180°C – 360°C",
    note: "10PPM ULSD & automotive/industrial gas oil",
    swatchColor: "#D9531E",
    href: "/products/gas-oil",
    imageSrc: "/images/products/gas-oil.jpg",
    imageAlt: "Gulf refinery gas oil storage tanks and distribution pipework",
    imageCaption: "10PPM ULSD and gas oil D2 bulk storage at Gulf refining facility.",
  },
  {
    id: "hydrocarbon-oil",
    slug: "hydrocarbon-oil",
    name: "Industrial Hydrocarbon Solvents",
    tempRange: "150°C – 300°C",
    note: "Aliphatic & aromatic hydrocarbon distillates",
    swatchColor: "#14618E",
    href: "/products/hydrocarbon-oil",
    imageSrc: "/images/products/hydrocarbon-oil.jpg",
    imageAlt: "Industrial chemical pipe rack and solvent drum storage",
    imageCaption: "White spirit and aliphatic hydrocarbon solvent drum storage.",
  },
  {
    id: "base-oil",
    slug: "base-oil",
    name: "Solvent Neutral Base Oils (SN 150 / 500 / BS 150)",
    tempRange: "300°C – 550°C",
    note: "Group I virgin base stocks for lubricants & greases",
    swatchColor: "#3D5B66",
    href: "/products/base-oil",
    imageSrc: "/images/products/base-oil.jpg",
    imageAlt: "Amber virgin base oil sample tested in laboratory glass beaker",
    imageCaption: "ASTM D445 kinematic viscosity testing on Group I base oil sample.",
  },
  {
    id: "rubber-process-oil",
    slug: "rubber-process-oil",
    name: "Rubber Process Oil (RPO)",
    tempRange: "320°C – 520°C",
    note: "Aromatic & paraffinic elastomer processing aids",
    swatchColor: "#5E8C2A",
    href: "/products/rubber-process-oil",
    imageSrc: "/images/products/rubber-process-oil.jpg",
    imageAlt: "Industrial tyre vulcanization and rubber compound manufacturing",
    imageCaption: "Aromatic and paraffinic rubber process oil blending for tire manufacturing.",
  },
  {
    id: "grease",
    slug: "grease",
    name: "Lithium Complex Industrial Greases",
    tempRange: "350°C – 500°C",
    note: "NLGI 2 & 3 extreme pressure lubricating greases",
    swatchColor: "#E5901C",
    href: "/products/grease",
    imageSrc: "/images/products/grease.jpg",
    imageAlt: "High-temperature lithium complex grease applied to industrial bearings",
    imageCaption: "Extreme-pressure NLGI Grade 2 lithium grease formulation.",
  },
  {
    id: "fuel-oil",
    slug: "fuel-oil",
    name: "Marine & Industrial Fuel Oil (180 / 380 cSt)",
    tempRange: "350°C – 650°C",
    note: "Heavy residual fuel oil for power & bunkering",
    swatchColor: "#0F2C39",
    href: "/products/fuel-oil",
    imageSrc: "/images/products/fuel-oil.jpg",
    imageAlt: "Heavy fuel oil terminal pipeline manifold and loading arm",
    imageCaption: "High-flow pipeline manifold for CST 180 and CST 380 marine fuel loading.",
  },
  {
    id: "bitumen",
    slug: "bitumen",
    name: "Asphalt Bitumen (60/70 & 80/100)",
    tempRange: "> 550°C",
    note: "Penetration grade paving bitumen & oxidised asphalt",
    swatchColor: "#07171E",
    href: "/products/bitumen",
    imageSrc: "/images/products/bitumen.jpg",
    imageAlt: "Fresh black asphalt bitumen paving surface layer",
    imageCaption: "Penetration grade 60/70 asphalt binder application for road paving.",
  },
];

export const baseOilSpecs: BaseOilGradeSpec[] = [
  {
    grade: "SN 150",
    viscosity40: "28.0 – 32.0 cSt",
    viscosity100: "5.0 – 5.5 cSt",
    viscosityIndex: "Min 95",
    flashPoint: "Min 210 °C",
    pourPoint: "Max -6 °C",
    color: "L 1.0",
  },
  {
    grade: "SN 500",
    viscosity40: "94.0 – 106.0 cSt",
    viscosity100: "10.5 – 11.5 cSt",
    viscosityIndex: "Min 95",
    flashPoint: "Min 230 °C",
    pourPoint: "Max -6 °C",
    color: "L 2.0",
  },
  {
    grade: "BS 150",
    viscosity40: "460.0 – 520.0 cSt",
    viscosity100: "30.0 – 34.0 cSt",
    viscosityIndex: "Min 95",
    flashPoint: "Min 270 °C",
    pourPoint: "Max -3 °C",
    color: "L 4.5",
  },
];

export interface TradeFact {
  label: string;
  fact: string;
  description: string;
}

export const tradeFacts: TradeFact[] = [
  {
    label: "LOCATION & OPERATIONAL DESK",
    fact: "Dubai Trading Desk",
    description:
      "Operating out of Tejasvi Business Center, Garhoud Deira, Dubai (Sun–Thu 09:00–18:00 GST).",
  },
  {
    label: "PRODUCT PORTFOLIO",
    fact: "8 Refined Product Lines",
    description:
      "Naphtha, Gasoil D2, Hydrocarbon Solvents, Base Oils, RPO, Greases, Fuel Oil, and Bitumen.",
  },
  {
    label: "LUBRICANT BASE STOCKS",
    fact: "Group I–III Base Oils",
    description:
      "Solvent neutral SN 150, SN 500, Bright Stock BS 150, and specialized process fluids.",
  },
  {
    label: "COMMERCIAL INCOTERMS",
    fact: "FOB / CFR / CIF Terms",
    description:
      "Flexible commercial terms for bulk vessel charters, ISO tanks, flexitanks, and drums.",
  },
];

export const howWeWorkSteps = [
  {
    stepNumber: "01",
    title: "Refinery procurement and sampling",
    description:
      "We source directly from refineries in the Gulf region. Every batch undergoes laboratory testing for kinematic viscosity, flash point, sulfur content, and TBN before contract execution.",
  },
  {
    stepNumber: "02",
    title: "Blending and quality control",
    description:
      "Our technical team oversees blending to customer specifications, maintaining quality control thresholds for industrial applications.",
  },
  {
    stepNumber: "03",
    title: "Chartering and logistics",
    description:
      "From ISO tank containers to flexitanks and vessel chartering out of Jebel Ali and Hamriyah ports, we handle maritime logistics and customs documentation.",
  },
];

export const productsData: Record<string, ProductDetail> = {
  "base-oil": {
    slug: "base-oil",
    name: "Solvent Neutral Base Oils (SN 150, SN 500, BS 150)",
    tagline: "Group I virgin refined base stocks for industrial lubricants, automotive motor oils, and processing fluids.",
    distillationTemp: "300°C – 550°C",
    imageSrc: "/images/products/base-oil.jpg",
    imageAlt: "Amber virgin base oil sample tested in laboratory glass beaker",
    imageCaption: "ASTM D445 kinematic viscosity testing on Group I base oil sample.",
    msdsUrl: "/docs/msds/base-oil.pdf",
    gradeGroups: [
      {
        groupName: "Group 1",
        grades: [
          { name: "SN 50", pdfUrl: "/docs/coa/sn-50.pdf" },
          { name: "SN 60", pdfUrl: "/docs/coa/sn-60.pdf" },
          { name: "SN 70", pdfUrl: "/docs/coa/sn-70.pdf" },
          { name: "SN 150", pdfUrl: "/docs/coa/sn-150.pdf" },
          { name: "SN 500", pdfUrl: "/docs/coa/sn-500.pdf" },
          { name: "SN 600", pdfUrl: "/docs/coa/sn-600.pdf" },
          { name: "BS 150", pdfUrl: "/docs/coa/bs-150.pdf" },
        ],
      },
      {
        groupName: "Group 2",
        grades: [
          { name: "N 150", pdfUrl: "/docs/coa/n-150.pdf" },
          { name: "N 500", pdfUrl: "/docs/coa/n-500.pdf" },
        ],
      },
      {
        groupName: "Group 3",
        grades: [
          { name: "4cSt", pdfUrl: "/docs/coa/4cst.pdf" },
          { name: "6cSt", pdfUrl: "/docs/coa/6cst.pdf" },
          { name: "8cSt", pdfUrl: "/docs/coa/8cst.pdf" },
        ],
      },
    ],
    introParagraphs: [
      "Hamburg Refined Oil Products Trading LLC supplies Group I solvent neutral base oils processed from paraffinic crude oil cuts. Our base oils are refined through solvent extraction and dewaxing to deliver oxidation resistance, thermal stability, and low volatility.",
      "Available in standard viscosity grades—SN 150 (light distillate), SN 500 (medium-heavy distillate), and Bright Stock BS 150 (heavy residual stock)—our inventory caters to commercial blender operations, lubricant compounding plants, and chemical manufacturers.",
    ],
    specTables: [
      {
        label: "VIRGIN GROUP I BASE OIL TYPICAL SPECIFICATIONS",
        columns: [
          { key: "parameter", header: "Test Parameter" },
          { key: "method", header: "ASTM Method" },
          { key: "sn150", header: "SN 150" },
          { key: "sn500", header: "SN 500" },
          { key: "bs150", header: "BS 150" },
        ],
        rows: [
          { parameter: "Kinematic Viscosity @ 40°C", method: "ASTM D445", sn150: "28.0 – 32.0 cSt", sn500: "94.0 – 106.0 cSt", bs150: "460.0 – 520.0 cSt" },
          { parameter: "Kinematic Viscosity @ 100°C", method: "ASTM D445", sn150: "5.0 – 5.5 cSt", sn500: "10.5 – 11.5 cSt", bs150: "30.0 – 34.0 cSt" },
          { parameter: "Viscosity Index", method: "ASTM D2270", sn150: "Min 95", sn500: "Min 95", bs150: "Min 95" },
          { parameter: "Flash Point (COC)", method: "ASTM D92", sn150: "Min 210 °C", sn500: "Min 230 °C", bs150: "Min 270 °C" },
          { parameter: "Pour Point", method: "ASTM D97", sn150: "Max -6 °C", sn500: "Max -6 °C", bs150: "Max -3 °C" },
          { parameter: "Specific Gravity @ 15°C", method: "ASTM D4052", sn150: "0.865 – 0.875", sn500: "0.880 – 0.895", bs150: "0.895 – 0.910" },
          { parameter: "ASTM Color", method: "ASTM D1500", sn150: "Max 1.0", sn500: "Max 2.0", bs150: "Max 4.5" },
        ],
      },
    ],
    applications: [
      "Automotive crankcase engine oils (passenger car & heavy diesel)",
      "Industrial hydraulic fluids, turbine oils, and compressor lubricants",
      "Gear lubricants and heavy industrial transmission fluids",
      "Metalworking fluids, cutting oils, and heat transfer mediums",
    ],
    packingOptions: [
      "Flexitanks (20ft ISO container - approx 21.5 MT)",
      "ISO Tank Containers (approx 24.0 MT / 26,000 L)",
      "New Steel Drums (208 L / 180 kg net - 80 drums per FCL)",
      "Bulk Vessel Chartering (3,000 MT – 10,000 MT parcels)",
    ],
    documents: [
      { title: "Base Oil SN 150 Technical Data Sheet (TDS)", type: "PDF", size: "240 KB", url: "/docs/product-list.pdf" },
      { title: "Base Oil SN 500 Technical Data Sheet (TDS)", type: "PDF", size: "245 KB", url: "/docs/product-list.pdf" },
      { title: "Bright Stock BS 150 Specification Sheet", type: "PDF", size: "220 KB", url: "/docs/product-list.pdf" },
      { title: "Group I Base Oil Safety Data Sheet (SDS)", type: "PDF", size: "510 KB", url: "/docs/product-list.pdf" },
    ],
  },

  bitumen: {
    slug: "bitumen",
    name: "Penetration Grade Asphalt Bitumen (60/70 & 80/100)",
    tagline: "High-grade vacuum bottoms petroleum bitumen for highway construction, asphalt paving, and waterproofing membranes.",
    distillationTemp: "> 550°C",
    imageSrc: "/images/products/bitumen.jpg",
    imageAlt: "Fresh black asphalt bitumen paving surface layer",
    imageCaption: "Penetration grade 60/70 asphalt binder application for road paving.",
    msdsUrl: "/docs/msds/bitumen.pdf",
    gradeGroups: [
      {
        grades: [
          { name: "Bitumen 60/70", pdfUrl: "/docs/coa/bitumen-60-70.pdf" },
          { name: "Bitumen 80/100", pdfUrl: "/docs/coa/bitumen-80-100.pdf" },
          { name: "Bitumen 85/25", pdfUrl: "/docs/coa/bitumen-85-25.pdf" },
          { name: "Bitumen 90/40", pdfUrl: "/docs/coa/bitumen-90-40.pdf" },
        ],
      },
    ],
    introParagraphs: [
      "Hamburg Refined Oil Products Trading LLC supplies premium penetration grade petroleum bitumen manufactured from vacuum distillation residue. Our bitumen grades 60/70 and 80/100 adhere to international EN 12591 and ASTM D946 standards.",
      "Recognized for superior viscoelastic properties, temperature susceptibility, and weather resistance, our asphalt bitumen is utilized extensively in heavy highway paving, airport runway construction, roofing felt manufacturing, and industrial waterproofing applications.",
    ],
    specTables: [
      {
        label: "PENETRATION GRADE BITUMEN TYPICAL SPECIFICATIONS",
        columns: [
          { key: "parameter", header: "Test Parameter" },
          { key: "method", header: "ASTM / EN Method" },
          { key: "bitumen6070", header: "Bitumen 60/70" },
          { key: "bitumen80100", header: "Bitumen 80/100" },
        ],
        rows: [
          { parameter: "Penetration @ 25°C (0.1 mm)", method: "ASTM D5 / EN 1426", bitumen6070: "60 – 70", bitumen80100: "80 – 100" },
          { parameter: "Softening Point (°C)", method: "ASTM D36 / EN 1427", bitumen6070: "49 – 56 °C", bitumen80100: "45 – 52 °C" },
          { parameter: "Ductility @ 25°C (cm)", method: "ASTM D113 / EN 13398", bitumen6070: "Min 100 cm", bitumen80100: "Min 100 cm" },
          { parameter: "Flash Point (Cleveland Open Cup)", method: "ASTM D92 / EN ISO 2592", bitumen6070: "Min 250 °C", bitumen80100: "Min 230 °C" },
          { parameter: "Solubility in Trichloroethylene (%)", method: "ASTM D2042 / EN 12592", bitumen6070: "Min 99.5 %", bitumen80100: "Min 99.5 %" },
          { parameter: "Specific Gravity @ 25°C", method: "ASTM D70 / EN 15326", bitumen6070: "1.01 – 1.06", bitumen80100: "1.01 – 1.05" },
          { parameter: "Loss on Heating (% wt)", method: "ASTM D6 / EN 13302", bitumen6070: "Max 0.2 %", bitumen80100: "Max 0.5 %" },
        ],
      },
    ],
    applications: [
      "Highway binder course and wearing course asphalt paving",
      "Airport runway construction and heavy vehicle logistics corridors",
      "Waterproofing felt membranes and roofing sealants",
      "Bituminous emulsions and cutback asphalt primers",
    ],
    packingOptions: [
      "New Steel Drums (150 kg / 180 kg net weight)",
      "Polybag / Jumbo Bags (300 kg / 1000 kg cold melt bags)",
      "Bitutainers / Heated ISO Tank Containers (20 – 24 MT)",
      "Bulk Liquid Bitumen Tankers (direct hot discharge)",
    ],
    documents: [
      { title: "Bitumen 60/70 Technical Data Sheet (TDS)", type: "PDF", size: "215 KB", url: "/docs/product-list.pdf" },
      { title: "Bitumen 80/100 Technical Data Sheet (TDS)", type: "PDF", size: "210 KB", url: "/docs/product-list.pdf" },
      { title: "Bitumen Quality Assurance & ISO Certificate", type: "PDF", size: "380 KB", url: "/docs/product-list.pdf" },
      { title: "Bitumen Safety Data Sheet (SDS)", type: "PDF", size: "490 KB", url: "/docs/product-list.pdf" },
    ],
  },

  "fuel-oil": {
    slug: "fuel-oil",
    name: "Marine & Industrial Fuel Oil (180 cSt & 380 cSt)",
    tagline: "Heavy residual fuel oils for commercial marine bunkering, industrial boilers, and thermal power generation.",
    distillationTemp: "350°C – 650°C",
    imageSrc: "/images/products/fuel-oil.jpg",
    imageAlt: "Heavy fuel oil terminal pipeline manifold and loading arm",
    imageCaption: "High-flow pipeline manifold for CST 180 and CST 380 marine fuel loading.",
    msdsUrl: "/docs/msds/fuel-oil.pdf",
    gradeGroups: [
      {
        grades: [
          { name: "Fuel Oil 180 cSt", pdfUrl: "/docs/coa/fuel-oil-180.pdf" },
          { name: "Fuel Oil 380 cSt", pdfUrl: "/docs/coa/fuel-oil-380.pdf" },
        ],
      },
    ],
    introParagraphs: [
      "Hamburg Refined Oil Products Trading LLC trades heavy residual fuel oils including Fuel Oil 180 cSt and Fuel Oil 380 cSt conforming to ISO 8217 RMG/RMK specifications.",
      "Processed from atmospheric and vacuum distillation bottoms, our heavy fuel oils deliver high calorific density, controlled kinematic viscosity, and low ash content for commercial shipping fleets, utility power plants, and heavy manufacturing furnaces.",
    ],
    specTables: [
      {
        label: "HEAVY FUEL OIL (180 cSt & 380 cSt) TYPICAL SPECIFICATIONS",
        columns: [
          { key: "parameter", header: "Test Parameter" },
          { key: "method", header: "ISO / ASTM Method" },
          { key: "fo180", header: "Fuel Oil 180 cSt" },
          { key: "fo380", header: "Fuel Oil 380 cSt" },
        ],
        rows: [
          { parameter: "Kinematic Viscosity @ 50°C", method: "ISO 3104 / ASTM D445", fo180: "Max 180 cSt", fo380: "Max 380 cSt" },
          { parameter: "Density @ 15°C (kg/m³)", method: "ISO 3675 / ASTM D4052", fo180: "Max 991.0", fo380: "Max 991.0" },
          { parameter: "Flash Point (Pensky-Martens)", method: "ISO 2719 / ASTM D93", fo180: "Min 60.0 °C", fo380: "Min 60.0 °C" },
          { parameter: "Pour Point (Upper)", method: "ISO 3016 / ASTM D97", fo180: "Max 30 °C", fo380: "Max 30 °C" },
          { parameter: "Sulfur Content (% m/m)", method: "ISO 8754 / ASTM D4294", fo180: "Max 3.5 % / Low S 0.5%", fo380: "Max 3.5 % / Low S 0.5%" },
          { parameter: "Water Content (% v/v)", method: "ISO 3733 / ASTM D95", fo180: "Max 0.5 %", fo380: "Max 0.5 %" },
          { parameter: "Micro Carbon Residue (% m/m)", method: "ISO 10370 / ASTM D4530", fo180: "Max 15.0 %", fo380: "Max 18.0 %" },
          { parameter: "Gross Specific Energy (MJ/kg)", method: "ASTM D240", fo180: "Typ 40.5 MJ/kg", fo380: "Typ 40.2 MJ/kg" },
        ],
      },
    ],
    applications: [
      "Commercial marine bunkering for ocean vessels and tug fleets",
      "Industrial thermal power plants and steam boiler installations",
      "Cement kiln firing and glass furnace combustion systems",
      "Asphalt hot-mix plant burners and industrial driers",
    ],
    packingOptions: [
      "Bulk Vessel Chartering (5,000 MT – 30,000 MT tankers)",
      "Bunker Barge Transfer (direct ship-to-ship refuels)",
      "Flexitanks in 20ft Containers (approx 20.0 MT)",
      "Bulk Road Tankers (for industrial plant deliveries)",
    ],
    documents: [
      { title: "Marine Fuel Oil 180 cSt Spec Sheet (ISO 8217)", type: "PDF", size: "230 KB", url: "/docs/product-list.pdf" },
      { title: "Heavy Fuel Oil 380 cSt Spec Sheet (ISO 8217)", type: "PDF", size: "235 KB", url: "/docs/product-list.pdf" },
      { title: "Bunker Quality Compliance Certificate", type: "PDF", size: "340 KB", url: "/docs/product-list.pdf" },
      { title: "Heavy Fuel Oil Safety Data Sheet (SDS)", type: "PDF", size: "520 KB", url: "/docs/product-list.pdf" },
    ],
  },

  "gas-oil": {
    slug: "gas-oil",
    name: "Gas Oil D2 & Ultra-Low Sulfur Diesel (10 PPM)",
    tagline: "High-cetane distillate diesel fuel for commercial transportation, heavy plant machinery, and marine engines.",
    distillationTemp: "180°C – 360°C",
    imageSrc: "/images/products/gas-oil.jpg",
    imageAlt: "Gulf refinery gas oil storage tanks and distribution pipework",
    imageCaption: "10PPM ULSD and gas oil D2 bulk storage at Gulf refining facility.",
    msdsUrl: "/docs/msds/gas-oil.pdf",
    gradeGroups: [
      {
        grades: [
          { name: "Gas Oil D2", pdfUrl: "/docs/coa/gas-oil-d2.pdf" },
          { name: "10PPM ULSD", pdfUrl: "/docs/coa/10ppm-ulsd.pdf" },
          { name: "500PPM Gas Oil", pdfUrl: "/docs/coa/500ppm-gas-oil.pdf" },
        ],
      },
    ],
    introParagraphs: [
      "Hamburg Refined Oil Products Trading LLC supplies Gas Oil D2 (L-0.2-62 / GO 0.2) and Ultra-Low Sulfur Diesel (ULSD 10PPM) meeting EN 590 and ASTM D975 specifications.",
      "Derived from middle distillate hydrotreating, our gas oil features high cetane index, superior cold filter plugging point (CFPP), and optimal lubricity to ensure peak combustion efficiency and low emissions in diesel engines.",
    ],
    specTables: [
      {
        label: "GAS OIL D2 & ULSD 10PPM TYPICAL SPECIFICATIONS",
        columns: [
          { key: "parameter", header: "Test Parameter" },
          { key: "method", header: "EN / ASTM Method" },
          { key: "ulsd10", header: "ULSD 10 PPM" },
          { key: "gasoilD2", header: "Gas Oil D2" },
        ],
        rows: [
          { parameter: "Density @ 15°C (g/cm³)", method: "EN ISO 12185 / ASTM D4052", ulsd10: "0.820 – 0.845", gasoilD2: "0.820 – 0.860" },
          { parameter: "Kinematic Viscosity @ 40°C", method: "EN ISO 3104 / ASTM D445", ulsd10: "2.00 – 4.50 cSt", gasoilD2: "2.00 – 5.50 cSt" },
          { parameter: "Cetane Index", method: "EN ISO 4264 / ASTM D976", ulsd10: "Min 51.0", gasoilD2: "Min 48.0" },
          { parameter: "Flash Point (PMCC)", method: "EN ISO 2719 / ASTM D93", ulsd10: "Min 55.0 °C", gasoilD2: "Min 62.0 °C" },
          { parameter: "Sulfur Content (mg/kg)", method: "EN ISO 20846 / ASTM D5453", ulsd10: "Max 10 PPM", gasoilD2: "Max 0.2 % (2000 PPM)" },
          { parameter: "Water & Sediment (% vol)", method: "ASTM D2709", ulsd10: "Max 0.05 %", gasoilD2: "Max 0.05 %" },
          { parameter: "Copper Strip Corrosion (3h @ 50°C)", method: "EN ISO 2160 / ASTM D130", ulsd10: "Class 1a", gasoilD2: "Class 1a" },
        ],
      },
    ],
    applications: [
      "Highway commercial trucks, bus fleets, and passenger diesel vehicles",
      "Off-highway construction machinery and mining equipment",
      "Stationary emergency power generators and industrial pumps",
      "High-speed marine diesel engines and harbor craft",
    ],
    packingOptions: [
      "Bulk Tanker Vessels (5,000 MT – 25,000 MT parcels)",
      "Road Tanker Trucks (10,000 L – 40,000 L direct delivery)",
      "ISO Tank Containers (24,000 L capacity)",
      "New Steel Drums (208 L capacity for remote sites)",
    ],
    documents: [
      { title: "ULSD 10PPM Technical Data Sheet (EN 590)", type: "PDF", size: "225 KB", url: "/docs/product-list.pdf" },
      { title: "Gas Oil D2 Specification Sheet", type: "PDF", size: "220 KB", url: "/docs/product-list.pdf" },
      { title: "Diesel Fuel Laboratory Certificate of Analysis", type: "PDF", size: "310 KB", url: "/docs/product-list.pdf" },
      { title: "Gas Oil Safety Data Sheet (SDS)", type: "PDF", size: "480 KB", url: "/docs/product-list.pdf" },
    ],
  },

  grease: {
    slug: "grease",
    name: "Lithium Complex Industrial Greases (NLGI 2 & NLGI 3)",
    tagline: "Extreme pressure lithium complex thickener greases for heavy industrial bearings, automotive chassis, and high-temp plant machinery.",
    distillationTemp: "350°C – 500°C",
    imageSrc: "/images/products/grease.jpg",
    imageAlt: "High-temperature lithium complex grease applied to industrial bearings",
    imageCaption: "Extreme-pressure NLGI Grade 2 lithium grease formulation.",
    msdsUrl: "/docs/msds/grease.pdf",
    gradeGroups: [
      {
        grades: [
          { name: "NLGI 1 Lithium EP", pdfUrl: "/docs/coa/nlgi-1.pdf" },
          { name: "NLGI 2 Lithium EP", pdfUrl: "/docs/coa/nlgi-2.pdf" },
          { name: "NLGI 3 Lithium EP", pdfUrl: "/docs/coa/nlgi-3.pdf" },
        ],
      },
    ],
    introParagraphs: [
      "Hamburg Refined Oil Products Trading LLC manufactures and distributes high-performance multi-purpose lithium complex greases formulated with high VI mineral base oils and extreme pressure (EP) additives.",
      "Available in NLGI 2 and NLGI 3 consistency grades, our industrial greases deliver exceptional mechanical shear stability, water washout resistance, and drop points exceeding 260°C for severe operating environments.",
    ],
    specTables: [
      {
        label: "LITHIUM COMPLEX EP GREASE (NLGI 2 & 3) TYPICAL SPECIFICATIONS",
        columns: [
          { key: "parameter", header: "Test Parameter" },
          { key: "method", header: "ASTM Method" },
          { key: "nlgi2", header: "NLGI Grade 2" },
          { key: "nlgi3", header: "NLGI Grade 3" },
        ],
        rows: [
          { parameter: "Thickener Type", method: "Visual / Lab", nlgi2: "Lithium Complex", nlgi3: "Lithium Complex" },
          { parameter: "Worked Penetration @ 25°C (0.1 mm)", method: "ASTM D217", nlgi2: "265 – 295", nlgi3: "220 – 250" },
          { parameter: "Dropping Point (°C)", method: "ASTM D2265", nlgi2: "Min 260 °C", nlgi3: "Min 260 °C" },
          { parameter: "Base Oil Viscosity @ 40°C", method: "ASTM D445", nlgi2: "180 – 220 cSt", nlgi3: "180 – 220 cSt" },
          { parameter: "Four Ball Weld Load (kgf)", method: "ASTM D2596", nlgi2: "Min 250 kgf", nlgi3: "Min 250 kgf" },
          { parameter: "Water Washout @ 79°C (% wt)", method: "ASTM D1264", nlgi2: "Max 5.0 %", nlgi3: "Max 3.0 %" },
          { parameter: "Operating Temperature Range", method: "Standard", nlgi2: "-20°C to +160°C", nlgi3: "-20°C to +160°C" },
        ],
      },
    ],
    applications: [
      "Heavy industrial wheel bearings and conveyor drive assemblies",
      "Steel mill rolling equipment and paper mill wet-end machinery",
      "Earthmoving construction equipment, excavators, and agricultural tractors",
      "Automotive chassis lubrication points and universal joints",
    ],
    packingOptions: [
      "Steel Drums (180 kg net weight)",
      "Plastic Pails / Buckets (15 kg / 18 kg net)",
      "Cartridges (400g standard grease gun tubes - 24 per box)",
      "Bulk Tote Tanks / Fluid Kegs (900 kg bulk tote)",
    ],
    documents: [
      { title: "Lithium EP 2 Grease Technical Data Sheet (TDS)", type: "PDF", size: "205 KB", url: "/docs/product-list.pdf" },
      { title: "Lithium EP 3 Grease Technical Data Sheet (TDS)", type: "PDF", size: "200 KB", url: "/docs/product-list.pdf" },
      { title: "Industrial Grease Compatibility Chart", type: "PDF", size: "360 KB", url: "/docs/product-list.pdf" },
      { title: "Lubricating Grease Safety Data Sheet (SDS)", type: "PDF", size: "450 KB", url: "/docs/product-list.pdf" },
    ],
  },

  naphtha: {
    slug: "naphtha",
    name: "Virgin Naphtha (Light & Heavy Cut)",
    tagline: "Volatile light petroleum hydrocarbon cuts for petrochemical ethylene cracking and high-octane gasoline reforming.",
    distillationTemp: "30°C – 200°C",
    imageSrc: "/images/products/naphtha.jpg",
    imageAlt: "Petrochemical plant atmospheric distillation towers for virgin naphtha",
    imageCaption: "Primary fractional distillation columns producing light and heavy virgin naphtha.",
    msdsUrl: "/docs/msds/naphtha.pdf",
    gradeGroups: [
      {
        grades: [
          { name: "Light Virgin Naphtha (LVN)", pdfUrl: "/docs/coa/lvn.pdf" },
          { name: "Heavy Virgin Naphtha (HVN)", pdfUrl: "/docs/coa/hvn.pdf" },
        ],
      },
    ],
    introParagraphs: [
      "Hamburg Refined Oil Products Trading LLC trades premium virgin naphtha fractions derived from crude oil atmospheric distillation.",
      "Categorized into Light Virgin Naphtha (LVN) and Heavy Virgin Naphtha (HVN), our naphtha products provide optimal paraffin content for petrochemical steam crackers and high naphthenic values for catalytic reformers.",
    ],
    specTables: [
      {
        label: "VIRGIN NAPHTHA (LIGHT & HEAVY) TYPICAL SPECIFICATIONS",
        columns: [
          { key: "parameter", header: "Test Parameter" },
          { key: "method", header: "ASTM Method" },
          { key: "lvn", header: "Light Naphtha (LVN)" },
          { key: "hvn", header: "Heavy Naphtha (HVN)" },
        ],
        rows: [
          { parameter: "Specific Gravity @ 15°C", method: "ASTM D4052", lvn: "0.650 – 0.700", hvn: "0.720 – 0.760" },
          { parameter: "Initial Boiling Point (IBP)", method: "ASTM D86", lvn: "Typ 35 °C", hvn: "Typ 90 °C" },
          { parameter: "Final Boiling Point (FBP)", method: "ASTM D86", lvn: "Max 115 °C", hvn: "Max 190 °C" },
          { parameter: "Total Paraffins (% vol)", method: "ASTM D6730", lvn: "Min 70 %", hvn: "45 – 55 %" },
          { parameter: "Total Aromatics (% vol)", method: "ASTM D6730", lvn: "Max 5 %", hvn: "10 – 20 %" },
          { parameter: "Total Sulfur (mg/kg)", method: "ASTM D5453", lvn: "Max 50 PPM", hvn: "Max 100 PPM" },
          { parameter: "Reid Vapor Pressure (RVP)", method: "ASTM D323", lvn: "50 – 75 kPa", hvn: "10 – 30 kPa" },
        ],
      },
    ],
    applications: [
      "Petrochemical steam cracker feedstock for ethylene and propylene",
      "Catalytic reformer feed for high-octane gasoline blending",
      "Industrial extraction solvent in rubber and extraction plants",
      "Diluent for heavy crude oil pipeline transportation",
    ],
    packingOptions: [
      "Bulk Parcel Tanker Vessels (10,000 MT – 45,000 MT cargoes)",
      "ISO Tank Containers (hazardous certified 24,000 L)",
      "Specialized Inland Barge Transfer",
    ],
    documents: [
      { title: "Light Virgin Naphtha Technical Data Sheet (TDS)", type: "PDF", size: "210 KB", url: "/docs/product-list.pdf" },
      { title: "Heavy Virgin Naphtha Technical Data Sheet (TDS)", type: "PDF", size: "215 KB", url: "/docs/product-list.pdf" },
      { title: "Naphtha Chemical Composition Analysis", type: "PDF", size: "390 KB", url: "/docs/product-list.pdf" },
      { title: "Virgin Naphtha Safety Data Sheet (SDS)", type: "PDF", size: "470 KB", url: "/docs/product-list.pdf" },
    ],
  },

  "rubber-process-oil": {
    slug: "rubber-process-oil",
    name: "Rubber Process Oil (RPO Aromatic & Paraffinic)",
    tagline: "Specialized elastomer extenders and plasticizer oils for tire manufacturing, rubber compounds, and technical polymer processing.",
    distillationTemp: "320°C – 520°C",
    imageSrc: "/images/products/rubber-process-oil.jpg",
    imageAlt: "Industrial tyre vulcanization and rubber compound manufacturing",
    imageCaption: "Aromatic and paraffinic rubber process oil blending for tire manufacturing.",
    msdsUrl: "/docs/msds/rubber-process-oil.pdf",
    gradeGroups: [
      {
        grades: [
          { name: "RPO Aromatic (TDAE)", pdfUrl: "/docs/coa/rpo-aromatic.pdf" },
          { name: "RPO Heavy Paraffinic (140)", pdfUrl: "/docs/coa/rpo-paraffinic.pdf" },
        ],
      },
    ],
    introParagraphs: [
      "Hamburg Refined Oil Products Trading LLC supplies specialized Rubber Process Oils (RPO) formulated to improve workability, elasticity, and compounding performance in natural and synthetic rubber formulations.",
      "Our RPO range includes High Aromatic (RPO 110 / TDAE) and Heavy Paraffinic (RPO 140) process oils, providing excellent solvency with polymers, low PCA content, and optimal flash point safety.",
    ],
    specTables: [
      {
        label: "RUBBER PROCESS OIL (RPO) TYPICAL SPECIFICATIONS",
        columns: [
          { key: "parameter", header: "Test Parameter" },
          { key: "method", header: "ASTM Method" },
          { key: "rpoAromatic", header: "RPO Aromatic (TDAE)" },
          { key: "rpoParaffinic", header: "RPO Paraffinic" },
        ],
        rows: [
          { parameter: "Kinematic Viscosity @ 100°C", method: "ASTM D445", rpoAromatic: "18.0 – 24.0 cSt", rpoParaffinic: "10.0 – 15.0 cSt" },
          { parameter: "Kinematic Viscosity @ 40°C", method: "ASTM D445", rpoAromatic: "380 – 500 cSt", rpoParaffinic: "90 – 120 cSt" },
          { parameter: "Flash Point (COC)", method: "ASTM D92", rpoAromatic: "Min 220 °C", rpoParaffinic: "Min 230 °C" },
          { parameter: "Pour Point", method: "ASTM D97", rpoAromatic: "Max +27 °C", rpoParaffinic: "Max -6 °C" },
          { parameter: "Specific Gravity @ 15°C", method: "ASTM D4052", rpoAromatic: "0.940 – 0.980", rpoParaffinic: "0.875 – 0.895" },
          { parameter: "Aniline Point (°C)", method: "ASTM D611", rpoAromatic: "40 – 60 °C", rpoParaffinic: "95 – 110 °C" },
          { parameter: "Polycyclic Aromatics (PCA)", method: "IP 346", rpoAromatic: "Max 3.0 % wt", rpoParaffinic: "Max 1.0 % wt" },
        ],
      },
    ],
    applications: [
      "Automotive tire tread compounding and retread vulcanization",
      "Conveyor belts, industrial hose, and rubber footwear manufacturing",
      "Ethylene Propylene Diene Monomer (EPDM) weatherstrip extrusion",
      "Plastisols, adhesive sealants, and molded rubber technical parts",
    ],
    packingOptions: [
      "Flexitanks in 20ft Containers (approx 21.0 MT)",
      "New Steel Drums (208 L / 200 kg net weight)",
      "ISO Tank Containers (approx 24.0 MT)",
      "Bulk Tanker Truck Direct Discharge",
    ],
    documents: [
      { title: "RPO Aromatic Technical Data Sheet (TDS)", type: "PDF", size: "230 KB", url: "/docs/product-list.pdf" },
      { title: "RPO Paraffinic Technical Data Sheet (TDS)", type: "PDF", size: "225 KB", url: "/docs/product-list.pdf" },
      { title: "Polycyclic Aromatic (PCA) Compliance Report", type: "PDF", size: "320 KB", url: "/docs/product-list.pdf" },
      { title: "Rubber Process Oil Safety Data Sheet (SDS)", type: "PDF", size: "490 KB", url: "/docs/product-list.pdf" },
    ],
  },

  "hydrocarbon-oil": {
    slug: "hydrocarbon-oil",
    name: "Industrial Hydrocarbon Solvents & Distillates",
    tagline: "High-purity aliphatic and aromatic hydrocarbon cuts for industrial cleaning, chemical synthesis, and formulation solvents.",
    distillationTemp: "150°C – 300°C",
    imageSrc: "/images/products/hydrocarbon-oil.jpg",
    imageAlt: "Industrial chemical pipe rack and solvent drum storage",
    imageCaption: "White spirit and aliphatic hydrocarbon solvent drum storage.",
    msdsUrl: "/docs/msds/hydrocarbon-oil.pdf",
    gradeGroups: [
      {
        grades: [
          { name: "White Spirit / D40", pdfUrl: "/docs/coa/white-spirit-d40.pdf" },
          { name: "Solvent C9 / Aromatic", pdfUrl: "/docs/coa/solvent-c9.pdf" },
        ],
      },
    ],
    introParagraphs: [
      "Hamburg Refined Oil Products Trading LLC distributes refined industrial hydrocarbon solvents and special boiling point (SBP) distillates formulated for precision industrial applications.",
      "Characterized by narrow boiling ranges, controlled aromatic content, and zero residue on evaporation, our hydrocarbon oils serve paint formulators, adhesive manufacturers, and industrial degreasing operations.",
    ],
    specTables: [
      {
        label: "HYDROCARBON SOLVENT & DISTILLATE TYPICAL SPECIFICATIONS",
        columns: [
          { key: "parameter", header: "Test Parameter" },
          { key: "method", header: "ASTM Method" },
          { key: "whiteSpirit", header: "White Spirit / D40" },
          { key: "solvent100", header: "Solvent C9 / Aromatic" },
        ],
        rows: [
          { parameter: "Specific Gravity @ 15°C", method: "ASTM D4052", whiteSpirit: "0.775 – 0.795", solvent100: "0.865 – 0.885" },
          { parameter: "Initial Boiling Point (IBP)", method: "ASTM D86", whiteSpirit: "Min 145 °C", solvent100: "Min 155 °C" },
          { parameter: "Final Boiling Point (FBP)", method: "ASTM D86", whiteSpirit: "Max 205 °C", solvent100: "Max 180 °C" },
          { parameter: "Flash Point (Tag Closed Cup)", method: "ASTM D56", whiteSpirit: "Min 38 °C", solvent100: "Min 42 °C" },
          { parameter: "Aromatic Content (% vol)", method: "ASTM D1319", whiteSpirit: "Max 18 % / Low Aromatic <0.5%", solvent100: "Min 98 %" },
          { parameter: "Kauri-Butanol Value (KB)", method: "ASTM D1133", whiteSpirit: "35 – 45", solvent100: "Min 90" },
          { parameter: "Evaporation Rate (n-BuAc=1)", method: "ASTM D3539", whiteSpirit: "Typ 0.12", solvent100: "Typ 0.20" },
        ],
      },
    ],
    applications: [
      "Architectural paints, industrial coatings, and enamel lacquers",
      "Printing ink formulations and textile printing solvents",
      "Metal surface degreasing and precision parts cleaning",
      "Adhesives, sealants, and pesticide emulsifiable concentrates",
    ],
    packingOptions: [
      "New Steel Drums (208 L / 165 kg net weight)",
      "IBC Tote Containers (1,000 L capacity)",
      "ISO Tank Containers (approx 20.0 MT)",
      "Bulk Tanker Delivery for regional clients",
    ],
    documents: [
      { title: "White Spirit Technical Data Sheet (TDS)", type: "PDF", size: "215 KB", url: "/docs/product-list.pdf" },
      { title: "Solvent C9 Aromatic Spec Sheet", type: "PDF", size: "220 KB", url: "/docs/product-list.pdf" },
      { title: "Hydrocarbon Solvent Purity Certification", type: "PDF", size: "330 KB", url: "/docs/product-list.pdf" },
      { title: "Hydrocarbon Oil Safety Data Sheet (SDS)", type: "PDF", size: "475 KB", url: "/docs/product-list.pdf" },
    ],
  },
};
