

// 'use client';

// import { useState } from 'react';
// import axios from 'axios';
// import {toast} from 'react-toastify'
// import { useRouter } from 'next/navigation';
// import { useSearchParams } from 'next/navigation';

// export default function ListCar4Page() {

//   const router = useRouter()

//   const searchParams = useSearchParams();
//   const make = searchParams.get('make');
//   const model = searchParams.get('model');
//   const location = searchParams.get('location')
//   const registrationNumber = searchParams.get('registrationNumber')

//   const[length,setLength] = useState('')
//   const[width, setWidth] = useState('')
//   const[height, setHeight] = useState('')
//   const[groundClearance, setGroundClearance] = useState('')
//   const[bootSpace, setBootSpace] = useState('')



//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await axios.put(
//         `https://brocarsserver.onrender.com/api/v1/car/listCar4?make=${make}&model=${model}&location=${location}&registrationNumber=${registrationNumber}`,
//         {length, width, height, groundClearance, bootSpace},
//         { withCredentials: true,
//            headers: { "Content-Type": "application/json" },
//          }
//       );
//         toast.success("Car Details listed successfully");
//         setLength('')
//         setWidth('')
//         setHeight('')
//         setBootSpace('')
//         setGroundClearance('')
//         router.push('buy-car');
        
//       } catch (err) {
//         toast.error("Problem logging in User");
//         console.log(err);
//       }
//     }

//   return (
//     <div className="container mx-auto p-6 max-w-xl">
//       <h1 className="text-2xl font-bold mb-4">Add Car Dimensions</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">

//         <input
//           name="length"
//           placeholder="Length (mm)"
//           value={length}
//           onChange={(e)=>setLength(e.target.value)}
//           className="w-full p-2 border"
//           required
//         />
//         <input
//           name="width"
//           placeholder="Width (mm)"
//           value={width}
//           onChange={(e)=>setWidth(e.target.value)}
//           className="w-full p-2 border"
//           required
//         />
//         <input
//           name="height"
//           placeholder="Height (mm)"
//           value={height}
//           onChange={(e)=>setHeight(e.target.value)}
//           className="w-full p-2 border"
//           required
//         />
//         <input
//           name="groundClearance"
//           placeholder="Ground Clearance (mm)"
//           value={groundClearance}
//           onChange={(e)=>setGroundClearance(e.target.value)}
//           className="w-full p-2 border"
//           required
//         />
//         <input
//           name="bootSpace"
//           placeholder="Boot Space (litres)"
//           value={bootSpace}
//           onChange={(e)=>setBootSpace(e.target.value)}
//           className="w-full p-2 border"
//           required
//         />

//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
//           Submit Car Dimensions
//         </button>
//       </form>
//     </div>
//   );

// }





'use client';

import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify'
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function ListCar4Page() {

  const router = useRouter()

  const searchParams = useSearchParams();
  const make = searchParams.get('make');
  const model = searchParams.get('model');
  const location = searchParams.get('location')
  const sellerDetail = searchParams.get('sellerDetail')
  const registrationNumber = searchParams.get('registrationNumber')

  const[sellerName,setSellerName] = useState('')
  const[sellerEmailId, setSellerEmailId] = useState('')
  const[sellerContactNo, setSellerContactNo] = useState('')
  const[sellerWhatsappNo, setSellerWhatsappNo] = useState('')
  const[sellerLocation, setSellerLocation] = useState('')



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://brocarsserver.onrender.com/api/v1/car/listCar4?make=${make}&model=${model}&location=${location}&registrationNumber=${registrationNumber}&sellerDetail=${sellerDetail}`,
        {sellerName, sellerEmailId, sellerContactNo, sellerWhatsappNo, sellerLocation},
        { withCredentials: true,
           headers: { "Content-Type": "application/json" },
         }
      );
        toast.success("Car Details listed successfully");
        setSellerName('')
        setSellerEmailId('')
        setSellerContactNo('')
        setSellerLocation('')
        setSellerWhatsappNo('')
        router.push('buy-car');
        
      } catch (err) {
        toast.error("Problem logging in User");
        console.log(err);
      }
    }

  return (
    <div className="container mx-auto p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Add Contact Details</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="sellerName"
          placeholder="Your Name"
          value={sellerName}
          onChange={(e)=>setSellerName(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <input
          name="sellerEmailId"
          type='email'
          placeholder="Your Email"
          value={sellerEmailId}
          onChange={(e)=>setSellerEmailId(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <input
          name="sellerContactNo"
          placeholder="Your Contact Number"
          value={sellerContactNo}
          onChange={(e)=>setSellerContactNo(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <input
          name="sellerWhatsappNo"
          placeholder="Your Whatsapp Number"
          value={sellerWhatsappNo}
          onChange={(e)=>setSellerWhatsappNo(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <input
          name="sellerLocation"
          placeholder="Your Location"
          value={sellerLocation}
          onChange={(e)=>setSellerLocation(e.target.value)}
          className="w-full p-2 border"
          required
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Submit Conact Details
        </button>
      </form>
    </div>
  );

}
