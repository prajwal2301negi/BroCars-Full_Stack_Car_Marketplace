
// // 'use client';

// // import { useState } from 'react';
// // import axios from 'axios';
// // import { useSearchParams } from 'next/navigation';
// // import {toast} from 'react-toastify'
// // import { useRouter } from 'next/navigation';

// // export default function ListCar2Page() {
// //   const searchParams = useSearchParams();
// //   const make = searchParams.get('make');
// //   const model = searchParams.get('model');

// //   const router = useRouter()


// //   const [price, setPrice] = useState('')
// //   const [fuel, setFuel] = useState('')
// //   const [transmission, setTransmission] = useState('')
// //   const[kms, setKms] = useState('')
// //   const[location, setLocation] = useState('')
// //   const[owner, setOwner] = useState('')
// //   const[color, setColor] = useState('')
// //   const[bodyType, setBodyType] = useState('')

  

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

  
// //       try {
// //         const response = await axios.put(
// //           `http://localhost:4000/api/v1/car/listCar2?make=${make}&model=${model}`,
// //           { price, fuel, transmission, kms, location, owner, color, bodyType },
// //           {
// //             withCredentials: true,
// //             headers: { "Content-Type": "application/json" },
// //           }
// //         );

        
// //         toast.success("Car Details listed successfully");
// //         router.push(`/sell-car3?make=${make}&model=${model}&location=${encodeURIComponent(location)}`);
        
// //       } catch (err) {
// //         toast.error("Problem logging in User");
// //         console.log(err);
// //       }
    
// //   };

// //   return (
// //     <div className="container mx-auto p-6 max-w-xl">
// //       <h1 className="text-2xl font-bold mb-4">List Your Car Details</h1>

// //       <form onSubmit={handleSubmit} className="space-y-4">
      
// //         <input name="fuel" placeholder="Fuel Type" value={fuel} onChange={(e)=>setFuel(e.target.value)} className="w-full p-2 border" required />

// //         <input name="price" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} className="w-full p-2 border" required />

// //         <input name="transmission" placeholder="Transmission" value={transmission} onChange={(e)=>setTransmission(e.target.value)} className="w-full p-2 border" required />

// //         <input name="kms" placeholder="Kilometers Driven" value={kms} onChange={(e)=>setKms(e.target.value)} className="w-full p-2 border" required />

// //         <input name="location" placeholder="Location" value={location} onChange={(e)=>setLocation(e.target.value)} className="w-full p-2 border" required />

// //         <input name="owner" placeholder="Owner" value={owner} onChange={(e)=>setOwner(e.target.value)} className="w-full p-2 border" required />

// //         <input name="color" placeholder="Color" value={color} onChange={(e)=>setColor(e.target.value)} className="w-full p-2 border" required />

// //         <input name="bodyType" placeholder="Body Type" value={bodyType} onChange={(e)=>setBodyType(e.target.value)} className="w-full p-2 border" required />

// //         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">List Car</button>
// //       </form>

// //       {/* {message && (
// //         <div className="mt-4 p-2 bg-gray-100 border border-gray-300 text-center text-sm text-gray-700">
// //           {message}
// //         </div>
// //       )} */}
// //     </div>
// //   );
// // }


// 'use client';

// import { useState } from 'react';
// import { useSearchParams, useRouter } from 'next/navigation';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";

// export default function ListCar2Page() {
//   const searchParams = useSearchParams();
//   const make = searchParams.get('make');
//   const model = searchParams.get('model');

//   const router = useRouter();

//   const [price, setPrice] = useState('');
//   const [fuel, setFuel] = useState('');
//   const [transmission, setTransmission] = useState('');
//   const [kms, setKms] = useState('');
//   const [location, setLocation] = useState('');
//   const [owner, setOwner] = useState('');
//   const [color, setColor] = useState('');
//   const [bodyType, setBodyType] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       await axios.put(
//         `https://brocarsserver.onrender.com/api/v1/car/listCar2?make=${make}&model=${model}`,
//         { price, fuel, transmission, kms, location, owner, color, bodyType },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       toast.success("Car details listed successfully");
//       router.push(`/sell-car3?make=${make}&model=${model}&location=${encodeURIComponent(location)}`);
//     } catch (err) {
//       toast.error("Problem listing car details");
//       console.error(err);
//     }
//   };

