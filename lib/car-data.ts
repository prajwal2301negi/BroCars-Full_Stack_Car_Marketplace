import {Types} from 'mongoose'
export interface Car {
  id: number;
  _id?: Types.ObjectId,
  make: string;
  model: string;
  variant: string;
  year: number;
  price: number;
  originalPrice: number;
  displayImg?: {
    url: string;
    public_id: string
  },
  image2Avatar?:{
    url: string;
    public_id: string
  }
  image3Avatar?:{
    url: string;
    public_id: string
  }
  image4Avatar?:{
    url: string;
    public_id: string
  }
  image?:string,
  fuel: string;
  transmission: string;
  kms: number;
  location: string;
  owner: string;
  color: string;
  bodyType: string;
  engine: string;
  mileage: string;
  seatingCapacity: number;
  registrationNumber: string;
  registrationState: string;
  insuranceValidity: string;
  features:string[],
  specifications: {
    engine: string;
    maxPower: string;
    maxTorque: string;
    fuelTank: string;
    bootSpace: string;
    groundClearance: string;
    length: string;
    width: string;
    height: string;
  };
  verified: boolean;
  // inspectionReport: {
  //   exterior: string;
  //   interior: string;
  //   engine: string;
  //   electrical: string;
  //   ac: string;
  //   tyres: string;
  // };
}

