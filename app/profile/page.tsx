// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Badge } from "@/components/ui/badge";
// import {
//   User,
//   Mail,
//   Phone,
//   Shield,
//   LogOut,
//   Edit,
//   CheckCircle,
//   XCircle,
// } from "lucide-react";

// interface User {
//   name: string;
//   email: string;
//   gender: string;
//   phone: string;
//   accountVerified: boolean;
//   avatar?: { url: string };
// }

// export default function Profile() {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:4000/api/v1/user/userProfile",
//           {
//             withCredentials: true,
//           }
//         );
//         setUser(res.data.user);
//       } catch (err) {
//         setUser(null);
//         toast.error("Failed to fetch user data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       const res = await axios.get("http://localhost:4000/api/v1/user/logout", {
//         withCredentials: true,
//       });
//       toast.success(res.data.message);
//       setUser(null);
//       router.push("/");
//     } catch (err: any) {
//       toast.error(err.response?.data?.message || "Logout failed");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <Skeleton className="w-[300px] h-[200px] rounded-xl" />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
//             Profile Dashboard
//           </h1>
//           <p className="text-muted-foreground">
//             Manage your account information
//           </p>
//         </div>

//         {/* Main Profile Card */}
//         <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
//           <CardHeader className="text-center pb-6">
//             <div className="relative">
            

//               <Avatar className="w-24 h-24">
//                 <AvatarImage src={user?.avatar?.url || ""} alt={user?.name} />
//                 <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
//               </Avatar>
     
//             </div>

//             <div className="mt-6">
//               <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
//                 {user.name}
//               </CardTitle>
//               <div className="flex items-center justify-center gap-2">
//                 {user.accountVerified ? (
//                   <Badge
//                     variant="default"
//                     className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
//                   >
//                     <CheckCircle className="w-3 h-3 mr-1" />
//                     Verified Account
//                   </Badge>
//                 ) : (
//                   <Badge
//                     variant="destructive"
//                     className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
//                   >
//                     <XCircle className="w-3 h-3 mr-1" />
//                     Unverified Account
//                   </Badge>
//                 )}
//               </div>
//             </div>
//           </CardHeader>

//           <CardContent className="space-y-6">
//             {/* Profile Information Grid */}
//             <div className="grid md:grid-cols-2 gap-4">
//               {/* Email */}
//               <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
//                 <CardContent className="p-4">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-blue-500 rounded-lg">
//                       <Mail className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
//                         Email Address
//                       </p>
//                       <p className="text-sm text-blue-600 dark:text-blue-300 break-all">
//                         {user.email}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Phone */}
//               <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
//                 <CardContent className="p-4">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-green-500 rounded-lg">
//                       <Phone className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-green-800 dark:text-green-200">
//                         Phone Number
//                       </p>
//                       <p className="text-sm text-green-600 dark:text-green-300">
//                         {user.phone}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Gender */}
//               <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
//                 <CardContent className="p-4">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-purple-500 rounded-lg">
//                       <User className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-purple-800 dark:text-purple-200">
//                         Gender
//                       </p>
//                       <p className="text-sm text-purple-600 dark:text-purple-300 capitalize">
//                         {user.gender}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Account Status */}
//               <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
//                 <CardContent className="p-4">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-orange-500 rounded-lg">
//                       <Shield className="w-4 h-4 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-sm font-medium text-orange-800 dark:text-orange-200">
//                         Account Status
//                       </p>
//                       <p className="text-sm text-orange-600 dark:text-orange-300">
//                         {user.accountVerified
//                           ? "Verified"
//                           : "Pending Verification"}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>


//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               {/* <Button
//                 variant="outline"
//                 size="lg"
//                 className="flex-1 max-w-xs h-12 font-medium border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
//               >
//                 <Edit className="w-4 h-4 mr-2" />
//                 Edit Profile
//               </Button> */}

//               <Button
//                 variant="destructive"
//                 size="lg"
//                 onClick={handleLogout}
//                 className="flex-1 max-w-xs h-12 font-medium bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-200"
//               >
//                 <LogOut className="w-4 h-4 mr-2" />
//                 Sign Out
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Mail,
  Phone,
  Shield,
  LogOut,
  Edit,
  CheckCircle,
  XCircle,
} from "lucide-react";

interface User {
  name: string;
  email: string;
  gender: string;
  phone: string;
  accountVerified: boolean;
  avatar?: { url: string };
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://brocarsserver.onrender.com/api/v1/user/userProfile",
          {
            withCredentials: true,
          }
        );
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
        toast.error("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/user/logout", {
        withCredentials: true,
      });
      toast.success(res.data.message);
      setUser(null);
      router.push("/");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Logout failed");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Skeleton className="w-[300px] h-[200px] rounded-xl" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-[400px]">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">No user data available</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Profile Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your account information
          </p>
        </div>

        {/* Main Profile Card */}
        <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="relative">
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage src={user.avatar?.url || ""} alt={user.name} />
                <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>

            <div className="mt-6">
              <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {user.name}
              </CardTitle>
              <div className="flex items-center justify-center gap-2">
                {user.accountVerified ? (
                  <Badge
                    variant="default"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified Account
                  </Badge>
                ) : (
                  <Badge
                    variant="destructive"
                    className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                  >
                    <XCircle className="w-3 h-3 mr-1" />
                    Unverified Account
                  </Badge>
                )}
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Profile Information Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Email */}
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500 rounded-lg">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                        Email Address
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-300 break-all">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500 rounded-lg">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-800 dark:text-green-200">
                        Phone Number
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-300">
                        {user.phone}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gender */}
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500 rounded-lg">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-purple-800 dark:text-purple-200">
                        Gender
                      </p>
                      <p className="text-sm text-purple-600 dark:text-purple-300 capitalize">
                        {user.gender}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Account Status */}
              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-500 rounded-lg">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-orange-800 dark:text-orange-200">
                        Account Status
                      </p>
                      <p className="text-sm text-orange-600 dark:text-orange-300">
                        {user.accountVerified
                          ? "Verified"
                          : "Pending Verification"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="destructive"
                size="lg"
                onClick={handleLogout}
                className="flex-1 max-w-xs h-12 font-medium bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