//   return (
//     <Card className="max-w-2xl mx-auto mt-10">
//       <CardHeader>
//         <CardTitle>Car Specifications</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Fuel Type */}
//           <div>
//             <Label>Fuel Type</Label>
//             <Select value={fuel} onValueChange={setFuel}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select Fuel Type" />
//               </SelectTrigger>
//               <SelectContent>
//                 {["Petrol", "Diesel", "CNG", "Electric", "Hybrid"].map((f) => (
//                   <SelectItem key={f} value={f}>{f}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Price */}
//           <div>
//             <Label>Expected Price (₹)</Label>
//             <Input
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               placeholder="e.g., 650000"
//               required
//             />
//           </div>

//           {/* Transmission */}
//           <div>
//             <Label>Transmission</Label>
//             <Select value={transmission} onValueChange={setTransmission}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select Transmission" />
//               </SelectTrigger>
//               <SelectContent>
//                 {["Manual", "Automatic", "AMT", "CVT"].map((t) => (
//                   <SelectItem key={t} value={t}>{t}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Kilometers Driven */}
//           <div>
//             <Label>Kilometers Driven</Label>
//             <Input
//               type="number"
//               value={kms}
//               onChange={(e) => setKms(e.target.value)}
//               placeholder="e.g., 45000"
//               required
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <Label>Location</Label>
//             <Input
//               type="text"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//               placeholder="e.g., Delhi"
//               required
//             />
//           </div>

//           {/* Owner Count */}
//           <div>
//             <Label>Number of Owners</Label>
//             <Select value={owner} onValueChange={setOwner}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select Owner Count" />
//               </SelectTrigger>
//               <SelectContent>
//                 {["1", "2", "3", "4+"].map((count) => (
//                   <SelectItem key={count} value={count}>{count}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Color */}
//           <div>
//             <Label>Color</Label>
//             <Input
//               type="text"
//               value={color}
//               onChange={(e) => setColor(e.target.value)}
//               placeholder="e.g., White"
//               required
//             />
//           </div>

//           {/* Body Type */}
//           <div>
//             <Label>Body Type</Label>
//             <Select value={bodyType} onValueChange={setBodyType}>
//               <SelectTrigger>
//                 <SelectValue placeholder="Select Body Type" />
//               </SelectTrigger>
//               <SelectContent>
//                 {["Hatchback", "Sedan", "SUV", "MUV", "Convertible", "Coupe", "Pickup", "Luxury Sedan", "Luxury SUV"].map((bt) => (
//                   <SelectItem key={bt} value={bt}>{bt}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           {/* Submit Button */}
//           <Button type="submit" className="w-full">
//             List Car Details
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }




// 'use client';

// import { useState } from 'react';
// import axios from 'axios';
// import { useSearchParams } from 'next/navigation';
// import {toast} from 'react-toastify'
// import { useRouter } from 'next/navigation';

// export default function ListCar2Page() {
//   const searchParams = useSearchParams();
//   const make = searchParams.get('make');
//   const model = searchParams.get('model');

//   const router = useRouter()


//   const [price, setPrice] = useState('')
//   const [fuel, setFuel] = useState('')
//   const [transmission, setTransmission] = useState('')
//   const[kms, setKms] = useState('')
//   const[location, setLocation] = useState('')
//   const[owner, setOwner] = useState('')
//   const[color, setColor] = useState('')
//   const[bodyType, setBodyType] = useState('')

  

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

  
//       try {
//         const response = await axios.put(
//           `http://localhost:4000/api/v1/car/listCar2?make=${make}&model=${model}`,
//           { price, fuel, transmission, kms, location, owner, color, bodyType },
//           {
//             withCredentials: true,
//             headers: { "Content-Type": "application/json" },
//           }
//         );

        
//         toast.success("Car Details listed successfully");
//         router.push(`/sell-car3?make=${make}&model=${model}&location=${encodeURIComponent(location)}`);
        
//       } catch (err) {
//         toast.error("Problem logging in User");
//         console.log(err);
//       }
    
//   };

//   return (
//     <div className="container mx-auto p-6 max-w-xl">
//       <h1 className="text-2xl font-bold mb-4">List Your Car Details</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
      
//         <input name="fuel" placeholder="Fuel Type" value={fuel} onChange={(e)=>setFuel(e.target.value)} className="w-full p-2 border" required />

//         <input name="price" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} className="w-full p-2 border" required />