export const carDatabase: Car[] = [
  {
    id: 1,
    make: 'Maruti Suzuki',
    model: 'Swift',
    variant: 'VDI',
    year: 2019,
    price: 650000,
    originalPrice: 720000,
    displayImg: {
      url: '/swift.webp',
      public_id: '/swift.webp',
    },
    image2Avatar: {
      url: '/swift.webp',
      public_id: '/swift.webp',
    },
    image3Avatar: {
      url: '/swift.webp',
      public_id: '/swift.webp',
    },
    image4Avatar: {
      url: '/swift.webp',
      public_id: '/swift.webp',
    },
    image: '/swift.webp',
    fuel: 'Diesel',
    transmission: 'Manual',
    kms: 45000,
    location: 'Delhi',
    owner: '1st Owner',
    color: 'Red',
    bodyType: 'Hatchback',
    engine: '1248 cc',
    mileage: '23 kmpl',
    seatingCapacity: 5,
    registrationNumber: 'DL01AB1234',
    registrationState: 'Delhi',
    insuranceValidity: '2025-03-15',
    features: ['Sunroof', 'Touchscreen Infotainment', 'Reverse Camera', 'Cruise Control', 'Wireless Charging', 'LED Headlights'],
    specifications: {
      engine: '1.3L DDiS Diesel',
      maxPower: '74 bhp @ 4000 rpm',
      maxTorque: '190 Nm @ 2000 rpm',
      fuelTank: '42 Litres',
      bootSpace: '268 Litres',
      groundClearance: '170 mm',
      length: '3840 mm',
      width: '1735 mm',
      height: '1530 mm',
    },
    verified: true,
    // inspectionReport: {
    //   exterior: 'Good',
    //   interior: 'Excellent',
    //   engine: 'Good',
    //   electrical: 'Good',
    //   ac: 'Working',
    //   tyres: 'Good'
    // }
  },
  {
    id: 2,
    make: 'Hyundai',
    model: 'Creta',
    variant: 'SX',
    year: 2020,
    price: 1250000,
    originalPrice: 1400000,
    image: '/creta.jpeg',
    fuel: 'Petrol',
    transmission: 'Automatic',
    kms: 32000,
    location: 'Mumbai',
    owner: '1st Owner',
    color: 'White',
    bodyType: 'SUV',
    engine: '1497 cc',
    mileage: '16 kmpl',
    seatingCapacity: 5,
    registrationNumber: 'MH02CD5678',
    registrationState: 'Maharashtra',
    insuranceValidity: '2025-08-20',
    features: ['Sunroof', 'Touchscreen Infotainment', 'Reverse Camera', 'Cruise Control', 'Wireless Charging', 'LED Headlights'],
    specifications: {
      engine: '1.5L Turbo Petrol',
      maxPower: '115 bhp @ 6200 rpm',
      maxTorque: '144 Nm @ 4200 rpm',
      fuelTank: '50 Litres',
      bootSpace: '433 Litres',
      groundClearance: '190 mm',
      length: '4300 mm',
      width: '1790 mm',
      height: '1635 mm',
    },
    verified: true,
    // inspectionReport: {
    //   exterior: 'Excellent',
    //   interior: 'Excellent',
    //   engine: 'Excellent',
    //   electrical: 'Good',
    //   ac: 'Working',
    //   tyres: 'Excellent'
    // }
  },
  {
    id: 3,
    make: 'Honda',
    model: 'City',
    variant: 'VX',
    year: 2018,
    price: 850000,
    originalPrice: 950000,
    image: '/HC.webp',
    fuel: 'Petrol',
    transmission: 'Manual',
    kms: 55000,
    location: 'Bangalore',
    owner: '2nd Owner',
    color: 'Silver',
    bodyType: 'Sedan',
    engine: '1497 cc',
    mileage: '17 kmpl',
    seatingCapacity: 5,
    registrationNumber: 'KA03EF9012',
    registrationState: 'Karnataka',
    insuranceValidity: '2024-12-10',
    features: ['Cruise Control', 'Leather Seats', 'Bluetooth Connectivity', 'Automatic Climate Control', 'Keyless Entry'],
    specifications: {
      engine: '1.5L i-VTEC Petrol',
      maxPower: '119 bhp @ 6600 rpm',
      maxTorque: '145 Nm @ 4600 rpm',
      fuelTank: '40 Litres',
      bootSpace: '506 Litres',
      groundClearance: '165 mm',
      length: '4549 mm',
      width: '1748 mm',
      height: '1489 mm',
    },
    verified: true,
    // inspectionReport: {
    //   exterior: 'Good',
    //   interior: 'Good',
    //   engine: 'Good',
    //   electrical: 'Good',
    //   ac: 'Working',
    //   tyres: 'Good'
    // }
  },
  {
    id: 4,
    make: 'Tata',
    model: 'Nexon',
    variant: 'XZ+ Electric',
    year: 2021,
    price: 1100000,
    originalPrice: 1200000,
    image: '/nexon.webp',
    fuel: 'Electric',
    transmission: 'Automatic',
    kms: 25000,
    location: 'Pune',
    owner: '1st Owner',
    color: 'Blue',
    bodyType: 'SUV',
    engine: 'Electric Motor',
    mileage: '312 km range',
    seatingCapacity: 5,
    registrationNumber: 'MH12GH3456',
    registrationState: 'Maharashtra',
    insuranceValidity: '2025-06-30',
    features: ['Electric Powertrain', 'Fast Charging', 'Connected Car Technology', 'Regenerative Braking', 'Digital Instrument Cluster'],
    specifications: {
      engine: 'Permanent Magnet Synchronous Motor',
      maxPower: '129 bhp',
      maxTorque: '245 Nm',
      fuelTank: '30.2 kWh Battery',
      bootSpace: '350 Litres',
      groundClearance: '209 mm',
      length: '3993 mm',
      width: '1811 mm',
      height: '1606 mm',
    },
    verified: true,
    // inspectionReport: {
    //   exterior: 'Excellent',
    //   interior: 'Excellent',
    //   engine: 'Excellent',
    //   electrical: 'Excellent',
    //   ac: 'Working',
    //   tyres: 'Good'
    // }
  },
  {
    id: 5,
    make: 'Toyota',
    model: 'Innova Crysta',
    variant: 'GX',
    year: 2019,
    price: 1850000,
    originalPrice: 2100000,
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Diesel',
    transmission: 'Manual',
    kms: 68000,
    location: 'Chennai',
    owner: '1st Owner',
    color: 'Grey',
    bodyType: 'MUV',
    engine: '2393 cc',
    mileage: '15 kmpl',
    seatingCapacity: 7,
    registrationNumber: 'TN09IJ7890',
    registrationState: 'Tamil Nadu',
    insuranceValidity: '2025-01-15',
    features: ['Captain Seats', '7 Seater Configuration', 'Touchscreen Infotainment', 'Dual Zone AC', 'Push Button Start'],
    specifications: {
      engine: '2.4L D-4D Diesel',
      maxPower: '148 bhp @ 3400 rpm',
      maxTorque: '343 Nm @ 1400-2800 rpm',
      fuelTank: '65 Litres',
      bootSpace: '300 Litres',
      groundClearance: '178 mm',
      length: '4735 mm',
      width: '1830 mm',
      height: '1795 mm',
    },
    verified: true,
    // inspectionReport: {
    //   exterior: 'Good',
    //   interior: 'Good',
    //   engine: 'Good',
    //   electrical: 'Good',
    //   ac: 'Working',
    //   tyres: 'Good'
    // }
  },
  {
    id: 6,
    make: 'Mahindra',
    model: 'XUV500',
    variant: 'W8',
    year: 2017,
    price: 1200000,
    originalPrice: 1350000,
    image: 'https://images.pexels.com/photos/2050718/pexels-photo-2050718.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Diesel',
    transmission: 'Manual',
    kms: 78000,
    location: 'Hyderabad',
    owner: '2nd Owner',
    color: 'Black',
    bodyType: 'SUV',
    engine: '2179 cc',
    mileage: '16 kmpl',
    seatingCapacity: 7,
    registrationNumber: 'TS07KL2345',
    registrationState: 'Telangana',
    insuranceValidity: '2024-11-25',
    features: ['Sunroof', 'Leather Seats', '4WD', 'Hill Hold Control', 'ESP', 'Tyre Pressure Monitoring'],
    specifications: {
      engine: '2.2L mHawk Diesel',
      maxPower: '140 bhp @ 3750 rpm',
      maxTorque: '330 Nm @ 1600-2800 rpm',
      fuelTank: '70 Litres',
      bootSpace: '720 Litres',
      groundClearance: '200 mm',
      length: '4585 mm',
      width: '1890 mm',
      height: '1785 mm',
    },
    verified: true,
    // inspectionReport: {
    //   exterior: 'Good',
    //   interior: 'Good',
    //   engine: 'Good',
    //   electrical: 'Good',
    //   ac: 'Working',
    //   tyres: 'Fair'
    // }
  },
  {
    id: 7,
    make: 'Maruti Suzuki',
    model: 'Baleno',
    variant: 'Alpha',
    year: 2020,
    price: 750000,
    originalPrice: 850000,
    image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Petrol',
    transmission: 'CVT',
    kms: 35000,
    location: 'Kolkata',
    owner: '1st Owner',
    color: 'Blue',
    bodyType: 'Hatchback',
    engine: '1197 cc',
    mileage: '21 kmpl',
    seatingCapacity: 5,
    registrationNumber: 'WB02MN6789',
    registrationState: 'West Bengal',
    insuranceValidity: '2025-04-18',
    features: ['SmartPlay Infotainment', 'Auto AC', 'Push Button Start', 'LED Projector Headlamps', 'UV Cut Glass'],
    specifications: {
      engine: '1.2L DualJet Petrol',
      maxPower: '83 bhp @ 6000 rpm',
      maxTorque: '113 Nm @ 4200 rpm',
      fuelTank: '37 Litres',
      bootSpace: '339 Litres',
      groundClearance: '170 mm',
      length: '3995 mm',
      width: '1745 mm',
      height: '1510 mm',
    },
    verified: true,
    // inspectionReport: {
    //   exterior: 'Excellent',
    //   interior: 'Excellent',
    //   engine: 'Good',
    //   electrical: 'Good',
    //   ac: 'Working',
    //   tyres: 'Good'
    // }
  },
  {
    id: 8,
    make: 'Hyundai',
    model: 'i20',
    variant: 'Sportz',
    year: 2018,
    price: 680000,
    originalPrice: 780000,
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Petrol',
    transmission: 'Manual',
    kms: 52000,
    location: 'Ahmedabad',
    owner: '1st Owner',
    color: 'White',
    bodyType: 'Hatchback',
    engine: '1197 cc',
    mileage: '18 kmpl',
    seatingCapacity: 5,
    registrationNumber: 'GJ01OP4567',
    registrationState: 'Gujarat',
    insuranceValidity: '2025-02-28',
    features: ['Touchscreen Infotainment', 'Rear AC Vents', 'Cooled Glove Box', 'Height Adjustable Driver Seat'],
    specifications: {
      engine: '1.2L Kappa Petrol',
      maxPower: '83 bhp @ 6000 rpm',
      maxTorque: '115 Nm @ 4000 rpm',
      fuelTank: '45 Litres',
      bootSpace: '295 Litres',
      groundClearance: '165 mm',
      length: '3995 mm',
      width: '1775 mm',
      height: '1505 mm',
    },
    verified: true,
    // inspectionReport: {
    //   exterior: 'Good',
    //   interior: 'Good',
    //   engine: 'Good',
    //   electrical: 'Good',
    //   ac: 'Working',
    //   tyres: 'Good'
    // }
  },
  {
    id: 9,
    make: 'Mahindra',
    model: 'Thar',
    variant: 'LX 4-STR Hard Top Diesel',
    year: 2022,
    price: 1450000,
    originalPrice: 1580000,
    image: 'https://images.pexels.com/photos/10074010/pexels-photo-10074010.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Diesel',
    transmission: 'Manual',
    kms: 21000,
    location: 'Delhi',
    owner: '1st Owner',
    color: 'Red',
    bodyType: 'SUV',
    engine: '2184 cc',
    mileage: '15 kmpl',
    seatingCapacity: 4,
    registrationNumber: 'DL01AB1234',
    registrationState: 'Delhi',
    insuranceValidity: '2026-01-15',
    features: ['4WD', 'Touchscreen', 'Convertible Roof', 'Cruise Control'],
    specifications: {
      engine: '2.2L mHawk Diesel',
      maxPower: '130 bhp @ 3750 rpm',
      maxTorque: '300 Nm @ 1600-2800 rpm',
      fuelTank: '57 Litres',
      bootSpace: 'No official value (limited)',
      groundClearance: '226 mm',
      length: '3985 mm',
      width: '1855 mm',
      height: '1844 mm',
    },
    verified: true
  },
  {
    id: 10,
    make: 'Mahindra',
    model: 'Scorpio',
    variant: 'S11 Diesel',
    year: 2021,
    price: 1320000,
    originalPrice: 1450000,
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Diesel',
    transmission: 'Manual',
    kms: 32000,
    location: 'Mumbai',
    owner: '1st Owner',
    color: 'Black',
    bodyType: 'SUV',
    engine: '2179 cc',
    mileage: '16 kmpl',
    seatingCapacity: 7,
    registrationNumber: 'MH12CD5678',
    registrationState: 'Maharashtra',
    insuranceValidity: '2025-10-12',
    features: ['Projector Headlamps', 'Touchscreen', 'Rear Camera', 'Side Steps'],
    specifications: {
      engine: '2.2L mHawk Diesel',
      maxPower: '140 bhp @ 3750 rpm',
      maxTorque: '320 Nm @ 1500-2800 rpm',
      fuelTank: '60 Litres',
      bootSpace: '460 Litres',
      groundClearance: '180 mm',
      length: '4456 mm',
      width: '1820 mm',
      height: '1995 mm',
    },
    verified: true
  },
  {
    id: 11,
    make: 'Toyota',
    model: 'Fortuner',
    variant: '2.8 4X2 Diesel AT',
    year: 2020,
    price: 2800000,
    originalPrice: 3200000,
    image: 'https://images.pexels.com/photos/1251196/pexels-photo-1251196.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Diesel',
    transmission: 'Automatic',
    kms: 58000,
    location: 'Chandigarh',
    owner: '1st Owner',
    color: 'White Pearl',
    bodyType: 'SUV',
    engine: '2755 cc',
    mileage: '14.2 kmpl',
    seatingCapacity: 7,
    registrationNumber: 'CH01DE1234',
    registrationState: 'Chandigarh',
    insuranceValidity: '2025-12-20',
    features: ['LED Headlights', 'Cruise Control', 'Infotainment', 'Leather Seats'],
    specifications: {
      engine: '2.8L Diesel',
      maxPower: '201 bhp @ 3000-3400 rpm',
      maxTorque: '500 Nm @ 1600-2800 rpm',
      fuelTank: '80 Litres',
      bootSpace: '296 Litres',
      groundClearance: '225 mm',
      length: '4795 mm',
      width: '1855 mm',
      height: '1835 mm',
    },
    verified: true
  },
  {
    id: 12,
    make: 'Honda',
    model: 'Civic',
    variant: 'ZX CVT Petrol',
    year: 2019,
    price: 1600000,
    originalPrice: 1950000,
    image: 'https://images.pexels.com/photos/1260585/pexels-photo-1260585.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Petrol',
    transmission: 'Automatic',
    kms: 45000,
    location: 'Pune',
    owner: '2nd Owner',
    color: 'Silver',
    bodyType: 'Sedan',
    engine: '1799 cc',
    mileage: '16.5 kmpl',
    seatingCapacity: 5,
    registrationNumber: 'MH14EF7890',
    registrationState: 'Maharashtra',
    insuranceValidity: '2025-08-05',
    features: ['Sunroof', 'LaneWatch Camera', 'Touchscreen', 'Push Start'],
    specifications: {
      engine: '1.8L i-VTEC Petrol',
      maxPower: '139 bhp @ 6500 rpm',
      maxTorque: '174 Nm @ 4300 rpm',
      fuelTank: '47 Litres',
      bootSpace: '430 Litres',
      groundClearance: '171 mm',
      length: '4656 mm',
      width: '1799 mm',
      height: '1433 mm',
    },
    verified: true
  },
  {
    id: 13,
    make: 'Honda',
    model: 'Amaze',
    variant: 'VX CVT Petrol',
    year: 2021,
    price: 800000,
    originalPrice: 920000,
    image: 'https://images.pexels.com/photos/3791360/pexels-photo-3791360.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Petrol',
    transmission: 'Automatic',
    kms: 26000,
    location: 'Jaipur',
    owner: '1st Owner',
    color: 'Blue',
    bodyType: 'Sedan',
    engine: '1199 cc',
    mileage: '18.6 kmpl',
    seatingCapacity: 5,
    registrationNumber: 'RJ14GK1234',
    registrationState: 'Rajasthan',
    insuranceValidity: '2026-01-01',
    features: ['Rear Camera', 'Keyless Entry', 'Touchscreen', 'Automatic AC'],
    specifications: {
      engine: '1.2L i-VTEC Petrol',
      maxPower: '90 bhp @ 6000 rpm',
      maxTorque: '110 Nm @ 4800 rpm',
      fuelTank: '35 Litres',
      bootSpace: '420 Litres',
      groundClearance: '170 mm',
      length: '3995 mm',
      width: '1695 mm',
      height: '1501 mm',
    },
    verified: true
  },
  {
    id: 14,
    make: 'Maruti Suzuki',
    model: 'Brezza',
    variant: 'ZXi Plus AT',
    year: 2023,
    price: 1230000,
    originalPrice: 1350000,
    image: 'https://images.pexels.com/photos/6757423/pexels-photo-6757423.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Petrol',
    transmission: 'Automatic',
    kms: 9000,
    location: 'Bangalore',
    owner: '1st Owner',
    color: 'Grey',
    bodyType: 'SUV',
    engine: '1462 cc',
    mileage: '19.8 kmpl',
    seatingCapacity: 5,
    registrationNumber: 'KA03MK4567',
    registrationState: 'Karnataka',
    insuranceValidity: '2026-05-10',
    features: ['HUD Display', 'Cruise Control', '360 Camera', 'Wireless Charging'],
    specifications: {
      engine: '1.5L K-Series Petrol',
      maxPower: '102 bhp @ 6000 rpm',
      maxTorque: '136.8 Nm @ 4400 rpm',
      fuelTank: '48 Litres',
      bootSpace: '328 Litres',
      groundClearance: '198 mm',
      length: '3995 mm',
      width: '1790 mm',
      height: '1685 mm',
    },
    verified: true
  },
  {
    id: 15,
    make: 'Hyundai',
    model: 'Verna',
    variant: 'SX(O) Turbo DCT',
    year: 2023,
    price: 1570000,
    originalPrice: 1700000,
    image: 'https://images.pexels.com/photos/12047090/pexels-photo-12047090.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Petrol',
    transmission: 'Automatic',
    kms: 10000,
    location: 'Lucknow',
    owner: '1st Owner',
    color: 'Black',
    bodyType: 'Sedan',
    engine: '1482 cc',
    mileage: '20 kmpl',
    seatingCapacity: 5,
    registrationNumber: 'UP32GT3211',
    registrationState: 'Uttar Pradesh',
    insuranceValidity: '2026-02-01',
    features: ['ADAS', 'Ventilated Seats', 'Bose Sound System', 'Sunroof'],
    specifications: {
      engine: '1.5L Turbo GDi Petrol',
      maxPower: '160 bhp @ 5500 rpm',
      maxTorque: '253 Nm @ 1500-3500 rpm',
      fuelTank: '45 Litres',
      bootSpace: '528 Litres',
      groundClearance: '165 mm',
      length: '4535 mm',
      width: '1765 mm',
      height: '1475 mm',
    },
    verified: true
  },
  {
    id: 16,
    make: 'Tata',
    model: 'Harrier',
    variant: 'XZ Plus Diesel',
    year: 2022,
    price: 1750000,
    originalPrice: 1900000,
    image: 'https://images.pexels.com/photos/6316062/pexels-photo-6316062.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Diesel',
    transmission: 'Manual',
    kms: 18000,
    location: 'Bhopal',
    owner: '1st Owner',
    color: 'Dark Edition Black',
    bodyType: 'SUV',
    engine: '1956 cc',
    mileage: '16.35 kmpl',
    seatingCapacity: 5,
    registrationNumber: 'MP04YZ4567',
    registrationState: 'Madhya Pradesh',
    insuranceValidity: '2025-09-30',
    features: ['Panoramic Sunroof', 'Terrain Modes', 'ESP', 'Connected Car Tech'],
    specifications: {
      engine: '2.0L Kryotec Diesel',
      maxPower: '170 bhp @ 3750 rpm',
      maxTorque: '350 Nm @ 1750-2500 rpm',
      fuelTank: '50 Litres',
      bootSpace: '425 Litres',
      groundClearance: '205 mm',
      length: '4598 mm',
      width: '1894 mm',
      height: '1706 mm',
    },
    verified: true
  },
  {
    id: 17,
    make: 'Tata',
    model: 'Safari',
    variant: 'XZA Plus Adventure Edition',
    year: 2023,
    price: 2050000,
    originalPrice: 2250000,
    image: 'https://images.pexels.com/photos/15560348/pexels-photo-15560348.jpeg?auto=compress&cs=tinysrgb&w=800',
    fuel: 'Diesel',
    transmission: 'Automatic',
    kms: 12000,
    location: 'Kolkata',
    owner: '1st Owner',
    color: 'Tropical Mist',
    bodyType: 'SUV',
    engine: '1956 cc',
    mileage: '16.14 kmpl',
    seatingCapacity: 6,
    registrationNumber: 'WB12AB9876',
    registrationState: 'West Bengal',
    insuranceValidity: '2026-03-05',
    features: ['Captain Seats', 'Panoramic Sunroof', 'Ventilated Seats', 'JBL Sound'],
    specifications: {
      engine: '2.0L Kryotec Diesel',
      maxPower: '170 bhp @ 3750 rpm',
      maxTorque: '350 Nm @ 1750-2500 rpm',
      fuelTank: '50 Litres',
      bootSpace: '447 Litres',
      groundClearance: '205 mm',
      length: '4661 mm',
      width: '1894 mm',
      height: '1786 mm',
    },
    verified: true
  }


];

