

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import axios from "axios";

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// export default function SellCarPage() {
//   const [displayImg, setDisplayImg] = useState<any>("");
//   const [displayImgPreview, setDisplayImgPreview] = useState<string>("");
//   const [image2Avatar, setImage2Avatar] = useState<any>("");
//   const [image2AvatarPreview, setImage2AvatarPreview] = useState<string>("");
//   const [image3Avatar, setImage3Avatar] = useState<any>("");
//   const [image3AvatarPreview, setImage3AvatarPreview] = useState<string>("");
//   const [image4Avatar, setImage4Avatar] = useState<any>("");
//   const [image4AvatarPreview, setImage4AvatarPreview] = useState<string>("");

//   const [make, setMake] = useState("");
//   const [model, setModel] = useState("");
//   const [variant, setVariant] = useState("");
//   const [year, setYear] = useState("");

//   const router = useRouter();

//   const handleAvatarImage = (e: any, setImage: any, setPreview: any) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       setPreview(reader.result as string);
//       setImage(file);
//     };
//     reader.readAsDataURL(file);
//   };

//   const carList = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!make || !model || !variant || !year) {
//       toast.error("Please fill all required fields");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("model", model);
//       formData.append("make", make);
//       formData.append("year", year);
//       formData.append("variant", variant);
//       formData.append("displayImg", displayImg);
//       formData.append("image2Avatar", image2Avatar);
//       formData.append("image3Avatar", image3Avatar);
//       formData.append("image4Avatar", image4Avatar);

//       await axios.post("https://brocarsserver.onrender.com/api/v1/car/listCar1", formData, {
//         withCredentials: true,
//         headers: { "Content-Type": "multipart/form-data" }
//       });

//       toast.success("Car listed successfully");
//       router.push(`/sell-car2?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`);
//     } catch (error) {
//       toast.error("Failed to list car");
//     }
//   };

//   return (
//     <Card className="max-w-4xl mx-auto mt-10">
//       <CardHeader>
//         <CardTitle>List Your Car</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={carList} className="space-y-6">
//           {/* Image Upload Section */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {[displayImgPreview, image2AvatarPreview, image3AvatarPreview, image4AvatarPreview].map((preview, idx) => (
//               <div key={idx} className="space-y-2 text-center">
//                 <Image
//                   src={preview || ""}
//                   alt={`Image ${idx + 1}`}
//                   className="w-full h-32 rounded-md object-cover bg-muted"
//                 />
//                 <Input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) =>
//                     handleAvatarImage(
//                       e,
//                       [setDisplayImg, setImage2Avatar, setImage3Avatar, setImage4Avatar][idx],
//                       [setDisplayImgPreview, setImage2AvatarPreview, setImage3AvatarPreview, setImage4AvatarPreview][idx]
//                     )
//                   }
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Input Fields */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <Label>Company</Label>
//               <Select onValueChange={setMake} value={make}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select Company" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {["Hyundai", "Honda", "Toyota", "Tata", "Maruti Suzuki", "Volkswagen", "Mahindra", "Kia", "Nissan", "Ford", "Jeep", "Renault", "Skoda", "MG", "BMW", "Audi", "Jaguar", "Rover", "Mercedes"].map((m) => (
//                     <SelectItem key={m} value={m}>
//                       {m}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             <div>
//               <Label>Model</Label>
//               <Input value={model} onChange={(e) => setModel(e.target.value)} placeholder="e.g., i20, Civic" />
//             </div>

//             <div>
//               <Label>Variant</Label>
//               <Input value={variant} onChange={(e) => setVariant(e.target.value)} placeholder="e.g., Sportz, VX" />
//             </div>

//             <div>
//               <Label>Year</Label>
//               <Select onValueChange={setYear} value={year}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select Year" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {[...Array(30)].map((_, idx) => {
//                     const y = `${2025 - idx}`;
//                     return (
//                       <SelectItem key={y} value={y}>
//                         {y}
//                       </SelectItem>
//                     );
//                   })}
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <Button type="submit" className="w-full">
//             List Car Details
//           </Button>
//         </form>

//         <div className="bg-yellow-100 rounded-md p-4 mt-6">
//           <h4 className="font-semibold text-yellow-800 mb-2">📌 Pricing Tips</h4>
//           <ul className="text-sm text-yellow-700 list-disc pl-5 space-y-1">
//             <li>Price competitively to attract more buyers</li>
//             <li>Consider the current market demand</li>
//             <li>Factor in your car condition and maintenance</li>
//             <li>Leave room for negotiation</li>
//           </ul>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }



// 'use client';

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Textarea } from '@/components/ui/textarea';
// import { Badge } from '@/components/ui/badge';
// import { Upload, Car, DollarSign, FileText, CheckCircle } from 'lucide-react';
// import { toast } from 'react-toastify'
// import axios from 'axios';
// import { useRouter } from 'next/navigation';


// export default function SellCarPage() {


//   const [displayImg, setDisplayImg] = useState("");
//   const [displayImgPreview, setDisplayImgPreview] = useState("");
//   const [image2Avatar, setImage2Avatar] = useState("");
//   const [image2AvatarPreview, setImage2AvatarPreview] = useState("");
//   const [image3Avatar, setImage3Avatar] = useState("");
//   const [image3AvatarPreview, setImage3AvatarPreview] = useState("");
//   const [image4Avatar, setImage4Avatar] = useState("");
//   const [image4AvatarPreview, setImage4AvatarPreview] = useState("");
//   const [make, setMake] = useState('')
//   const [model, setModel] = useState('')
//   const [variant, setVariant] = useState('')
//   const [year, setYear] = useState('')

//   const router = useRouter()

//   const handleAvatarImage = (e:any, setImage: any, setPreview: any) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       setPreview(reader.result);
//       setImage(file);
//     };
//   };

//   const carList = async (e: React.FormEvent) => {

//     e.preventDefault();

//     if (!make || !model || !variant || !year) {
//       toast.error("Please fill all fields");
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append("model", model);
//       formData.append("make", make);
//       formData.append("year", year);
//       formData.append("variant", variant);
//       formData.append("displayImg", displayImg);
//       formData.append("image2Avatar", image2Avatar);
//       formData.append("image3Avatar", image3Avatar);
//       formData.append("image4Avatar", image4Avatar);

//       await axios.post("http://localhost:4000/api/v1/car/listCar1", formData, {
//         withCredentials: true,
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       toast.success("Car listed successfully");

//       // Reset state
//       setModel("");
//       setMake("");
//       setVariant("");
//       setYear("");
//       setDisplayImg("");
//       setDisplayImgPreview("");
//       setImage2Avatar("");
//       setImage2AvatarPreview("");
//       setImage3Avatar("");
//       setImage3AvatarPreview("");
//       setImage4Avatar("");
//       setImage4AvatarPreview("");
//       //router.push(`/sell-car2/`)
//       router.push(`/sell-car2?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`);

//     } catch (error) {
//       toast.error("Failed to list shoe");
//     }
//   };

// return (

//   <div>
//             <form onSubmit={carList} className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 {/* Image Inputs */}
//                 {[displayImgPreview, image2AvatarPreview, image3AvatarPreview, image4AvatarPreview].map((preview, idx) => (
//                   <div className="flex flex-col items-center" key={idx}>
//                     <img
//                       src={preview || ""}
//                       alt={`Image ${idx + 1}`}
//                       className="w-32 h-32 rounded-full bg-blue-200 object-cover mb-2"
//                     />
//                     <label className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-green-600">
//                       Upload Image {idx + 1}
//                       <input
//                         type="file"
//                         onChange={(e) =>
//                           handleAvatarImage(
//                             e,
//                             [setDisplayImg, setImage2Avatar, setImage3Avatar, setImage4Avatar][idx],
//                             [setDisplayImgPreview, setImage2AvatarPreview, setImage3AvatarPreview, setImage4AvatarPreview][idx]
//                           )
//                         }
//                         className="hidden"
//                       />
//                     </label>
//                   </div>
//                 ))}
//               </div>

//               {/* Text Inputs */}
//               <input type="text" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Model" />
//               <input type="text" value={make} onChange={(e) => setMake(e.target.value)} placeholder="Company Name" />
//               <input type="text" value={variant} onChange={(e) => setVariant(e.target.value)} placeholder="Variant" />
//               <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" />


//               <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//                 List Car Details
//               </button>
//             </form>

//                   <div className="bg-yellow-50 rounded-lg p-4">
//         <h4 className="font-semibold text-yellow-800 mb-2">Pricing Tips</h4>
//         <ul className="text-sm text-yellow-700 space-y-1">
//           <li>• Price competitively to attract more buyers</li>
//           <li>• Consider the current market demand</li>
//           <li>• Factor in your car's condition and maintenance</li>
//           <li>• Leave room for negotiation</li>
//         </ul>
//       </div>
//     </div>

