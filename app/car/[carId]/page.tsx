

// 'use client';

// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import {
//   Heart,
//   Share2,
//   Phone,
//   Calendar,
//   Fuel,
//   Settings,
//   MapPin,
//   User,
//   Car,
//   FileText,
//   Shield,
//   Calculator,
//   TestTube
// } from 'lucide-react';
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// import { useParams } from 'next/navigation';
// import axios from 'axios';
// import { toast } from 'react-toastify'
// import Link from 'next/link';

// interface CarSpecifications {
//   length?: string;
//   width?: string;
//   height?: string;
//   bootSpace?: string;
//   groundClearance?: string;
// }

// interface CarData {
//   id: number;
//   make?: string;
//   model?: string;
//   variant?: string;
//   year?: number;
//   price?: number;
//   location?: string;
//   owner?: string;
//   fuel?: string;
//   transmission?: string;
//   kms?: string;
//   engine?: string;
//   mileage?: string;
//   color?: string;
//   bodyType?: string;
//   seatingCapacity?: number;
//   registrationNumber?: string;
//   registrationState?: string;
//   insuranceValidity?: string;
//   specifications?: CarSpecifications;
//   displayImg?: { url: string };
//   image2Avatar?: { url: string };
//   image3Avatar?: { url: string };
//   image4Avatar?: { url: string };
// }

// export default function CarDetailsPage({ params }: { params: { id: string } }) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);
//   const [showTestDriveDialog, setShowTestDriveDialog] = useState(false);

//   const [loanTenure, setLoanTenure] = useState(5);
//   const [interestRate, setInterestRate] = useState(9.5);

//   const [day, setDay] = useState('')
//   const [time, setTime] = useState('')
//   const [name, setName] = useState('')
//   const [phone, setPhone] = useState('')

//   const [car, setCar] = useState<CarData | null>(null);
//   const { carId } = useParams();

//   const [loanAmount, setLoanAmount] = useState(0);

//   // Update loan amount when car data is loaded
//   useEffect(() => {
//     if (car?.price) {
//       setLoanAmount(car.price);
//     }
//   }, [car?.price]);

//   // Fetch car data
//   const fetchCars = async () => {
//     try {
//       const res = await axios.get(`https://brocarsserver.onrender.com/api/v1/car/getACar/${carId}`, {
//         withCredentials: true,
//       });
//       setCar(res.data.car);
//     } catch (err) {
//       toast.error('Failed to load car details');
//     }
//   };

//   useEffect(() => {
//     if (carId) {
//       fetchCars();
//     }
//   }, [carId])

//   if (!car) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-900 mb-4">Car Not Found</h1>
//           <p className="text-gray-600">The car you're looking for doesn't exist.</p>
//         </div>
//       </div>
//     );
//   }

//   const formatPrice = (price: number) => {
//     return (price / 100000).toFixed(1) + ' Lakh';
//   };

//   const calculateEMI = () => {
//     const principal = loanAmount;
//     const monthlyRate = interestRate / (12 * 100);
//     const tenure = loanTenure * 12;

//     const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
//       (Math.pow(1 + monthlyRate, tenure) - 1);

//     return Math.round(emi);
//   };

//   const handleTestDriveSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const { data } = await axios.post(
//         `https://brocarsserver.onrender.com/api/v1/car/bookTestDrive/${carId}`, 
//         { day, time, phone, name },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       toast.success("Applied For Test Drive")
//       setName('')
//       setDay('')
//       setTime('')
//       setPhone('')
//     } catch (err) {
//       toast.error("Problem booking test drive");
//     }
//     setShowTestDriveDialog(false);
//   };