//         <input name="transmission" placeholder="Transmission" value={transmission} onChange={(e)=>setTransmission(e.target.value)} className="w-full p-2 border" required />

//         <input name="kms" placeholder="Kilometers Driven" value={kms} onChange={(e)=>setKms(e.target.value)} className="w-full p-2 border" required />

//         <input name="location" placeholder="Location" value={location} onChange={(e)=>setLocation(e.target.value)} className="w-full p-2 border" required />

//         <input name="owner" placeholder="Owner" value={owner} onChange={(e)=>setOwner(e.target.value)} className="w-full p-2 border" required />

//         <input name="color" placeholder="Color" value={color} onChange={(e)=>setColor(e.target.value)} className="w-full p-2 border" required />

//         <input name="bodyType" placeholder="Body Type" value={bodyType} onChange={(e)=>setBodyType(e.target.value)} className="w-full p-2 border" required />

//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">List Car</button>
//       </form>

//       {/* {message && (
//         <div className="mt-4 p-2 bg-gray-100 border border-gray-300 text-center text-sm text-gray-700">
//           {message}
//         </div>
//       )} */}
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function ListCar2Page() {
  const searchParams = useSearchParams();
  const make = searchParams.get('make');
  const model = searchParams.get('model');
  const sellerDetail = searchParams.get('sellerDetail');

  const router = useRouter();

  const [price, setPrice] = useState('');
  const [fuel, setFuel] = useState('');
  const [transmission, setTransmission] = useState('');
  const [kms, setKms] = useState('');
  const [location, setLocation] = useState('');
  const [owner, setOwner] = useState('');
  const [color, setColor] = useState('');
  const [bodyType, setBodyType] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://brocarsserver.onrender.com/api/v1/car/listCar2?make=${make}&model=${model}&sellerDetail=${sellerDetail}`,
        { price, fuel, transmission, kms, location, owner, color, bodyType },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success("Car details listed successfully");
      router.push(`/sell-car3?make=${make}&model=${model}&sellerDetail=${sellerDetail}&location=${encodeURIComponent(location)}`);
    } catch (err) {
      toast.error("Problem listing car details");
      console.error(err);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Car Specifications</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Fuel Type */}
          <div>
            <Label>Fuel Type</Label>
            <Select value={fuel} onValueChange={setFuel}>
              <SelectTrigger>
                <SelectValue placeholder="Select Fuel Type" />
              </SelectTrigger>
              <SelectContent>
                {["Petrol", "Diesel", "CNG", "Electric", "Hybrid"].map((f) => (
                  <SelectItem key={f} value={f}>{f}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price */}
          <div>
            <Label>Expected Price (₹)</Label>
            <Input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="e.g., 650000"
              required
            />
          </div>

          {/* Transmission */}
          <div>
            <Label>Transmission</Label>
            <Select value={transmission} onValueChange={setTransmission}>
              <SelectTrigger>
                <SelectValue placeholder="Select Transmission" />
              </SelectTrigger>
              <SelectContent>
                {["Manual", "Automatic", "AMT", "CVT"].map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Kilometers Driven */}
          <div>
            <Label>Kilometers Driven</Label>
            <Input
              type="number"
              value={kms}
              onChange={(e) => setKms(e.target.value)}
              placeholder="e.g., 45000"
              required
            />
          </div>

          {/* Location */}
          <div>
            <Label>Location</Label>
            <Input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Delhi"
              required
            />
          </div>

          {/* Owner Count */}
          <div>
            <Label>Number of Owners</Label>
            <Select value={owner} onValueChange={setOwner}>
              <SelectTrigger>
                <SelectValue placeholder="Select Owner Count" />
              </SelectTrigger>
              <SelectContent>
                {["1", "2", "3", "4+"].map((count) => (
                  <SelectItem key={count} value={count}>{count}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Color */}
          <div>
            <Label>Color</Label>
            <Input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="e.g., White"
              required
            />
          </div>

          {/* Body Type */}
          <div>
            <Label>Body Type</Label>
            <Select value={bodyType} onValueChange={setBodyType}>
              <SelectTrigger>
                <SelectValue placeholder="Select Body Type" />
              </SelectTrigger>
              <SelectContent>
                {["Hatchback", "Sedan", "SUV", "MUV", "Convertible", "Coupe", "Pickup", "Luxury Sedan", "Luxury SUV"].map((bt) => (
                  <SelectItem key={bt} value={bt}>{bt}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            List Car Details
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

