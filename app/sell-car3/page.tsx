
// // 'use client';

// // import { useState } from 'react';
// // import axios from 'axios';
// // import { toast } from 'react-toastify'
// // import { useRouter } from 'next/navigation';
// // import { useSearchParams } from 'next/navigation';

// // export default function ListCar3Page() {

// //   const router = useRouter()

// //   const searchParams = useSearchParams();
// //   const make = searchParams.get('make');
// //   const model = searchParams.get('model');
// //   const location = searchParams.get('location')

// //   const [engine, setEngine] = useState('')
// //   const [mileage, setMileage] = useState('');
// //   const [seatingCapacity, setSeatingCapacity] = useState('')
// //   const [registrationNumber, setRegistrationNumber] = useState('')
// //   const [registrationState, setRegistrationState] = useState('')
// //   const [insuranceValidity, setInsuranceValidity] = useState('')



// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.put(
// //         `http://localhost:4000/api/v1/car/listCar3?make=${make}&model=${model}&location=${location}`,
// //         { engine, mileage, seatingCapacity, registrationNumber, registrationState, insuranceValidity },
// //         { withCredentials: true, headers: { "Content-Type": "application/json" } }
// //       )
// //       console.log(engine)

// //       console.log(mileage)
// //       console.log(seatingCapacity)
// //       console.log(registrationNumber)
// //       console.log(registrationState)
// //       console.log(insuranceValidity)


// //       toast.success("Car Details listed successfully");
// //       setEngine('')
// //       setInsuranceValidity('')
// //       setMileage('')
// //       setRegistrationNumber('')
// //       setRegistrationState('')
// //       setInsuranceValidity('')
// //       setSeatingCapacity('')
// //       router.push(`/sell-car4?make=${make}&model=${model}&location=${location}&registrationNumber=${encodeURIComponent(registrationNumber)}`);

// //     } catch (err) {
// //       toast.error("Problem logging in User");
// //       console.log(err);
// //     }

// //   };

// //   return (
// //     <div className="container mx-auto p-6 max-w-xl">
// //       <h1 className="text-2xl font-bold mb-4">List Car Technical Info</h1>

// //       <form onSubmit={handleSubmit} className="space-y-4">

// //         <input
// //           name="engine"
// //           placeholder="Engine"
// //           value={engine}
// //           onChange={(e) => setEngine(e.target.value)}
// //           className="w-full p-2 border"
// //           required
// //         />
// //         <input
// //           name="mileage"
// //           placeholder="Mileage"
// //           value={mileage}
// //           onChange={(e) => setMileage(e.target.value)}
// //           className="w-full p-2 border"
// //           required
// //         />
// //         <input
// //           name="seatingCapacity"
// //           placeholder="Seating Capacity"
// //           value={seatingCapacity}
// //           onChange={(e) => setSeatingCapacity(e.target.value)}
// //           className="w-full p-2 border"
// //           required
// //         />
// //         <input
// //           name="registrationNumber"
// //           placeholder="Registration Number"
// //           value={registrationNumber}
// //           onChange={(e) => setRegistrationNumber(e.target.value)}
// //           className="w-full p-2 border"
// //           required
// //         />
// //         <input
// //           name="registationState"
// //           placeholder="Registration State"
// //           value={registrationState}
// //           onChange={(e) => setRegistrationState(e.target.value)}
// //           className="w-full p-2 border"
// //           required
// //         />
// //         <input
// //           name="insuranceValidity"
// //           placeholder="Insurance Validity"
// //           type="date"
// //           value={insuranceValidity}
// //           onChange={(e) => setInsuranceValidity(e.target.value)}
// //           className="w-full p-2 border"
// //           required
// //         />

// //         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
// //           Submit Car Details
// //         </button>
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
// import { useRouter, useSearchParams } from 'next/navigation';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { SelectTrigger, SelectItem, SelectContent, SelectValue, Select } from '@/components/ui/select';

// export default function ListCar3Page() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const make = searchParams.get('make');
//   const model = searchParams.get('model');
//   const location = searchParams.get('location');

//   const [engine, setEngine] = useState('');
//   const [mileage, setMileage] = useState('');
//   const [seatingCapacity, setSeatingCapacity] = useState('');
//   const [registrationNumber, setRegistrationNumber] = useState('');
//   const [registrationState, setRegistrationState] = useState('');
//   const [insuranceValidity, setInsuranceValidity] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       await axios.put(
//         `https://brocarsserver.onrender.com/api/v1/car/listCar3?make=${make}&model=${model}&location=${location}`,
//         {
//           engine,
//           mileage,
//           seatingCapacity,
//           registrationNumber,
//           registrationState,
//           insuranceValidity
//         },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" }
//         }
//       );