//   // Car images with fallback
//   const carImages = [
//     car?.displayImg?.url || '/placeholder-car.jpg',
//     car?.image2Avatar?.url || '/placeholder-car.jpg',
//     car?.image3Avatar?.url || '/placeholder-car.jpg',
//     car?.image4Avatar?.url || '/placeholder-car.jpg'
//   ].filter(Boolean);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Image Gallery */}
//             <Card>
//               <CardContent className="p-0">
//                 <div className="relative">
//                   <img
//                     src={carImages[currentImageIndex]}
//                     alt={`${car.make || 'Car'} ${car.model || ''}`}
//                     className="w-full h-80 object-cover rounded-t-lg"
//                   />
//                   <div className="absolute top-4 right-4 flex space-x-2">
//                     <Button
//                       size="icon"
//                       variant="ghost"
//                       className={`bg-white/80 hover:bg-white ${isLiked ? 'text-red-500' : 'text-gray-600'}`}
//                       onClick={() => setIsLiked(!isLiked)}
//                     >
//                       <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
//                     </Button>
//                     <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white">
//                       <Share2 className="h-5 w-5" />
//                     </Button>
//                   </div>
//                   <div className="absolute bottom-4 left-4">
//                     <Badge className="bg-green-500 hover:bg-green-600">
//                       Verified
//                     </Badge>
//                   </div>
//                 </div>
//                 <div className="flex space-x-2 p-4 overflow-x-auto">
//                   {carImages.map((image, index) => (
//                     <img
//                       key={index}
//                       src={image}
//                       alt={`View ${index + 1}`}
//                       className={`w-20 h-16 object-cover rounded cursor-pointer border-2 ${currentImageIndex === index ? 'border-orange-500' : 'border-transparent'
//                         }`}
//                       onClick={() => setCurrentImageIndex(index)}
//                     />
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Car Details */}
//             <Card>
//               <CardHeader>
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <CardTitle className="text-2xl">
//                       {car?.year || 'Year'} {car?.make || 'Make'} {car?.model || 'Model'} {car?.variant || 'Variant'}
//                     </CardTitle>
//                     <div className="flex items-center space-x-4 text-gray-600 mt-2">
//                       <div className="flex items-center">
//                         <MapPin className="h-4 w-4 mr-1" />
//                         {car?.location || 'Location'}
//                       </div>
//                       <div className="flex items-center">
//                         <User className="h-4 w-4 mr-1" />
//                         {car?.owner || 'Owner'}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-3xl font-bold text-orange-600">
//                       ₹{car?.price ? formatPrice(car.price) : 'Price'}
//                     </p>
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                   <div className="text-center p-3 bg-gray-50 rounded-lg">
//                     <Calendar className="h-6 w-6 mx-auto mb-2 text-orange-600" />
//                     <p className="text-sm text-gray-600">Year</p>
//                     <p className="font-semibold">{car?.year || 'Year'}</p>
//                   </div>
//                   <div className="text-center p-3 bg-gray-50 rounded-lg">
//                     <Fuel className="h-6 w-6 mx-auto mb-2 text-orange-600" />
//                     <p className="text-sm text-gray-600">Fuel</p>
//                     <p className="font-semibold">{car?.fuel || 'Fuel'}</p>
//                   </div>
//                   <div className="text-center p-3 bg-gray-50 rounded-lg">
//                     <Settings className="h-6 w-6 mx-auto mb-2 text-orange-600" />
//                     <p className="text-sm text-gray-600">Transmission</p>
//                     <p className="font-semibold">{car?.transmission || 'Transmission'}</p>
//                   </div>
//                   <div className="text-center p-3 bg-gray-50 rounded-lg">
//                     <Car className="h-6 w-6 mx-auto mb-2 text-orange-600" />
//                     <p className="text-sm text-gray-600">KMs Driven</p>
//                     <p className="font-semibold">{car?.kms || 'Kms'}</p>
//                   </div>
//                 </div>

//                 <Tabs defaultValue="overview" className="w-full">
//                   <TabsList className="grid w-full grid-cols-3">
//                     <TabsTrigger value="overview">Overview</TabsTrigger>
//                     <TabsTrigger value="specs">Specifications</TabsTrigger>
//                     <TabsTrigger value="inspection">Inspection</TabsTrigger>
//                   </TabsList>

//                   <TabsContent value="overview" className="space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <Label className="text-sm text-gray-600">Engine</Label>
//                         <p className="font-medium">{car?.engine || 'Engine'}</p>
//                       </div>
//                       <div>
//                         <Label className="text-sm text-gray-600">Mileage</Label>
//                         <p className="font-medium">{car?.mileage || 'Mileage'}</p>
//                       </div>
//                       <div>
//                         <Label className="text-sm text-gray-600">Color</Label>
//                         <p className="font-medium">{car?.color || 'Color'}</p>
//                       </div>
//                       <div>
//                         <Label className="text-sm text-gray-600">Body Type</Label>
//                         <p className="font-medium">{car?.bodyType || 'BodyType'}</p>
//                       </div>
//                       <div>
//                         <Label className="text-sm text-gray-600">Seating</Label>
//                         <p className="font-medium">{car?.seatingCapacity || 'Seating Capacity'} Seater</p>
//                       </div>
//                       <div>
//                         <Label className="text-sm text-gray-600">Registration</Label>
//                         <p className="font-medium">{car?.registrationNumber || 'Registration Number'}</p>
//                       </div>
//                     </div>
//                   </TabsContent>

