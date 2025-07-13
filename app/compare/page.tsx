// // File: app/compare/page.tsx
// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function ComparePage() {
//   const [car1Input, setCar1Input] = useState('');
//   const [car2Input, setCar2Input] = useState('');
//   const [comparisonResult, setComparisonResult] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleCompare = async () => {
//     setLoading(true);
//     setComparisonResult(null);
//     try {
//       const res = await fetch("/api/compare-cars", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ car1: car1Input, car2: car2Input })
//       });
//       const data = await res.json();
//       setComparisonResult(data.result);
//     } catch (error) {
//       setComparisonResult("Failed to compare cars. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container py-10 space-y-6">
//       <h1 className="text-2xl font-bold">Compare Cars</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Input value={car1Input} onChange={(e) => setCar1Input(e.target.value)} placeholder="Enter first car details (e.g. Maruti Suzuki Swift VDI Diesel)" />
//         <Input value={car2Input} onChange={(e) => setCar2Input(e.target.value)} placeholder="Enter second car details (e.g. Hyundai i20 Sportz Petrol)" />
//       </div>
//       <Button className="mt-4" onClick={handleCompare} disabled={loading}>
//         {loading ? "Comparing..." : "Compare"}
//       </Button>
//       <Card className="mt-6">
//         <CardContent className="p-4 whitespace-pre-line">
//           {comparisonResult || "Comparison result will appear here."}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


// File: app/compare/page.tsx
// "use client";

// import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export default function ComparePage() {
//   const [car1Input, setCar1Input] = useState('');
//   const [car2Input, setCar2Input] = useState('');
//   const [comparisonResult, setComparisonResult] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleCompare = async () => {
//     setLoading(true);
//     setComparisonResult(null);
//     try {
//       const res = await fetch("/api/compare-cars", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ car1: car1Input, car2: car2Input })
//       });
//       const data = await res.json();
//       setComparisonResult(data.result);
//     } catch (error) {
//       setComparisonResult("Failed to compare cars. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const sections = [
//     "Overview",
//     "Engine & Performance",
//     "Features & Comfort",
//     "Fuel Efficiency",
//     "Model Available with Sunroof",
//     "Price On Road Delhi and off Road",
//     "Model",
//     "BodyType",
//     "Variants Available",
//     "Minimum DownPayment Must Have",
//     "Fuel Available",
//     "Transmission Available",
//     "Color Available",
//     "Mileage",
//     "Engine",
//     "Seating Capacity",
//     "MaxPower and MaxTorque",
//     "Specifications",
//     "Ground Clearance, BootSpace, SeatCapacity",
//     "Value for Money",
//     "Final Recommendation"
//   ];

//   // const parseSectionTable = (title: string, text: string) => {
//     const regex = new RegExp(`\\*\\*${title}\\*\\*[:\\n]*([\\s\\S]*?)(?=(\\*\\*|$))`, 'i');

//     const match = text.match(regex);
//     if (!match) return "No data available.";

//     const lines = match[1]
//       .trim()
//       .split("\n")
//       .filter(line => line.trim());

//     const rows = [];
//     let currentRow: string[] = [];
//     lines.forEach(line => {
//       if (line.startsWith("* **")) {
//         if (currentRow.length) rows.push(currentRow);
//         currentRow = [line.replace("* **", "").replace("**:", "").replace("**", "").trim()];
//       } else if (line.startsWith("*")) {
//         currentRow.push(line.replace("*", "").trim());
//       }
//     });
//     if (currentRow.length) rows.push(currentRow);

//     return (
//       <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
//         <thead>
//           <tr>
//             <th className="border border-gray-300 px-2 py-1 text-left">Model</th>
//             <th className="border border-gray-300 px-2 py-1 text-left">Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rows.map((row, index) => (
//             <tr key={index}>
//               <td className="border border-gray-300 px-2 py-1 font-medium">{row[0]}</td>
//               <td className="border border-gray-300 px-2 py-1">{row.slice(1).join(" ")}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };

//   return (
//     <div className="container py-10 space-y-6">
//       <h1 className="text-2xl font-bold">Compare Cars</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Input value={car1Input} onChange={(e) => setCar1Input(e.target.value)} placeholder="Enter first car details (e.g. Maruti Suzuki Swift VDI Diesel)" />
//         <Input value={car2Input} onChange={(e) => setCar2Input(e.target.value)} placeholder="Enter second car details (e.g. Hyundai i20 Sportz Petrol)" />
//       </div>
//       <Button className="mt-4" onClick={handleCompare} disabled={loading}>
//         {loading ? "Comparing..." : "Compare"}
//       </Button>
//       {comparisonResult && (
//         <Tabs defaultValue="Overview" className="mt-6">
//           <TabsList className="flex flex-wrap gap-2">
//             {sections.map(section => (
//               <TabsTrigger key={section} value={section}>{section}</TabsTrigger>
//             ))}
//           </TabsList>
//           {sections.map(section => (
//             <TabsContent key={section} value={section}>
//               <Card className="mt-4">
//                 <CardContent className="p-4 space-y-2">
//                   <h2 className="text-lg font-semibold">{section}</h2>
//                   <div className="overflow-auto">{comparisonResult}</div>
//                 </CardContent>
//               </Card>
//             </TabsContent>
//           ))}
//         </Tabs>
//       )}
//     </div>
//   );
// }


