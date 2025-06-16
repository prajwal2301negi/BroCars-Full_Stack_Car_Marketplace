// // File: app/api/compare-cars/route.ts
// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");


// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// await main();


// export async function POST(req: Request) {
//   try {
//     const { car1, car2 } = await req.json();

//     const prompt = `
// You are an automotive expert. Compare the following two cars based on their brand, model, variant, fuel type, transmission, engine, mileage, body type, price, seating, and features.

// Car 1:
// ${car1}

// Car 2:
// ${car2}

// Give the comparison in a clear bullet-point format under the following headers:
// 1. Overview
// 2. Performance
// 3. Comfort & Features
// 4. Value for Money
// 5. Final Recommendation (optional)
// `;

//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();

//     return NextResponse.json({ result: text });
//   } catch (err) {
//     console.error("Gemini API error:", err);
//     return NextResponse.json({ result: "Comparison failed. Please try again." }, { status: 500 });
//   }
// }


// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// main();

import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!, // Use env variable for safety
});

export async function POST(req: Request) {
  try {
    const { car1, car2 } = await req.json();

    const prompt = `
You are an automotive expert. Compare these two cars in detail:
Car 1: ${car1}
Car 2: ${car2}

Compare them under the following sections:
1. Overview
2. Engine & Performance
3. Features & Comfort
4. Fuel Efficiency
5. Model Available with Sunroof
6. Price On Road Delhi and off Road
7. Model
8. BodyType
9. Variants Available
10. Minimum DownPayment Must Have
11. Fuel Available
12. Transmission Available
13. "Color Available
14. "Mileage
15. "Engine
16. "Seating Capacity
17. "MaxPower and MaxTorque
18. "Specifications
19. "Ground Clearance, BootSpace, SeatCapacity
20. Value for Money
21. Final Recommendation

Use a friendly yet informative tone. Use bullet points where needed.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an expert car reviewer named AutoBot.",
      },
    });

    return NextResponse.json({ result: response.text });
  } catch (error) {
    console.error("Gemini comparison error:", error);
    return NextResponse.json(
      { result: "An error occurred while generating the comparison." },
      { status: 500 }
    );
  }
}