//                   <TabsContent value="specs">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {car?.specifications ? (
//                         <div>
//                           <h3 className="font-semibold mb-3">Specifications:</h3>
//                           <div className="space-y-2">
//                             <div>
//                               <Label className="text-sm text-gray-600">Length</Label>
//                               <p className="font-medium">{car.specifications.length || 'N/A'}</p>
//                             </div>
//                             <div>
//                               <Label className="text-sm text-gray-600">Width</Label>
//                               <p className="font-medium">{car.specifications.width || 'N/A'}</p>
//                             </div>
//                             <div>
//                               <Label className="text-sm text-gray-600">Height</Label>
//                               <p className="font-medium">{car.specifications.height || 'N/A'}</p>
//                             </div>
//                             <div>
//                               <Label className="text-sm text-gray-600">Boot Space</Label>
//                               <p className="font-medium">{car.specifications.bootSpace || 'N/A'}</p>
//                             </div>
//                             <div>
//                               <Label className="text-sm text-gray-600">Ground Clearance</Label>
//                               <p className="font-medium">{car.specifications.groundClearance || 'N/A'}</p>
//                             </div>
//                           </div>
//                         </div>
//                       ) : (
//                         <p>No specifications available</p>
//                       )}
//                     </div>
//                   </TabsContent>

//                   <TabsContent value="inspection">
//                     <div className="text-center p-8">
//                       <Shield className="h-12 w-12 mx-auto mb-4 text-gray-400" />
//                       <p className="text-gray-600">Inspection report will be available soon</p>
//                     </div>
//                   </TabsContent>
//                 </Tabs>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Contact Card */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Contact Seller</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <Link href='/sell-car1'>
//                   <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700" size="lg">
//                     <Phone className="h-4 w-4 mr-2" />
//                     Call Seller
//                   </Button>
//                 </Link>

//                 <Dialog open={showTestDriveDialog} onOpenChange={setShowTestDriveDialog}>
//                   <DialogTrigger asChild>
//                     <Button variant="outline" className="w-full" size="lg">
//                       <TestTube className="h-4 w-4 mr-2" />
//                       Book Test Drive
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent>
//                     <DialogHeader>
//                       <DialogTitle>Book Test Drive</DialogTitle>
//                       <DialogDescription>
//                         Schedule a test drive for {car?.year || 'Year'} {car?.make || 'Make'} {car?.model || 'Model'}
//                       </DialogDescription>
//                     </DialogHeader>
//                     <form onSubmit={handleTestDriveSubmit} className="space-y-4">
//                       <div>
//                         <Label htmlFor="name">Full Name</Label>
//                         <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
//                       </div>
//                       <div>
//                         <Label htmlFor="phone">Phone Number</Label>
//                         <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" required />
//                       </div>
//                       <div>
//                         <Label htmlFor="date">Preferred Date</Label>
//                         <Input id="date" value={day} onChange={(e) => setDay(e.target.value)} type="date" required />
//                       </div>
//                       <div>
//                         <Label htmlFor="time">Preferred Time</Label>
//                         <Input id="time" value={time} onChange={(e) => setTime(e.target.value)} type="time" required />
//                       </div>
//                       <DialogFooter>
//                         <Button type="submit" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
//                           Book Test Drive
//                         </Button>
//                       </DialogFooter>
//                     </form>
//                   </DialogContent>
//                 </Dialog>
//               </CardContent>
//             </Card>

//             {/* EMI Calculator */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>EMI Calculator</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <Label htmlFor="loan-amount">Loan Amount</Label>
//                   <Input
//                     id="loan-amount"
//                     type="number"
//                     value={loanAmount}
//                     onChange={(e) => setLoanAmount(Number(e.target.value))}
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="tenure">Tenure (Years)</Label>
//                   <Input
//                     id="tenure"
//                     type="number"
//                     value={loanTenure}
//                     onChange={(e) => setLoanTenure(Number(e.target.value))}
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="interest">Interest Rate (%)</Label>
//                   <Input
//                     id="interest"
//                     type="number"
//                     step="0.1"
//                     value={interestRate}
//                     onChange={(e) => setInterestRate(Number(e.target.value))}
//                   />
//                 </div>
//                 <div className="p-4 bg-orange-50 rounded-lg">
//                   <p className="text-center">
//                     <span className="text-sm text-gray-600">Monthly EMI</span>
//                   </p>
//                   <p className="text-2xl font-bold text-orange-600 text-center">
//                     ₹{calculateEMI().toLocaleString()}
//                   </p>
//                 </div>
//                 <Button variant="outline" className="w-full">
//                   <Calculator className="h-4 w-4 mr-2" />
//                   Get Loan Approval
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Quick Info */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Quick Info</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Registration State</span>
//                   <span className="font-medium">{car?.registrationState || 'N/A'}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Insurance Valid Till</span>
//                   <span className="font-medium">{car?.insuranceValidity || 'N/A'}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Ownership</span>
//                   <span className="font-medium">{car?.owner || 'N/A'}</span>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// 'use client';

// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import {
//   Heart,
//   Share2,
//   Phone,
//   Calendar,
//   Fuel,
//   Settings,
//   MapPin,
//   User,
//   Car,
//   FileText,
//   Shield,
//   Calculator,
//   TestTube
// } from 'lucide-react';
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
// //import { carDatabase } from '@/lib/car-data';
// import { useParams } from 'next/navigation';
// import axios from 'axios';
// import { toast } from 'react-toastify'
// import Link from 'next/link';



// export default function CarDetailsPage({ params }: { params: { id: string } }) {
//   //const carId = parseInt(params.carId);
//   //const carData = carDatabase.find(car => car.id === carId);

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);
//   const [showTestDriveDialog, setShowTestDriveDialog] = useState(false);

//   const [loanTenure, setLoanTenure] = useState(5);
//   const [interestRate, setInterestRate] = useState(9.5);

//   const [day, setDay] = useState('')
//   const [time, setTime] = useState('')
//   const [name, setName] = useState('')
//   const [phone, setPhone] = useState('')


//   const [car, setCar] = useState([]);
//   const { carId } = useParams();


//   // Fetch all reviews
//   const fetchCars = async () => {
//     try {
//       const res = await axios.get(`http://localhost:4000/api/v1/car/getACar/${carId}`, {
//         withCredentials: true,
//       });
//       setCar(res.data.car);
//     } catch (err) {
//       toast.error('Failed to load reviews');
//     }
//   };

//   useEffect(() => {
//     fetchCars();
//   }, [carId])

//   const [loanAmount, setLoanAmount] = useState(car?.price || 0);

//   if (!car) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-gray-900 mb-4">Car Not Found</h1>
//           <p className="text-gray-600">The car you're looking for doesn't exist.</p>
//         </div>
//       </div>
//     );
//   }

//   const formatPrice = (price: number) => {
//     return (price / 100000).toFixed(1) + ' Lakh';
//   };

//   const calculateEMI = () => {
//     const principal = loanAmount;
//     const monthlyRate = interestRate / (12 * 100);
//     const tenure = loanTenure * 12;

//     const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
//       (Math.pow(1 + monthlyRate, tenure) - 1);

//     return Math.round(emi);
//   };



//   const handleTestDriveSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const { data } = await axios.post(
//         `http://localhost:4000/api/v1/car/bookTestDrive/${carId}`, { day, time, phone , name },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }

//       );

//       toast.success("Applied For Test Drive")
//       setName('')
//       setDay('')
//       setTime('')
//     } catch (err) {
//       toast.error("Problem logging in User");

//     }
//     setShowTestDriveDialog(false);
//   };

