// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { Input } from "@/components/ui/input";
// import { Search, User, Menu, X } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { filterOptions } from "@/lib/car-data";
// // import Cookies from "js-cookie";

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   //const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const createFilterUrl = (filterType: string, value?: string) => {
//     const params = new URLSearchParams();
//     if (value) {
//       params.set(filterType, value);
//     }
//     return `/buy-car?${params.toString()}`;
//   };

//   // useEffect(() => {
//   //   const token = Cookies.get("tokenu");
//   //   setIsLoggedIn(!!token);
//   // }, []);
//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center">
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           <div className="h-8 w-8 ">
//             {/* <span className="text-white font-bold text-sm">BC</span> */}
//             <span></span>
//           </div>
//           <span className="font-bold text-xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
//             BroCars
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <NavigationMenu className="hidden md:flex mx-6">
//           <NavigationMenuList>
//             <NavigationMenuItem>
//               <NavigationMenuTrigger>Buy Cars</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <div className="grid w-[600px] gap-3 p-6">
//                   <div className="row-span-3">
//                     <NavigationMenuLink asChild>
//                       <Link
//                         className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-500 to-red-600 p-6 no-underline outline-none focus:shadow-md text-white"
//                         href="/buy-car"
//                       >
//                         <div className="mb-2 mt-4 text-lg font-medium">
//                           Browse All Cars
//                         </div>
//                         <p className="text-sm leading-tight text-orange-100">
//                           Explore thousands of verified used cars
//                         </p>
//                       </Link>
//                     </NavigationMenuLink>
//                   </div>

//                   <div className="grid grid-cols-3 gap-4">
//                     <div>
//                       <h4 className="mb-2 text-sm font-medium text-gray-900">
//                         By Make
//                       </h4>
//                       <div className="space-y-1">
//                         {filterOptions.makes.slice(0, 4).map((make) => (
//                           <NavigationMenuLink key={make} asChild>
//                             <Link
//                               href={createFilterUrl("make", make)}
//                               className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                             >
//                               {make}
//                             </Link>
//                           </NavigationMenuLink>
//                         ))}
//                       </div>
//                     </div>

//                     <div>
//                       <h4 className="mb-2 text-sm font-medium text-gray-900">
//                         By Body Type
//                       </h4>
//                       <div className="space-y-1">
//                         {filterOptions.bodyTypes.slice(0, 4).map((bodyType) => (
//                           <NavigationMenuLink key={bodyType} asChild>
//                             <Link
//                               href={createFilterUrl("bodyType", bodyType)}
//                               className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                             >
//                               {bodyType}
//                             </Link>
//                           </NavigationMenuLink>
//                         ))}
//                       </div>
//                     </div>

//                     <div>
//                       <h4 className="mb-2 text-sm font-medium text-gray-900">
//                         By Price
//                       </h4>
//                       <div className="space-y-1">
//                         {filterOptions.priceRanges.slice(0, 4).map((range) => (
//                           <NavigationMenuLink key={range.label} asChild>
//                             <Link
//                               href={createFilterUrl(
//                                 "priceRange",
//                                 `${range.min}-${range.max}`
//                               )}
//                               className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                             >
//                               {range.label}
//                             </Link>
//                           </NavigationMenuLink>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </NavigationMenuContent>
//             </NavigationMenuItem>

//             <NavigationMenuItem>
//               <NavigationMenuLink asChild>
//                 <Link
//                   href="/sell-car1"
//                   className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
//                 >
//                   Sell Car
//                 </Link>
//               </NavigationMenuLink>
//             </NavigationMenuItem>

//             <NavigationMenuItem>
//               <NavigationMenuTrigger>Car Finance</NavigationMenuTrigger>
//               <NavigationMenuContent>
//                 <div className="w-[300px] p-4">
//                   <NavigationMenuLink asChild>
//                     <Link
//                       href="/finance"
//                       className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                     >
//                       <div className="text-sm font-medium leading-none">
//                         Overview
//                       </div>
//                       <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                         Car finance options and benefits
//                       </p>
//                     </Link>
//                   </NavigationMenuLink>
//                   <NavigationMenuLink asChild>
//                     <Link
//                       href="/finance/emi-calculator"
//                       className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
//                     >
//                       <div className="text-sm font-medium leading-none">
//                         EMI Calculator
//                       </div>
//                       <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//                         Calculate your monthly EMI
//                       </p>
//                     </Link>
//                   </NavigationMenuLink>
//                 </div>
//               </NavigationMenuContent>
//             </NavigationMenuItem>

//             <NavigationMenuItem>
//               <NavigationMenuLink asChild>
//                 <Link
//                   href="/blog"
//                   className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
//                 >
//                   Blog
//                 </Link>
//               </NavigationMenuLink>
//             </NavigationMenuItem>

//             {/* <NavigationMenuItem>
//               <NavigationMenuLink asChild>
//                 <Link
//                   href="/compare"
//                   className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
//                 >
//                   Compare Cars
//                 </Link>
//               </NavigationMenuLink>
//             </NavigationMenuItem> */}
//           </NavigationMenuList>
//         </NavigationMenu>

//         {/* Search Bar */}
//         <div className="flex-1 max-w-sm mx-4 hidden md:block">
//           <div className="relative">
//             <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//             <Input placeholder="Search cars..." className="pl-8" />
//           </div>
//         </div>