//       toast.success("Car details listed successfully");
//       router.push(`/sell-car4?make=${make}&model=${model}&location=${location}&registrationNumber=${encodeURIComponent(registrationNumber)}`);

//       // Optional: Clear form
//       setEngine('');
//       setMileage('');
//       setSeatingCapacity('');
//       setRegistrationNumber('');
//       setRegistrationState('');
//       setInsuranceValidity('');
//     } catch (err) {
//       toast.error("Problem submitting car details");
//       console.error(err);
//     }
//   };

//   return (
//     <Card className="max-w-2xl mx-auto mt-10">
//       <CardHeader>
//         <CardTitle>Technical Car Information</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <Label>Engine</Label>
//             <Input
//               placeholder="e.g., 1.5L i-VTEC"
//               value={engine}
//               onChange={(e) => setEngine(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <Label>Mileage (kmpl)</Label>
//             <Input
//               placeholder="e.g., 18.5"
//               value={mileage}
//               onChange={(e) => setMileage(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <Label>Seating Capacity</Label>
//             <Select
//               value={seatingCapacity}
//               onValueChange={(value) => setSeatingCapacity(value)}
//               required
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Select seating capacity" />
//               </SelectTrigger>
//               <SelectContent>
//                 {["2", "4", "5", "6", "7", "9"].map((num) => (
//                   <SelectItem key={num} value={num}>
//                     {num} Seater
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>

//           <div>
//             <Label>Registration Number</Label>
//             <Input
//               placeholder="e.g., DL8CAF1234"
//               value={registrationNumber}
//               onChange={(e) => setRegistrationNumber(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <Label>Registration State</Label>
//             <Input
//               placeholder="e.g., Delhi"
//               value={registrationState}
//               onChange={(e) => setRegistrationState(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <Label>Insurance Validity</Label>
//             <Input
//               type="date"
//               placeholder="Insurance Validity"
//               value={insuranceValidity}
//               onChange={(e) => setInsuranceValidity(e.target.value)}
//               required
//             />
//           </div>

//           <Button type="submit" className="w-full">
//             Submit Car Details
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }




'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SelectTrigger, SelectItem, SelectContent, SelectValue, Select } from '@/components/ui/select';

export default function ListCar3Page() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const make = searchParams.get('make');
  const model = searchParams.get('model');
  const location = searchParams.get('location');
  const sellerDetail = searchParams.get('sellerDetail');

  const [engine, setEngine] = useState('');
  const [mileage, setMileage] = useState('');
  const [seatingCapacity, setSeatingCapacity] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [registrationState, setRegistrationState] = useState('');
  const [insuranceValidity, setInsuranceValidity] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://brocarsserver.onrender.com/api/v1/car/listCar3?make=${make}&model=${model}&location=${location}&sellerDetail=${sellerDetail}`,
        {
          engine,
          mileage,
          seatingCapacity,
          registrationNumber,
          registrationState,
          insuranceValidity
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" }
        }
      );

      toast.success("Car details listed successfully");
      router.push(`/sell-car4?make=${make}&model=${model}&location=${location}&sellerDetail=${sellerDetail}&registrationNumber=${encodeURIComponent(registrationNumber)}`);

      // Optional: Clear form
      setEngine('');
      setMileage('');
      setSeatingCapacity('');
      setRegistrationNumber('');
      setRegistrationState('');
      setInsuranceValidity('');
    } catch (err) {
      toast.error("Problem submitting car details");
      console.error(err);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>Technical Car Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label>Engine</Label>
            <Input
              placeholder="e.g., 1.5L i-VTEC"
              value={engine}
              onChange={(e) => setEngine(e.target.value)}
              required
            />
          </div>

          <div>
            <Label>Mileage (kmpl)</Label>
            <Input
              placeholder="e.g., 18.5"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              required
            />
          </div>

          <div>
            <Label>Seating Capacity</Label>
            <Select
              value={seatingCapacity}
              onValueChange={(value) => setSeatingCapacity(value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select seating capacity" />
              </SelectTrigger>
              <SelectContent>
                {["2", "4", "5", "6", "7", "9"].map((num) => (
                  <SelectItem key={num} value={num}>
                    {num} Seater
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Registration Number</Label>
            <Input
              placeholder="e.g., DL8CAF1234"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <Label>Registration State</Label>
            <Input
              placeholder="e.g., Delhi"
              value={registrationState}
              onChange={(e) => setRegistrationState(e.target.value)}
              required
            />
          </div>

          <div>
            <Label>Insurance Validity</Label>
            <Input
              type="date"
              placeholder="Insurance Validity"
              value={insuranceValidity}
              onChange={(e) => setInsuranceValidity(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Submit Car Details
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