//   // Mock multiple images for the gallery
//   const carImages = [
//     car?.displayImg?.url,
//     car?.image2Avatar?.url,
//     car?.image3Avatar?.url,
//     car?.image4Avatar?.url
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Image Gallery */}
//             <Card>
//               <CardContent className="p-0">
//                 <div className="relative">
//                   <img
//                     src={carImages[currentImageIndex]}
//                     alt={`${car.make} ${car.model}`}
//                     className="w-full h-80 object-cover rounded-t-lg"
//                   />
//                   <div className="absolute top-4 right-4 flex space-x-2">
//                     <Button
//                       size="icon"
//                       variant="ghost"
//                       className={`bg-white/80 hover:bg-white ${isLiked ? 'text-red-500' : 'text-gray-600'}`}
//                       onClick={() => setIsLiked(!isLiked)}
//                     >
//                       <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
//                     </Button>
//                     <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white">
//                       <Share2 className="h-5 w-5" />
//                     </Button>
//                   </div>
//                   <div className="absolute bottom-4 left-4">
//                     <Badge className="bg-green-500 hover:bg-green-600">
//                       Verified
//                     </Badge>
//                   </div>
//                 </div>
//                 <div className="flex space-x-2 p-4 overflow-x-auto">
//                   {carImages.map((image, index) => (
//                     <img
//                       key={index}
//                       src={image}
//                       alt={`View ${index + 1}`}
//                       className={`w-20 h-16 object-cover rounded cursor-pointer border-2 ${currentImageIndex === index ? 'border-orange-500' : 'border-transparent'
//                         }`}
//                       onClick={() => setCurrentImageIndex(index)}
//                     />
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Car Details */}
//             <Card>
//               <CardHeader>
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <CardTitle className="text-2xl">
//                       {/* {car?.year || 'Year'} {car.make} {car.model} {car.variant} */}
//                       {car?.year || 'Year'} {car?.make || 'Make'} {car?.model || 'Model'} {car?.variant || 'Variant'}
//                     </CardTitle>
//                     <div className="flex items-center space-x-4 text-gray-600 mt-2">
//                       <div className="flex items-center">
//                         <MapPin className="h-4 w-4 mr-1" />
//                         {car?.location || 'Location'}
//                       </div>
//                       <div className="flex items-center">
//                         <User className="h-4 w-4 mr-1" />
//                         {car?.owner || 'Owner'}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-3xl font-bold text-orange-600">
//                       ₹{formatPrice(car?.price || 'Price')}
//                     </p>
//                     {/* <p className="text-lg text-gray-500 line-through">
//                       ₹{formatPrice(car.originalPrice)}
//                     </p> */}
//                     {/* <Badge variant="secondary" className="mt-1 bg-orange-100 text-orange-800">
//                       ₹{((car.originalPrice - car.price) / 1000).toFixed(0)}k saved
//                     </Badge> */}
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//                   <div className="text-center p-3 bg-gray-50 rounded-lg">
//                     <Calendar className="h-6 w-6 mx-auto mb-2 text-orange-600" />
//                     <p className="text-sm text-gray-600">Year</p>
//                     <p className="font-semibold">{car?.year || 'Year'}</p>
//                   </div>
//                   <div className="text-center p-3 bg-gray-50 rounded-lg">
//                     <Fuel className="h-6 w-6 mx-auto mb-2 text-orange-600" />
//                     <p className="text-sm text-gray-600">Fuel</p>
//                     <p className="font-semibold">{car?.fuel || 'Fuel'}</p>
//                   </div>
//                   <div className="text-center p-3 bg-gray-50 rounded-lg">
//                     <Settings className="h-6 w-6 mx-auto mb-2 text-orange-600" />
//                     <p className="text-sm text-gray-600">Transmission</p>
//                     <p className="font-semibold">{car?.transmission || 'Transmission'}</p>
//                   </div>
//                   <div className="text-center p-3 bg-gray-50 rounded-lg">
//                     <Car className="h-6 w-6 mx-auto mb-2 text-orange-600" />
//                     <p className="text-sm text-gray-600">KMs Driven</p>
//                     <p className="font-semibold">{car?.kms || 'Kms'}</p>
//                   </div>
//                 </div>

//                 <Tabs defaultValue="overview" className="w-full">
//                   <TabsList className="grid w-full grid-cols-4">
//                     <TabsTrigger value="overview">Overview</TabsTrigger>
//                     {/* <TabsTrigger value="features">Features</TabsTrigger> */}
//                     <TabsTrigger value="specs">Specifications</TabsTrigger>
//                     <TabsTrigger value="inspection">Inspection</TabsTrigger>
//                   </TabsList>

//                   <TabsContent value="overview" className="space-y-4">
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <Label className="text-sm text-gray-600">Engine</Label>
//                         <p className="font-medium">{car?.engine || 'Engine'}</p>
//                       </div>
//                       <div>
//                         <Label className="text-sm text-gray-600">Mileage</Label>
//                         <p className="font-medium">{car?.mileage || 'Mileage'}</p>
//                       </div>
//                       <div>
//                         <Label className="text-sm text-gray-600">Color</Label>
//                         <p className="font-medium">{car?.color || 'Color'}</p>
//                       </div>
//                       <div>
//                         <Label className="text-sm text-gray-600">Body Type</Label>
//                         <p className="font-medium">{car?.bodyType || 'BodyType'}</p>
//                       </div>
//                       <div>
//                         <Label className="text-sm text-gray-600">Seating</Label>
//                         <p className="font-medium">{car?.seatingCapacity || 'Seating Capacity'} Seater</p>
//                       </div>
//                       <div>
//                         <Label className="text-sm text-gray-600">Registration</Label>
//                         <p className="font-medium">{car?.registrationNumber || 'Registration Number'}</p>

//                       </div>
//                     </div>
//                   </TabsContent>