//         {/* User Actions */}
//         <div className="flex items-center space-x-4">
//           {
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   className="relative h-8 w-8 rounded-full"
//                 >
//                   <Avatar className="h-8 w-8">
//                     <AvatarImage src="/placeholder-avatar.jpg" alt="@user" />
//                     <AvatarFallback>MP</AvatarFallback>
//                   </Avatar>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56" align="end" forceMount>
//                 <DropdownMenuItem asChild>
//                   <Link href="/profile">Profile</Link>
//                 </DropdownMenuItem>
//                 {/* <DropdownMenuItem asChild>
//                   <Link href="/my-cars">My Cars</Link>
//                 </DropdownMenuItem> */}
//                 {/* <DropdownMenuItem asChild>
//                   <Link href="/bookings">My Bookings</Link>
//                 </DropdownMenuItem> */}
//                 {/* <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
//                   Logout
//                 </DropdownMenuItem> */}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           }

//           {/* Mobile Menu */}
//           <Sheet open={isOpen} onOpenChange={setIsOpen}>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="md:hidden">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[300px] sm:w-[400px]">
//               <nav className="flex flex-col space-y-4">
//                 <Link
//                   href="/buy-car"
//                   className="text-lg font-medium"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Buy Used Cars
//                 </Link>
//                 <Link
//                   href="/sell-car1"
//                   className="text-lg font-medium"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Sell Car
//                 </Link>
//                 <Link
//                   href="/finance"
//                   className="text-lg font-medium"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Car Finance
//                 </Link>
//                 <Link
//                   href="/blog"
//                   className="text-lg font-medium"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Blog
//                 </Link>
//                   <Link
//                   href="/profile"
//                   className="text-lg font-medium"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   Profile
//                 </Link>
//                 {/* {!isLoggedIn && (
//                   <>
//                     <Link href="/login" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
//                       Login
//                     </Link>
//                     <Link href="/signup" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
//                       Sign Up
//                     </Link>
//                   </>
//                 )} */}
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Search, User, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { filterOptions } from "@/lib/car-data";
// import Cookies from "js-cookie";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  const createFilterUrl = (filterType: string, value?: string) => {
    const params = new URLSearchParams();
    if (value) {
      params.set(filterType, value);
    }
    return `/buy-car?${params.toString()}`;
  };

  // useEffect(() => {
  //   const token = Cookies.get("tokenu");
  //   setIsLoggedIn(!!token);
  // }, []);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 ">
            {/* <span className="text-white font-bold text-sm">BC</span> */}
            <span></span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            BroCars
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex mx-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Buy Cars</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] gap-3 p-6">
                  <div className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-500 to-red-600 p-6 no-underline outline-none focus:shadow-md text-white"
                        href="/buy-car"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Browse All Cars
                        </div>
                        <p className="text-sm leading-tight text-orange-100">
                          Explore thousands of verified used cars
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <h4 className="mb-2 text-sm font-medium text-gray-900">
                        By Make
                      </h4>
                      <div className="space-y-1">
                        {filterOptions.makes.slice(0, 4).map((make) => (
                          <NavigationMenuLink key={make} asChild>
                            <Link
                              href={createFilterUrl("make", make)}
                              className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {make}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-medium text-gray-900">
                        By Body Type
                      </h4>
                      <div className="space-y-1">
                        {filterOptions.bodyTypes.slice(0, 4).map((bodyType) => (
                          <NavigationMenuLink key={bodyType} asChild>
                            <Link
                              href={createFilterUrl("bodyType", bodyType)}
                              className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {bodyType}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-medium text-gray-900">
                        By Price
                      </h4>
                      <div className="space-y-1">
                        {filterOptions.priceRanges.slice(0, 4).map((range) => (
                          <NavigationMenuLink key={range.label} asChild>
                            <Link
                              href={createFilterUrl(
                                "priceRange",
                                `${range.min}-${range.max}`
                              )}
                              className="block select-none rounded-md p-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {range.label}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/sell-car1"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Sell Car
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Car Finance</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[300px] p-4">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/finance"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        Overview
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Car finance options and benefits
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/finance/emi-calculator"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        EMI Calculator
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Calculate your monthly EMI
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/blog"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/compare"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Compare Cars
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem> 
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search Bar */}
        <div className="flex-1 max-w-sm mx-4 hidden md:block">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search cars..." className="pl-8" />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="@user" />
                    <AvatarFallback>MP</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                {/* <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem> */}
                {/* <DropdownMenuItem asChild>
                  <Link href="/my-cars">My Cars</Link>
                </DropdownMenuItem> */}
                {/* <DropdownMenuItem asChild>
                  <Link href="/bookings">My Bookings</Link>
                </DropdownMenuItem> */}
                {/* <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                  Logout
                </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          }

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/buy-car"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Buy Used Cars
                </Link>
                <Link
                  href="/sell-car1"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Sell Car
                </Link>
                <Link
                  href="/finance"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Car Finance
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                  {/* <Link
                  href="/profile"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link> */}
                {/* {!isLoggedIn && (
                  <>
                    <Link href="/login" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                      Login
                    </Link>
                    <Link href="/signup" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                      Sign Up
                    </Link>
                  </>
                )} */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

