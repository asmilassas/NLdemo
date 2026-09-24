// Centralized data for NL Lanka Travel & Tours
export const COMPANY_INFO = {
  name: 'NL Lanka',
  fullName: 'NL Lanka Travel & Tours',
  tagline: 'Private Sri Lanka Journeys & Chauffeur Guides',
  location: 'Negombo, Sri Lanka',
  address: 'No. 42 Beach Road, Ethukala, Negombo, Sri Lanka',
  phone: '+94 77 123 4567',
  phoneFormatted: '+94 77 123 4567',
  whatsappRaw: '94771234567',
  whatsappPrefill: 'Hello NL Lanka, I visited your website and would like to know more about your services.',
  email: 'info@nllanka.lk',
  hours: 'Mon - Sun: 24/7 Assistance for In-Tour Guests'
};

export const SOCIAL_LINKS = [
  { platform: 'Facebook', url: 'https://facebook.com/nllankatravel', label: 'Visit NL Lanka on Facebook' },
  { platform: 'Instagram', url: 'https://instagram.com/nllankatravel', label: 'Follow NL Lanka on Instagram' },
  { platform: 'TikTok', url: 'https://tiktok.com/@nllankatravel', label: 'Watch NL Lanka on TikTok' },
  { platform: 'WhatsApp', url: 'https://wa.me/94771234567?text=Hello%20NL%20Lanka%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services.', label: 'Chat with NL Lanka on WhatsApp' }
];

export const MAP_DESTINATIONS = [
  {
    n: 'Sigiriya',
    x: 155,
    y: 135,
    t: 'Climb Lion Rock at sunrise & explore ancient palaces',
    b: 'Jan - Apr',
    d: 2,
    p: 120,
    c: 'SGR',
    image: '/images/destination-sigiriya.jpg',
    tag: 'Cultural Triangle'
  },
  {
    n: 'Kandy',
    x: 150,
    y: 200,
    t: 'Temple of the Tooth Relic & misty tea-carpeted hills',
    b: 'Jan - Apr',
    d: 2,
    p: 110,
    c: 'KDY',
    image: '/images/destination-kandy.jpg',
    tag: 'Heritage & Tea'
  },
  {
    n: 'Ella',
    x: 180,
    y: 285,
    t: 'Nine Arch Bridge, mini Adams Peak & the iconic hill train',
    b: 'Dec - Mar',
    d: 3,
    p: 150,
    c: 'ELL',
    image: '/images/destination-ella.jpg',
    tag: 'Highland Nature'
  },
  {
    n: 'Yala',
    x: 205,
    y: 335,
    t: 'World-renowned leopard & elephant safaris at dawn',
    b: 'Feb - Jul',
    d: 2,
    p: 170,
    c: 'YLA',
    image: '/images/destination-yala.jpg',
    tag: 'Wildlife Safari'
  },
  {
    n: 'Galle',
    x: 130,
    y: 372,
    t: 'Historic Dutch Fort ramparts & golden coastal sunsets',
    b: 'Nov - Apr',
    d: 2,
    p: 100,
    c: 'GLE',
    image: '/images/destination-galle.jpg',
    tag: 'Colonial Coast'
  }
];

export const JOURNEYS = [
  {
    id: 1,
    title: 'Cultural Triangle & Heritage',
    cat: 'Culture',
    days: 7,
    code: 'SIGIRIYA',
    fromPrice: 640,
    image: '/images/destination-sigiriya.jpg',
    stops: 'CMB -> Sigiriya -> Kandy -> Dambulla',
    desc: 'Unearth ancient kingdoms, boulder fortresses, cave temples, and sacred Buddhist traditions.'
  },
  {
    id: 2,
    title: 'Hill Country & Cloud Forests',
    cat: 'Nature',
    days: 5,
    code: 'ELLA',
    fromPrice: 420,
    image: '/images/destination-ella.jpg',
    stops: 'CMB -> Nuwara Eliya -> Ella',
    desc: 'Ride the worlds most scenic blue train through cascading waterfalls and lush tea valleys.'
  },
  {
    id: 3,
    title: 'Southern Coast & Whales',
    cat: 'Beach',
    days: 6,
    code: 'GALLE',
    fromPrice: 560,
    image: '/images/southern-coast-whales.png',
    stops: 'CMB -> Bentota -> Mirissa -> Galle',
    desc: 'Turquoise ocean swells, stilt fishermen, colonial fortifications, and sea turtle havens.'
  },
  {
    id: 4,
    title: 'Honeymoon Island Bliss',
    cat: 'Honeymoon',
    days: 10,
    code: 'KANDY',
    fromPrice: 980,
    image: '/images/service-honeymoon.jpg',
    stops: 'CMB -> Kandy -> Ella -> Tangalle',
    desc: 'Boutique hill villas, candlelit beach dinners, and private chauffeured luxury for two.'
  },
  {
    id: 5,
    title: 'Wildlife Safari Trail',
    cat: 'Nature',
    days: 4,
    code: 'YALA',
    fromPrice: 360,
    image: '/images/destination-yala.jpg',
    stops: 'CMB -> Udawalawe -> Yala National Park',
    desc: 'Private 4x4 open-top jeep safaris tracking elusive Sri Lankan leopards and wild elephant herds.'
  },
  {
    id: 6,
    title: 'Grand Island Circuit',
    cat: 'Culture',
    days: 10,
    code: 'COLOMBO',
    fromPrice: 890,
    image: '/images/elephant.png',
    stops: 'CMB -> Sigiriya -> Kandy -> Ella -> Galle',
    desc: 'The definitive Sri Lanka grand tour covering history, mountains, wildlife, and tranquil beaches.'
  }
];