//                   <TabsContent value="specs">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//                       {car?.specifications ? (
//                         <div>
//                           <h2>Specification:</h2>
//                           <Label className="text-sm text-gray-600">Length</Label>
//                           <p className="font-medium">{car?.specifications.length || 'Length'}</p>
//                           <Label className="text-sm text-gray-600">Width</Label>
//                           <p className="font-medium">{car?.specifications.width || 'Width'}</p>
//                           <Label className="text-sm text-gray-600">Height</Label>
//                           <p className="font-medium">{car?.specifications.height || 'Height'}</p>
//                           <Label className="text-sm text-gray-600">BootSpace</Label>
//                           <p className="font-medium">{car?.specifications.bootSpace || 'BootSpace'}</p>
//                           <Label className="text-sm text-gray-600">Ground Clearance</Label>
//                           <p className="font-medium">{car?.specifications.groundClearance || 'GroundClearance'}</p>
//                         </div>
//                       ) : (
//                         <p>Loading specifications...</p>
//                       )}
//                     </div>
//                   </TabsContent>





//                   {/* <TabsContent value="inspection">
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                       {Object.entries(car.inspectionReport).map(([key, value]) => (
//                         <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
//                           <p className="text-sm text-gray-600 capitalize mb-1">{key}</p>
//                           <Badge
//                             variant={value === 'Excellent' ? 'default' : value === 'Good' ? 'secondary' : 'outline'}
//                             className={
//                               value === 'Excellent' ? 'bg-green-500 hover:bg-green-600' :
//                                 value === 'Good' ? 'bg-blue-500 hover:bg-blue-600' : ''
//                             }
//                           >
//                             {value}
//                           </Badge>
//                         </div>
//                       ))}
//                     </div>
//                   </TabsContent>  */}


//                 </Tabs>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Contact Card */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Contact Seller</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700" size="lg">
//                   <Link href='/sell-car1'>
//                     <Phone className="h-4 w-4 mr-2" />
//                     Call Seller
//                   </Link>

//                 </Button>






//                 <Dialog open={showTestDriveDialog} onOpenChange={setShowTestDriveDialog}>
//                   <DialogTrigger asChild>
//                     <Button variant="outline" className="w-full" size="lg">
//                       <TestTube className="h-4 w-4 mr-2" />
//                       Book Test Drive
//                     </Button>
//                   </DialogTrigger>
//                   <DialogContent>
//                     <DialogHeader>
//                       <DialogTitle>Book Test Drive</DialogTitle>
//                       <DialogDescription>
//                         Schedule a test drive for {car?.year || 'Year'} {car?.make || 'Make'} {car?.model || 'Model'}
//                       </DialogDescription>
//                     </DialogHeader>
//                     <form onSubmit={handleTestDriveSubmit} className="space-y-4">



//                       <div>
//                         <Label htmlFor="name">Full Name</Label>
//                         <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
//                       </div>
//                       <div>
//                         <Label htmlFor="phone">Phone Number</Label>
//                         <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" required />
//                       </div>
//                       <div>
//                         <Label htmlFor="date">Preferred Date</Label>
//                         <Input id="date" value={day} onChange={(e) => setDay(e.target.value)} type="date" required />
//                       </div>
//                       <div>
//                         <Label htmlFor="time">Preferred Time</Label>
//                         <Input id="time" value={time} onChange={(e) => setTime(e.target.value)} type="text" required />
//                       </div>
//                       <DialogFooter>
//                         <Button type="submit" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
//                           Book Test Drive
//                         </Button>
//                       </DialogFooter>
//                     </form>
//                   </DialogContent>
//                 </Dialog>
//               </CardContent>
//             </Card>

//             {/* EMI Calculator */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>EMI Calculator</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <Label htmlFor="loan-amount">Loan Amount</Label>
//                   <Input
//                     id="loan-amount"
//                     type="number"
//                     value={loanAmount}
//                     onChange={(e) => setLoanAmount(Number(e.target.value))}
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="tenure">Tenure (Years)</Label>
//                   <Input
//                     id="tenure"
//                     type="number"
//                     value={loanTenure}
//                     onChange={(e) => setLoanTenure(Number(e.target.value))}
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="interest">Interest Rate (%)</Label>
//                   <Input
//                     id="interest"
//                     type="number"
//                     step="0.1"
//                     value={interestRate}
//                     onChange={(e) => setInterestRate(Number(e.target.value))}
//                   />
//                 </div>
//                 <div className="p-4 bg-orange-50 rounded-lg">
//                   <p className="text-center">
//                     <span className="text-sm text-gray-600">Monthly EMI</span>
//                   </p>
//                   <p className="text-2xl font-bold text-orange-600 text-center">
//                     ₹{calculateEMI().toLocaleString()}
//                   </p>
//                 </div>
//                 <Button variant="outline" className="w-full">
//                   <Calculator className="h-4 w-4 mr-2" />
//                   Get Loan Approval
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Quick Info */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Quick Info</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Registration State</span>
//                   <span className="font-medium">{car?.registrationState || 'Registration State'}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Insurance Valid Till</span>
//                   <span className="font-medium">{car?.insuranceValidity || 'Insurance Validity'}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Ownership</span>
//                   <span className="font-medium">{car?.owner || 'Owner'}</span>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Heart,
  Share2,
  Phone,
  Calendar,
  Fuel,
  Settings,
  MapPin,
  User,
  Car,
  FileText,
  Shield,
  Calculator,
  TestTube
} from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify'
import Link from 'next/link';

interface CarSpecifications {
  sellerName?: string;
  sellerEmailId?: string;
  sellerContactNo?: string;
  sellerWhatsappNo?: string;
  sellerLocation?: string;
}

interface CarData {
  id: number;
  make?: string;
  model?: string;
  variant?: string;
  year?: number;
  price?: number;
  location?: string;
  owner?: string;
  fuel?: string;
  transmission?: string;
  kms?: string;
  engine?: string;
  mileage?: string;
  color?: string;
  bodyType?: string;
  seatingCapacity?: number;
  registrationNumber?: string;
  registrationState?: string;
  insuranceValidity?: string;
  specifications?: CarSpecifications;
  displayImg?: { url: string };
  image2Avatar?: { url: string };
  image3Avatar?: { url: string };
  image4Avatar?: { url: string };
}

export default function CarDetailsPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showTestDriveDialog, setShowTestDriveDialog] = useState(false);

  const [loanTenure, setLoanTenure] = useState(5);
  const [interestRate, setInterestRate] = useState(9.5);

  const [day, setDay] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const [car, setCar] = useState<CarData | null>(null);
  const { carId } = useParams();

  const [loanAmount, setLoanAmount] = useState(0);

  // Update loan amount when car data is loaded
  useEffect(() => {
    if (car?.price) {
      setLoanAmount(car.price);
    }
  }, [car?.price]);

  // Fetch car data
  const fetchCars = async () => {
    try {
      const res = await axios.get(`https://brocarsserver.onrender.com/api/v1/car/getACar/${carId}`, {
        withCredentials: true,
      });
      setCar(res.data.car);
    } catch (err) {
      toast.error('Failed to load car details');
    }
  };

  useEffect(() => {
    if (carId) {
      fetchCars();
    }
  }, [carId])

  if (!car) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Car Not Found</h1>
          <p className="text-gray-600">The car you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return (price / 100000).toFixed(1) + ' Lakh';
  };

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / (12 * 100);
    const tenure = loanTenure * 12;

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);

    return Math.round(emi);
  };

  const handleTestDriveSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/v1/car/bookTestDrive/${carId}`, 
        { day, time, phone, name },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success("Applied For Test Drive")
      setName('')
      setDay('')
      setTime('')
      setPhone('')
    } catch (err) {
      toast.error("Problem booking test drive");
    }
    setShowTestDriveDialog(false);
  };

  // Car images with fallback
  const carImages = [
    car?.displayImg?.url || '/placeholder-car.jpg',
    car?.image2Avatar?.url || '/placeholder-car.jpg',
    car?.image3Avatar?.url || '/placeholder-car.jpg',
    car?.image4Avatar?.url || '/placeholder-car.jpg'
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={carImages[currentImageIndex]}
                    alt={`${car.make || 'Car'} ${car.model || ''}`}
                    className="w-full h-80 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className={`bg-white/80 hover:bg-white ${isLiked ? 'text-red-500' : 'text-gray-600'}`}
                      onClick={() => setIsLiked(!isLiked)}
                    >
                      <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                    </Button>
                    <Button size="icon" variant="ghost" className="bg-white/80 hover:bg-white">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-green-500 hover:bg-green-600">
                      Verified
                    </Badge>
                  </div>
                </div>
                <div className="flex space-x-2 p-4 overflow-x-auto">
                  {carImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`View ${index + 1}`}
                      className={`w-20 h-16 object-cover rounded cursor-pointer border-2 ${currentImageIndex === index ? 'border-orange-500' : 'border-transparent'
                        }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Car Details */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl">
                      {car?.year || 'Year'} {car?.make || 'Make'} {car?.model || 'Model'} {car?.variant || 'Variant'}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-gray-600 mt-2">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {car?.location || 'Location'}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {car?.owner || 'Owner'}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-orange-600">
                      ₹{car?.price ? formatPrice(car.price) : 'Price'}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Calendar className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                    <p className="text-sm text-gray-600">Year</p>
                    <p className="font-semibold">{car?.year || 'Year'}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Fuel className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                    <p className="text-sm text-gray-600">Fuel</p>
                    <p className="font-semibold">{car?.fuel || 'Fuel'}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Settings className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                    <p className="text-sm text-gray-600">Transmission</p>
                    <p className="font-semibold">{car?.transmission || 'Transmission'}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Car className="h-6 w-6 mx-auto mb-2 text-orange-600" />
                    <p className="text-sm text-gray-600">KMs Driven</p>
                    <p className="font-semibold">{car?.kms || 'Kms'}</p>
                  </div>
                </div>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="specs">Owner's Details</TabsTrigger>
                    <TabsTrigger value="inspection">Inspection</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-gray-600">Engine</Label>
                        <p className="font-medium">{car?.engine || 'Engine'}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600">Mileage</Label>
                        <p className="font-medium">{car?.mileage || 'Mileage'}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600">Color</Label>
                        <p className="font-medium">{car?.color || 'Color'}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600">Body Type</Label>
                        <p className="font-medium">{car?.bodyType || 'BodyType'}</p>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600">Seating</Label>
                        <p className="font-medium">{car?.seatingCapacity || 'Seating Capacity'} Seater</p>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600">Registration</Label>
                        <p className="font-medium">{car?.registrationNumber || 'Registration Number'}</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="specs">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {car?.specifications ? (
                        <div>
                          <h3 className="font-semibold mb-3">Owner:</h3>
                          <div className="space-y-2">
                            <div>
                              <Label className="text-sm text-gray-600">Owner's Name</Label>
                              <p className="font-medium">{car.specifications.sellerName || 'N/A'}</p>
                            </div>
                            {/* <div>
                              <Label className="text-sm text-gray-600">Owner's EmailId</Label>
                              <p className="font-medium">{car.specifications.sellerEmailId || 'N/A'}</p>
                            </div>
                            <div>
                              <Label className="text-sm text-gray-600">Owner's Contact No</Label>
                              <p className="font-medium">{car.specifications.sellerContactNo || 'N/A'}</p>
                            </div>
                            <div>
                              <Label className="text-sm text-gray-600">Boot Space</Label>
                              <p className="font-medium">{car.specifications.sellerWhatsappNo || 'N/A'}</p>
                            </div> */}
                            <div>
                              <Label className="text-sm text-gray-600">Location</Label>
                              <p className="font-medium">{car.specifications.sellerLocation || 'N/A'}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p>No specifications available</p>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="inspection">
                    <div className="text-center p-8">
                      <Shield className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-gray-600">Inspection report will be available soon</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <Card>
              <CardHeader>
                <CardTitle>Want this Car?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link href='/contact'>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700" size="lg">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Us
                  </Button>
                </Link>

                <Dialog open={showTestDriveDialog} onOpenChange={setShowTestDriveDialog}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full" size="lg">
                      <TestTube className="h-4 w-4 mr-2" />
                      Book Test Drive
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Book Test Drive</DialogTitle>
                      <DialogDescription>
                        Schedule a test drive for {car?.year || 'Year'} {car?.make || 'Make'} {car?.model || 'Model'}
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleTestDriveSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" required />
                      </div>
                      <div>
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input id="date" value={day} onChange={(e) => setDay(e.target.value)} type="date" required />
                      </div>
                      <div>
                        <Label htmlFor="time">Preferred Time</Label>
                        <Input id="time" value={time} onChange={(e) => setTime(e.target.value)} type="time" required />
                      </div>
                      <DialogFooter>
                        <Button type="submit" className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                          Book Test Drive
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* EMI Calculator */}
            <Card>
              <CardHeader>
                <CardTitle>EMI Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="loan-amount">Loan Amount</Label>
                  <Input
                    id="loan-amount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="tenure">Tenure (Years)</Label>
                  <Input
                    id="tenure"
                    type="number"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                  />
                </div>
                <div>
                  <Label htmlFor="interest">Interest Rate (%)</Label>
                  <Input
                    id="interest"
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                  />
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-center">
                    <span className="text-sm text-gray-600">Monthly EMI</span>
                  </p>
                  <p className="text-2xl font-bold text-orange-600 text-center">
                    ₹{calculateEMI().toLocaleString()}
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  <Calculator className="h-4 w-4 mr-2" />
                  Get Loan Approval
                </Button>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Registration State</span>
                  <span className="font-medium">{car?.registrationState || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Insurance Valid Till</span>
                  <span className="font-medium">{car?.insuranceValidity || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ownership</span>
                  <span className="font-medium">{car?.owner || 'N/A'}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