export const filterOptions = {
  makes: ["Hyundai", "Honda", "Toyota", "Tata", "Maruti Suzuki", "Volkswagen", "Mahindra", "Kia", "Nissan", "Ford", "Jeep", "Renault", "Skoda", "MG", "BMW", "Audi", "Jaguar", "Rover", "Mercedes"],
  models: {
    'Maruti Suzuki': ['Swift', 'Baleno', 'Dzire', 'Vitara Brezza', 'Alto', 'WagonR'],
    'Hyundai': ['Creta', 'i20', 'Verna', 'Venue', 'Grand i10', 'Santro'],
    'Honda': ['City', 'Amaze', 'Jazz', 'WR-V', 'CR-V', 'Civic'],
    'Tata': ['Nexon', 'Harrier', 'Safari', 'Altroz', 'Tigor', 'Punch'],
    'Toyota': ['Innova Crysta', 'Fortuner', 'Glanza', 'Urban Cruiser', 'Camry', 'Yaris', ],
    'Mahindra': ['XUV500', 'Scorpio', 'Bolero', 'XUV300', 'Thar', 'KUV100']
  },
  fuelTypes: ['Petrol', 'Diesel', 'CNG', 'Electric', 'Hybrid'],
  transmissions: ['Manual', 'Automatic', 'CVT'],
  bodyTypes: ['Hatchback', 'Sedan', 'SUV', 'MUV', 'Convertible', 'Coupe', "LuxurySedan", "LuxurySUV"],
  cities: ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata', 'Ahmedabad'],
  colors: ['White', 'Black', 'Silver', 'Red', 'Blue', 'Grey', 'Brown', 'Green'],
  owners: ['1st Owner', '2nd Owner', '3rd Owner', '4th Owner'],
  priceRanges: [
    { label: 'Under 2 Lakh', min: 0, max: 200000 },
    { label: '2-5 Lakh', min: 200000, max: 500000 },
    { label: '5-10 Lakh', min: 500000, max: 1000000 },
    { label: '10-20 Lakh', min: 1000000, max: 2000000 },
    { label: 'Above 20 Lakh', min: 2000000, max: 10000000 }
  ],
  yearRanges: [
    { label: '2020-2024', min: 2020, max: 2024 },
    { label: '2015-2019', min: 2015, max: 2019 },
    { label: '2010-2014', min: 2010, max: 2014 },
    { label: 'Before 2010', min: 2000, max: 2009 }
  ],
  kmRanges: [
    { label: 'Under 20,000 km', min: 0, max: 20000 },
    { label: '20,000-50,000 km', min: 20000, max: 50000 },
    { label: '50,000-1,00,000 km', min: 50000, max: 100000 },
    { label: 'Above 1,00,000 km', min: 100000, max: 500000 }
  ]
};