export const SERVICES = [
  {
    num: '01',
    title: 'Private Custom Tours & Itineraries',
    desc: '100% tailor-made routes built around your exact travel dates, travel pace, interests, and budget.',
    image: 'public/images/elephant.png',
    features: ['Custom day-by-day pacing', 'Curated sightseeing stops', 'Flexible on-road schedule']
  },
  {
    num: '02',
    title: 'Licensed Chauffeur-Guides & Fleet',
    desc: 'Courteous English-speaking drivers in sanitized, modern air-conditioned sedans, SUVs, and luxury passenger vans.',
    image: '/images/service-chauffeur.jpg',
    features: ['Government-certified drivers', 'Comprehensive tourist insurance', 'Bottled water & onboard Wi-Fi']
  },
  {
    num: '03',
    title: 'Round-the-Clock Airport Transfers',
    desc: 'Effortless airport pickup and drop-off at Bandaranaike International Airport (CMB) at any hour without surge pricing.',
    image: '/images/service-transfers.jpg',
    features: ['Nameboard arrival meet-up', 'Flight delay monitoring', 'Luggage assistance']
  },
  {
    num: '04',
    title: 'Boutique Hotels & Villa Stays',
    desc: 'Handpicked heritage bungalows, tea estate villas, and eco-resorts with pre-negotiated insider rates.',
    image: '/images/service-hotels.jpg',
    features: ['Hand-vetted boutique stays', 'Complimentary upgrades when available', 'Scenic valley views']
  },
  {
    num: '05',
    title: 'Honeymoons & Group Escapes',
    desc: 'Romantic bespoke honeymoon packages, multi-generational family journeys, and private small group expeditions.',
    image: '/images/service-honeymoon.jpg',
    features: ['Romantic surprises & dining', 'Spacious family vehicles', 'Dedicated 24/7 tour concierge']
  }
];

export const REVIEWS = [
  {
    quote: 'Absolutely seamless from pickup to drop-off. Our chauffeur-guide Samantha became like family and showed us hidden viewpoints we would never have found on our own.',
    author: 'Sarah Jenkins',
    country: 'United Kingdom',
    trip: '10-Day Island Circuit',
    stars: 5
  },
  {
    quote: 'Ella and Sigiriya were unforgettable. Every hotel check-in, entry ticket, and train ride was flawlessly synchronized. Exceptional professionalism by NL Lanka.',
    author: 'Marco Rossi',
    country: 'Italy',
    trip: 'Culture & Hill Country Tour',
    stars: 5
  },
  {
    quote: 'The perfect honeymoon experience! From private tea estate bungalows to sunset boat rides in Mirissa, we never had to worry about a single detail.',
    author: 'Aisha & Omar Al-Maktoum',
    country: 'United Arab Emirates',
    trip: 'Luxury Honeymoon Special',
    stars: 5
  },
  {
    quote: 'Travelling with our two young children felt so stress-free. The vehicle was spotless, child seats were provided, and our driver was always so patient and attentive.',
    author: 'David & Lisa Mueller',
    country: 'Germany',
    trip: 'Family Wildlife & Coast Tour',
    stars: 5
  }
];

export const TRUST_POINTS = [
  {
    num: '12+',
    label: 'Years of Excellence',
    desc: 'Rooted in Negombo with deep insider access across Sri Lanka’s 9 provinces.'
  },
  {
    num: '3,500+',
    label: 'Happy Guests',
    desc: 'Solo adventurers, couples, families, and private groups hosted seamlessly.'
  },
  {
    num: '4.9★',
    label: 'Customer Rating',
    desc: 'Verified reviews praising punctuality, safety, and warm Sri Lankan hospitality.'
  },
  {
    num: '100%',
    label: 'Custom Tailored',
    desc: 'No rigid group schedules—every itinerary is customized to your personal pace.'
  }
];

export const GALLERY = [
  { src: '/images/hero-sigiriya.jpg', title: 'Lion Rock Citadel', subtitle: 'Sigiriya Ancient Fortress' },
  { src: '/images/gallery-train.jpg', title: 'Scenic Hill Train', subtitle: 'Demodara & Ella Gap' },
  { src: '/images/gallery-elephant.jpg', title: 'Wild Elephants', subtitle: 'Udawalawe & Yala Safari' },
  { src: 'public/images/nuwaraeliya.png', title: 'Lush Ceylon Tea Terraces', subtitle: 'Nuwara Eliya Highlands' },
  { src: '/images/gallery-beach.jpg', title: 'Golden Palm Coastlines', subtitle: 'Mirissa & Southern Beaches' },
  { src: '/images/destination-galle.jpg', title: 'Historic Dutch Ramparts', subtitle: 'Galle Fort UNESCO World Heritage' }
];
