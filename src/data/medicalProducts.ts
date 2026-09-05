export interface MedicalProduct {
  id: string;
  name: string;
  subtitle: string;
  category: 'Genomics' | 'Diagnostics' | 'Clinical Devices' | 'Protective Gear' | 'Supplements' | 'Emergency';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  badge: string;
  rxRequired: boolean;
  image: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  inStock: boolean;
}

export const MEDICAL_PRODUCTS: MedicalProduct[] = [
  {
    id: 'genemed-360',
    name: 'SiliCare GeneMed™ 360 Full-Genome Test Kit',
    subtitle: 'Next-Generation High-Throughput DNA Diagnostics',
    category: 'Genomics',
    price: 249.00,
    originalPrice: 299.00,
    rating: 4.9,
    reviewsCount: 342,
    badge: 'Clinical Grade',
    rxRequired: false,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800',
    description: 'Comprehensive 30x depth whole genome sequencing analyzing 20,000+ genes for disease risk, pharmacogenomics, carrier status, and metabolic traits.',
    features: [
      '30x Whole Genome Coverage with CLIA/CAP certified lab analysis',
      'Instant encrypted portal access with lifetime genetic updates',
      'Medication response panel analyzing 150+ pharmaceutical compounds',
      'Includes 1-on-1 virtual consultation with a certified genetic counselor'
    ],
    specifications: {
      'Sample Type': 'Saliva / Buccal Swab',
      'Turnaround Time': '7 - 10 Business Days',
      'Certification': 'CLIA & CAP Accredited',
      'Data Privacy': 'HIPAA & GDPR Compliant Encrypted Storage'
    },
    inStock: true
  },
  {
    id: 'cgm-sensor-v4',
    name: 'Continuous Molecular Glucose Monitor V4',
    subtitle: 'Subcutaneously Calibration-Free Sensor System',
    category: 'Diagnostics',
    price: 129.00,
    rating: 4.8,
    reviewsCount: 218,
    badge: 'FDA Cleared',
    rxRequired: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    description: 'Real-time 24/7 interstitial glucose monitoring without fingersticks. Features custom glycemic variability alerts and automatic smartphone sync.',
    features: [
      '14-day continuous wear duration per water-resistant sensor',
      'Real-time Bluetooth telemetry updates every 60 seconds',
      'Hypoglycemia & Hyperglycemia predictive threshold alerts',
      'Direct integration with SiliCare Health Cloud App'
    ],
    specifications: {
      'Wear Period': '14 Days per Sensor',
      'Water Resistance': 'IP68 (Up to 8 ft underwater)',
      'Connectivity': 'BLE 5.3 Low Energy',
      'Prescription': 'Rx Required'
    },
    inStock: true
  },
  {
    id: 'pulse-ecg-pro',
    name: 'SiliCare Multi-Lead ECG & SpO2 Clinical Sensor',
    subtitle: 'Portable Medical-Grade Cardiovascular Monitor',
    category: 'Clinical Devices',
    price: 189.00,
    originalPrice: 219.00,
    rating: 4.9,
    reviewsCount: 156,
    badge: 'Medical Device Class II',
    rxRequired: false,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    description: 'Instant 30-second 6-lead electrocardiogram readout with continuous pulse oximetry, detecting arrhythmia, AFib, bradycardia, and oxygen saturation.',
    features: [
      '6-Lead ECG accuracy with instantaneous AI waveform evaluation',
      'Medical SpO2 accuracy within ±1.5% margin of error',
      'Exportable PDF cardiac reports formatted for physician review',
      'Rechargeable Lithium-Polymer battery lasting 500+ measurements'
    ],
    specifications: {
      'Lead Configuration': '6-Lead Dual-Finger & Chest Electrodes',
      'Display': 'OLED High Resolution Waveform Screen',
      'Battery': 'Rechargeable USB-C (30-day standby)',
      'Clinical Clearance': 'CE Medical & FDA 510(k)'
    },
    inStock: true
  },
  {
    id: 'oxygen-concentrator-5l',
    name: 'SiliCare Hospital-Grade Portable Oxygen Concentrator 5L',
    subtitle: 'Continuous Flow Medical Oxygen Generator',
    category: 'Clinical Devices',
    price: 899.00,
    originalPrice: 999.00,
    rating: 4.95,
    reviewsCount: 89,
    badge: 'Rx Required',
    rxRequired: true,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800',
    description: 'Quiet, high-efficiency 93% ±3% oxygen purity output for respiratory assistance. Compact lightweight design suitable for home and mobile therapy.',
    features: [
      'Delivers up to 5 Liters per minute high-purity medical oxygen',
      'Ultra-silent operation below 38 dB whisper motor',
      'Dual power: AC Wall Plug and 4-hour hot-swappable Battery Pack',
      'Built-in HEPA filtration and molecular sieve technology'
    ],
    specifications: {
      'Oxygen Purity': '93% ± 3% at all flow rates',
      'Weight': '4.8 kg (10.5 lbs)',
      'Noise Level': '≤ 38 dB(A)',
      'Warranty': '3-Year Manufacturer Medical Warranty'
    },
    inStock: true
  },
  {
    id: 'ultrasonic-nebulizer',
    name: 'SiliCare AI Mesh Ultrasonic Nebulizer Pro',
    subtitle: 'Handheld Aerosol Delivery Device for Targeted Airways',
    category: 'Clinical Devices',
    price: 89.00,
    rating: 4.75,
    reviewsCount: 194,
    badge: 'In Stock',
    rxRequired: false,
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800',
    description: 'Micro-pore laser mesh generating 2.5µm fine mist particles for rapid absorption into bronchial tissues with zero medication residue.',
    features: [
      'Laser-etched titanium mesh produces fine <3.0µm mist particles',
      'Self-cleaning reverse vibration mode prevents clogging',
      'Pocket-sized design with silent piezo-electric transducer',
      'Includes adult mask, pediatric mask, and direct mouthpiece'
    ],
    specifications: {
      'Particle Size (MMAD)': '2.5 µm ± 0.5 µm',
      'Nebulization Rate': '≥ 0.35 ml/min',
      'Medication Capacity': '10 ml max',
      'Power Source': 'AA Batteries or USB Cable'
    },
    inStock: true
  },
  {
    id: 'aed-defibrillator',
    name: 'Automated External Defibrillator (AED) ShockPak S1',
    subtitle: 'Smart Voice-Guided Cardiac Emergency Response',
    category: 'Emergency',
    price: 1150.00,
    originalPrice: 1299.00,
    rating: 5.0,
    reviewsCount: 47,
    badge: 'Emergency Ready',
    rxRequired: false,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    description: 'Rugged emergency AED with real-time CPR feedback, bilingual voice prompts, and pre-connected dual adult/pediatric smart electrode pads.',
    features: [
      'Real-time chest compression depth & tempo guidance',
      'Automatic daily self-test diagnostics ensuring 100% readiness',
      '5-Year long-life non-rechargeable standby lithium battery pack',
      'IP55 dust and water jet enclosure for harsh environments'
    ],
    specifications: {
      'Energy Output': 'Biphasic Truncated Exponential 150J - 360J',
      'Battery Standby': '5 Years Installed',
      'Pads Expiration': '4 Years Pre-Connected',
      'Enclosure Rating': 'IP55 Outdoor Grade'
    },
    inStock: true
  },
  {
    id: 'sterile-gloves-100',
    name: 'SiliCare Medical Nitrile Examination Gloves (100 Pack)',
    subtitle: 'Powder-Free Micro-Textured Barrier Protection',
    category: 'Protective Gear',
    price: 22.50,
    rating: 4.85,
    reviewsCount: 412,
    badge: 'ASTM D6319',
    rxRequired: false,
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&q=80&w=800',
    description: 'Heavy-duty 5 mil puncture-resistant medical grade nitrile gloves providing tactile sensitivity and superior chemical barrier resistance.',
    features: [
      'Tested for use with chemotherapy drugs & biohazards',
      'Micro-textured fingertips for precise wet & dry grip',
      '100% Latex-free and non-allergenic formulation',
      'Beaded cuff design for tear-free donning'
    ],
    specifications: {
      'Material': '100% Synthetic Nitrile',
      'Thickness': '5.0 mil Palm / 5.5 mil Finger',
      'Color': 'Clinical Ice Blue',
      'Standard': 'FDA 510(k) Medical Examination Grade'
    },
    inStock: true
  },
  {
    id: 'n95-respirator-50',
    name: 'NIOSH N95 Certified Medical Respirator Box (50 Count)',
    subtitle: '3D Folding Surgical Fluid-Resistant Masks',
    category: 'Protective Gear',
    price: 34.00,
    rating: 4.9,
    reviewsCount: 320,
    badge: 'NIOSH Approved',
    rxRequired: false,
    image: 'https://images.unsplash.com/photo-1586942593568-29364ef88588?auto=format&fit=crop&q=80&w=800',
    description: 'High-filtration 5-layer electrostatically charged filter media capturing ≥95% of airborne particulate matter, bacteria, and viral aerosols.',
    features: [
      'NIOSH TC-84A approval certification number clearly stamped',
      'Fluid penetration resistance at 160 mmHg ASTM F1862',
      'Flexible padded nose clip and cushioned head straps',
      'Individually wrapped sterile hygienic packaging'
    ],
    specifications: {
      'Filtration Efficiency': '≥ 95% at 0.3 micron particle size',
      'Style': '3D Folded Ergonomic Contour',
      'Approval': 'NIOSH & FDA Cleared Surgical N95',
      'Quantity': '50 Masks per Box'
    },
    inStock: true
  },
  {
    id: 'nad-longevity-booster',
    name: 'SiliCare Liposomal NAD+ Cellular Repair (60 Capsules)',
    subtitle: 'Bio-Enhanced Mitochondrial & DNA Longevity Matrix',
    category: 'Supplements',
    price: 69.00,
    originalPrice: 85.00,
    rating: 4.88,
    reviewsCount: 178,
    badge: 'Cellular Science',
    rxRequired: false,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800',
    description: 'Pharmaceutical-grade liposomal NAD+ precursor with Resveratrol and TTM for optimal cellular energy, sirtuin activation, and DNA repair support.',
    features: [
      'Liposomal phospholipid encapsulation for 8x absorption rate',
      'Supports PARP enzyme activity for natural cellular DNA repair',
      'Third-party HPLC laboratory tested for 99.8% compound purity',
      'Vegan, Non-GMO, zero artificial preservatives or fillers'
    ],
    specifications: {
      'Serving Size': '2 Capsules Daily (500mg Active NAD+)',
      'Purity': '99.8% HPLC Certified',
      'Packaging': 'Light-Shielded Amber Glass Bottle',
      'Origin': 'Formulated in cGMP Certified USA Facility'
    },
    inStock: true
  }
];
