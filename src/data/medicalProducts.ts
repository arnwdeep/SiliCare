export interface MedicalProduct {
  id: string;
  name: string;
  subtitle: string;
  category: 'Bandages & Dressings' | 'First Aid Kits' | 'Wound Care & Antiseptics' | 'Health Monitors' | 'Personal Care & Gloves' | 'Pain & Recovery';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge: string;
  image: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  inStock: boolean;
}

export const MEDICAL_PRODUCTS: MedicalProduct[] = [
  {
    id: 'sterile-bandages-100',
    name: 'SiliCare Flexible Fabric Adhesive Bandages (100 Count)',
    subtitle: 'Breathable Sterile Waterproof Wound Protection',
    category: 'Bandages & Dressings',
    price: 9.99,
    originalPrice: 12.99,
    rating: 4.9,
    reviewsCount: 520,
    badge: '100% OTC',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    description: 'Ultra-flexible fabric adhesive strips engineered to stretch and conform to skin during movement. Features a non-stick absorbent pad for painless removal.',
    features: [
      'Four-sided seal isolates dirt, germs, and water from minor cuts',
      'Advanced long-lasting hypoallergenic adhesive suitable for sensitive skin',
      'Assorted sizes: 20 Small, 50 Medium, 20 Large, 10 Fingertip patches',
      'Sterile individually wrapped strips for emergency home & travel kits'
    ],
    specifications: {
      'Pack Quantity': '100 Strips Assorted',
      'Material': 'Woven Flexible Cotton Fabric',
      'Adhesive': 'Hypoallergenic Latex-Free',
      'Water Resistance': 'Splash & Sweat Resistant'
    },
    inStock: true
  },
  {
    id: 'trauma-firstaid-120',
    name: 'SiliCare Complete Home & Emergency First Aid Kit (120 Pcs)',
    subtitle: 'All-in-One Compact Medical Response Case',
    category: 'First Aid Kits',
    price: 29.50,
    originalPrice: 35.00,
    rating: 4.95,
    reviewsCount: 840,
    badge: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800',
    description: 'FDA-registered complete 120-piece first aid emergency kit in a water-resistant hard shell EVA case. Ideal for home, car, camping, and sports injuries.',
    features: [
      'Includes trauma shears, CPR mask, emergency blanket, and tweezers',
      'Sterile gauze pads, antiseptic wipes, burn gel, and CPR shield',
      'Organized mesh compartments for immediate emergency access',
      'Compact lightweight hard case fits easily in backpacks & glove boxes'
    ],
    specifications: {
      'Piece Count': '120 Certified Items',
      'Case Material': 'Water-Resistant Hard Shell EVA',
      'Dimensions': '7.5" x 5.1" x 2.2"',
      'Certification': 'FDA Registered First Aid Standard'
    },
    inStock: true
  },
  {
    id: 'elastic-compression-wrap',
    name: 'SiliCare Self-Adherent Elastic Compression Bandage Roll (6 Pack)',
    subtitle: 'Cohesive Athletic Wrap for Sprains & Support',
    category: 'Bandages & Dressings',
    price: 14.99,
    originalPrice: 18.00,
    rating: 4.85,
    reviewsCount: 310,
    badge: 'No Clips Needed',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800',
    description: 'Self-adhering cohesive elastic wrap that sticks to itself without pins or clips. Provides firm compression for joint strain, wrist, ankle, and knee support.',
    features: [
      'Sticks securely to itself without pulling skin or body hair',
      'Breathable non-woven porous fabric prevents moisture buildup',
      'Tears easily by hand without needing scissors',
      'Includes 6 individually poly-wrapped 3-inch x 5-yard rolls'
    ],
    specifications: {
      'Roll Dimensions': '3 Inches x 5 Yards (Stretched)',
      'Quantity': '6 Rolls Pack',
      'Elasticity': 'Up to 200% Stretch Support',
      'Material': 'Latex-Free Porous Non-Woven'
    },
    inStock: true
  },
  {
    id: 'sterile-gauze-pads-50',
    name: 'SiliCare Sterile Non-Stick Gauze Sponge Pads 4x4 (50 Pack)',
    subtitle: '12-Ply Absorbent Cushioning Wound Dressing',
    category: 'Wound Care & Antiseptics',
    price: 12.50,
    rating: 4.8,
    reviewsCount: 245,
    badge: '100% Sterile',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800',
    description: 'Ultra-absorbent 12-ply cotton gauze pads designed for cleaning, prepping, and dressing open wounds, abrasions, and surgical sites without sticking.',
    features: [
      'Low-linting construction minimizes loose fibers in open wounds',
      'Soft 12-ply cotton weave provides thick protective cushioning',
      'Individually peel-wrapped 2-pad sterile envelopes',
      'Ideal for applying antiseptic ointments and securing with medical tape'
    ],
    specifications: {
      'Pad Size': '4 Inches x 4 Inches (10cm x 10cm)',
      'Ply Rating': '12-Ply High Absorbency',
      'Pack Size': '50 Sterile Pads (25 Packs of 2)',
      'Material': '100% Pure Woven Cotton'
    },
    inStock: true
  },
  {
    id: 'antiseptic-cleansing-wipes',
    name: 'SiliCare Antiseptic BZK Wound Cleansing Wipes (100 Count)',
    subtitle: 'Sting-Free Alcohol-Free Disinfectant Towelettes',
    category: 'Wound Care & Antiseptics',
    price: 8.99,
    rating: 4.9,
    reviewsCount: 430,
    badge: 'Sting-Free',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800',
    description: 'Soothes and cleans minor cuts, scrapes, and burns without stinging. Formulated with Benzalkonium Chloride for effective skin disinfection.',
    features: [
      'Alcohol-free formula WILL NOT STING open skin',
      'Individually foil-sealed for maximum moisture retention & portability',
      'Safe for kids, face, and delicate skin areas',
      'Essential item for first aid kits, backpacks, and diaper bags'
    ],
    specifications: {
      'Active Ingredient': 'Benzalkonium Chloride 0.13%',
      'Quantity': '100 Individually Wrapped Wipes',
      'Formula': 'Alcohol-Free & Fragrance-Free',
      'Shelf Life': '3 Years Sealed'
    },
    inStock: true
  },
  {
    id: 'hydrocolloid-blister-bandages',
    name: 'SiliCare Hydrocolloid Gel Blister & Burn Shield Bandages (12 Pack)',
    subtitle: 'Moist Healing Hydrogel Cushion Patches',
    category: 'Bandages & Dressings',
    price: 11.99,
    originalPrice: 15.00,
    rating: 4.92,
    reviewsCount: 380,
    badge: 'Fast Healing',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800',
    description: 'Advanced hydrocolloid gel technology creates an optimal moist healing environment, relieving pressure pain and preventing scarring on blisters and friction spots.',
    features: [
      '100% Waterproof seal stays on through showers & swimming for days',
      'Absorbs wound fluid forming a white gel protective cushion',
      'Instant pain relief against shoe friction on heels and toes',
      'Ultra-thin flexible transparent edges blend invisibly with skin'
    ],
    specifications: {
      'Technology': 'Active Hydrocolloid Hydrogel Matrix',
      'Quantity': '12 Multi-Size Shield Patches',
      'Wear Duration': 'Up to 7 Days Per Cushion',
      'Waterproof': '100% Submersible'
    },
    inStock: true
  },
  {
    id: 'infrared-forehead-thermometer',
    name: 'SiliCare Non-Contact Digital Infrared Forehead Thermometer',
    subtitle: '1-Second Instant Instant Touchless Fever Scanner',
    category: 'Health Monitors',
    price: 24.99,
    originalPrice: 32.00,
    rating: 4.85,
    reviewsCount: 670,
    badge: 'Family Essential',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    description: 'Clinical grade touchless forehead thermometer delivering instant 1-second temperature readouts with color-coded fever guidance backlight.',
    features: [
      'Touchless scan from 1 - 2 inches distance prevents cross-contamination',
      'Tri-color backlit screen: Green (Normal), Yellow (Low Fever), Red (High Fever)',
      'Stores up to 32 past body temperature memory readings',
      'Dual mode: Body Temperature and Object/Room Temperature mode'
    ],
    specifications: {
      'Measurement Time': '≤ 1 Second Instant Read',
      'Accuracy': '± 0.2°C (± 0.4°F)',
      'Memory Storage': '32 Logs',
      'Power Source': '2x AAA Batteries (Included)'
    },
    inStock: true
  },
  {
    id: 'finger-pulse-oximeter',
    name: 'SiliCare Precision Digital Finger Pulse Oximeter',
    subtitle: 'Instant SpO2 Oxygen Saturation & Heart Rate Monitor',
    category: 'Health Monitors',
    price: 19.99,
    originalPrice: 26.00,
    rating: 4.88,
    reviewsCount: 910,
    badge: 'OLED Display',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800',
    description: 'Fingertip pulse oximeter for fast SpO2 blood oxygen level and pulse rate readings with clear dual-color OLED screen and plethysmograph waveform.',
    features: [
      'Accurate SpO2 blood oxygen measurements within ±2%',
      'Auto power-off after 8 seconds of inactivity to save battery',
      'Includes silicone protective boot, lanyard, and carrying pouch',
      'Suitable for adults, seniors, athletes, and aviation enthusiasts'
    ],
    specifications: {
      'SpO2 Range': '70% - 100% (±2% Accuracy)',
      'Pulse Range': '30 - 250 BPM',
      'Display': 'Rotating 4-Direction OLED Screen',
      'Battery Life': 'Up to 30 Hours Continuous Use'
    },
    inStock: true
  },
  {
    id: 'medical-tape-zinc-oxide',
    name: 'SiliCare Medical Grade Waterproof Cloth Tape (4 Roll Pack)',
    subtitle: 'Strong Adhesive Breathable Surgical Tape',
    category: 'Bandages & Dressings',
    price: 8.50,
    rating: 4.75,
    reviewsCount: 190,
    badge: 'Heavy Duty',
    image: 'https://images.unsplash.com/photo-1586942593568-29364ef88588?auto=format&fit=crop&q=80&w=800',
    description: 'Heavy duty zinc-oxide woven cloth tape designed to securely anchor dressings, splints, and tubing. Tears cleanly without fraying.',
    features: [
      'Waterproof formulation stays firmly attached during sweat and moisture',
      'High tensile strength cotton backing provides rigid support',
      'Tears easily by hand in both horizontal and vertical directions',
      'Includes 4 rolls (1-inch width x 10 yards length each)'
    ],
    specifications: {
      'Roll Dimensions': '1 Inch x 10 Yards per Roll',
      'Quantity': '4 Roll Pack',
      'Material': 'Woven Cotton Cloth with Zinc Oxide Adhesive',
      'Latex Free': '100% Hypoallergenic'
    },
    inStock: true
  },
  {
    id: 'instant-cold-ice-packs',
    name: 'SiliCare Instant Cold Ice Compression Packs (6 Count)',
    subtitle: 'Single-Use Squeeze Ice Gel Packs for Pain Relief',
    category: 'Pain & Recovery',
    price: 15.99,
    originalPrice: 19.99,
    rating: 4.9,
    reviewsCount: 280,
    badge: 'Instant Freeze',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800',
    description: 'Instant endothermic cold packs that require no freezing. Simply squeeze and shake to activate fast cooling relief for sprains, swelling, and bumps.',
    features: [
      'Activates in seconds with a simple squeeze — no freezer required',
      'Maintains therapeutic sub-freezing temperature for 30+ minutes',
      'Flexible soft-touch outer pouch contours comfortably to knees, ankles, & shoulders',
      'Must-have for sports sidelines, workplace first aid, and home recovery'
    ],
    specifications: {
      'Pack Size': '6 Inches x 9 Inches (6 Packs)',
      'Activation': 'Instant Chemical Endothermic Reaction',
      'Duration': '30+ Minutes Cold Therapy',
      'Single Use': 'Disposable & Non-Toxic'
    },
    inStock: true
  },
  {
    id: 'nitrile-exam-gloves-100',
    name: 'SiliCare Nitrile Medical Protective Gloves Box (100 Count)',
    subtitle: 'Powder-Free Latex-Free Micro-Textured Barrier',
    category: 'Personal Care & Gloves',
    price: 18.99,
    rating: 4.85,
    reviewsCount: 620,
    badge: 'Multi-Use',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800',
    description: 'Medical examination grade 4 mil nitrile gloves offering superior puncture resistance, tactile sensitivity, and allergen-free skin protection.',
    features: [
      '100% Latex-free and powder-free formulation prevents skin irritation',
      'Textured fingertips provide enhanced grip on wet and dry items',
      'High elastic stretch resists tears, punctures, and common household chemicals',
      'Ambidextrous fit with beaded cuffs for easy donning and removal'
    ],
    specifications: {
      'Quantity': '100 Gloves per Dispenser Box',
      'Thickness': '4.0 mil Palm & Finger',
      'Material': '100% Synthetic Nitrile Rubber',
      'Color': 'Clinical Sapphire Blue'
    },
    inStock: true
  },
  {
    id: 'saline-wound-wash-spray',
    name: 'SiliCare Sterile Saline Wound & Eye Wash Cleanser (2 Pack)',
    subtitle: 'Drug-Free Pressurized Isotonic Saline Rinse',
    category: 'Wound Care & Antiseptics',
    price: 13.50,
    rating: 4.9,
    reviewsCount: 310,
    badge: 'Drug-Free',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800',
    description: 'Sterile 0.9% sodium chloride pressurized saline wash for gentle, pain-free flushing of dirt, debris, and foreign particles from wounds and eyes.',
    features: [
      'Point-and-spray fine mist nozzle rinses without touching sensitive wounds',
      '100% Drug-free isotonic formula matches natural body fluids',
      'Preservative-free continuous spray operates at any angle',
      'Includes two 7.4 oz canister bottles for home and travel'
    ],
    specifications: {
      'Volume': '7.4 oz (210g) per Canister (2 Pack)',
      'Active Ingredients': '0.9% Sterile Sodium Chloride & Purified Water',
      'Nozzle': 'Gentle Targeted Spray Stream',
      'Preservatives': 'Zero Additives or Preservatives'
    },
    inStock: true
  }
];