//           </div>
   
//   );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SellCarPage() {
  const [displayImg, setDisplayImg] = useState<any>("");
  const [displayImgPreview, setDisplayImgPreview] = useState<string>("");
  const [image2Avatar, setImage2Avatar] = useState<any>("");
  const [image2AvatarPreview, setImage2AvatarPreview] = useState<string>("");
  const [image3Avatar, setImage3Avatar] = useState<any>("");
  const [image3AvatarPreview, setImage3AvatarPreview] = useState<string>("");
  const [image4Avatar, setImage4Avatar] = useState<any>("");
  const [image4AvatarPreview, setImage4AvatarPreview] = useState<string>("");

  const [make, setMake] = useState("");
  const [sellerDetail, setSellerDetail] = useState("");
  const [model, setModel] = useState("");
  const [variant, setVariant] = useState("");
  const [year, setYear] = useState("");

  const router = useRouter();

  const handleAvatarImage = (e: any, setImage: any, setPreview: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result as string);
      setImage(file);
    };
    reader.readAsDataURL(file);
  };

  const carList = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!make || !model || !variant || !year || !sellerDetail) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("model", model);
      formData.append("make", make);
      formData.append("year", year);
      formData.append("sellerDetail", sellerDetail);
      formData.append("variant", variant);
      formData.append("displayImg", displayImg);
      formData.append("image2Avatar", image2Avatar);
      formData.append("image3Avatar", image3Avatar);
      formData.append("image4Avatar", image4Avatar);

      await axios.post("https://brocarsserver.onrender.com/api/v1/car/listCar1", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" }
      });

      toast.success("Car listed successfully");
      router.push(`/sell-car2?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}&sellerDetail=${encodeURIComponent(sellerDetail)}`);
    } catch (error) {
      toast.error("Failed to list car");
    }
  };

  return (
    <Card className="max-w-4xl mx-auto mt-10">
      <CardHeader>
        <CardTitle>List Your Car</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={carList} className="space-y-6">
          {/* Image Upload Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[displayImgPreview, image2AvatarPreview, image3AvatarPreview, image4AvatarPreview].map((preview, idx) => (
              <div key={idx} className="space-y-2 text-center">
                <img
                  src={preview || ""}
                  alt={`Image ${idx + 1}`}
                  className="w-full h-32 rounded-md object-cover bg-muted"
                />
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleAvatarImage(
                      e,
                      [setDisplayImg, setImage2Avatar, setImage3Avatar, setImage4Avatar][idx],
                      [setDisplayImgPreview, setImage2AvatarPreview, setImage3AvatarPreview, setImage4AvatarPreview][idx]
                    )
                  }
                />
              </div>
            ))}
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Company</Label>
              <Select onValueChange={setMake} value={make}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Company" />
                </SelectTrigger>
                <SelectContent>
                  {["Hyundai", "Honda", "Toyota", "Tata", "Maruti Suzuki", "Volkswagen", "Mahindra", "Kia", "Nissan", "Ford", "Jeep", "Renault", "Skoda", "MG", "BMW", "Audi", "Jaguar", "Rover", "Mercedes"].map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Email Id</Label>
              <Input value={sellerDetail} onChange={(e) => setSellerDetail(e.target.value)} placeholder="e.g., abc@gmail.com" />
            </div>

            <div>
              <Label>Model</Label>
              <Input value={model} onChange={(e) => setModel(e.target.value)} placeholder="e.g., i20, Civic" />
            </div>

            <div>
              <Label>Variant</Label>
              <Input value={variant} onChange={(e) => setVariant(e.target.value)} placeholder="e.g., Sportz, VX" />
            </div>

            <div>
              <Label>Year</Label>
              <Select onValueChange={setYear} value={year}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(30)].map((_, idx) => {
                    const y = `${2025 - idx}`;
                    return (
                      <SelectItem key={y} value={y}>
                        {y}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button type="submit" className="w-full">
            List Car Details
          </Button>
        </form>

        <div className="bg-yellow-100 rounded-md p-4 mt-6">
          <h4 className="font-semibold text-yellow-800 mb-2">📌 Pricing Tips</h4>
          <ul className="text-sm text-yellow-700 list-disc pl-5 space-y-1">
            <li>Price competitively to attract more buyers</li>
            <li>Consider the current market demand</li>
            <li>Factor in your car condition and maintenance</li>
            <li>Leave room for negotiation</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