export function filterCars(cars: Car[], filters: any): Car[] {
  return cars.filter(car => {
    // Make filter
    if (filters.make && !filters.make.split(',').some((make: string) => make.trim() === car.make)) {
      return false;
    }

    // Model filter
    if (filters.model && !filters.model.split(',').some((model: string) => model.trim() === car.model)) {
      return false;
    }

    // Price range filter
    if (filters.priceMin && car.price < filters.priceMin) return false;
    if (filters.priceMax && car.price > filters.priceMax) return false;

    // Fuel type filter
    if (filters.fuelType && !filters.fuelType.split(',').some((fuel: string) => fuel.trim() === car.fuel)) {
      return false;
    }

    // Transmission filter
    if (filters.transmission && !filters.transmission.split(',').some((trans: string) => trans.trim() === car.transmission)) {
      return false;
    }

    // Body type filter
    if (filters.bodyType && !filters.bodyType.split(',').some((body: string) => body.trim() === car.bodyType)) {
      return false;
    }

    // Year filter
    if (filters.yearMin && car.year < filters.yearMin) return false;
    if (filters.yearMax && car.year > filters.yearMax) return false;

    // KM filter
    if (filters.kmMin && car.kms < filters.kmMin) return false;
    if (filters.kmMax && car.kms > filters.kmMax) return false;

    // City filter
    if (filters.city && !filters.city.split(',').some((city: string) => city.trim() === car.location)) {
      return false;
    }

    // Color filter
    if (filters.color && !filters.color.split(',').some((color: string) => color.trim() === car.color)) {
      return false;
    }

    // Owner filter
    if (filters.owner && !filters.owner.split(',').some((owner: string) => owner.trim() === car.owner)) {
      return false;
    }

    return true;
  });
}

export function sortCars(cars: Car[], sortBy: string): Car[] {
  const sortedCars = [...cars];

  switch (sortBy) {
    case 'price-low':
      return sortedCars.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sortedCars.sort((a, b) => b.price - a.price);
    case 'year-new':
      return sortedCars.sort((a, b) => b.year - a.year);
    case 'year-old':
      return sortedCars.sort((a, b) => a.year - b.year);
    case 'km-low':
      return sortedCars.sort((a, b) => a.kms - b.kms);
    case 'km-high':
      return sortedCars.sort((a, b) => b.kms - a.kms);
    default:
      return sortedCars;
  }
}