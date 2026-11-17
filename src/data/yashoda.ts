export const clinic = {
  name: "YASHODA DENTAL CLINIC",
  nameDisplay: "Yashoda Dental Clinic",
  tagline: "Trusted, Affordable Dental Care in Surya Nagar, Lucknow",
  phone: "+91 91616 04014",
  phoneAlt: "+91 73762 01090",
  whatsapp: "919161604014",
  email: "info@yashodadentalclinic.com",
  address: "Vikram Nagar, Surya Nagar, Lucknow, Uttar Pradesh 226011",
  landmark: "Near Surya Nagar Crossing, Rajajipuram / Para Kunwar area, Lucknow",
  hours: {
    weekdays: "Mon – Sat",
    morning: "10:00 AM – 1:30 PM",
    evening: "5:00 PM – 9:30 PM",
    sunday: "Sunday: 10:00 AM – 1:30 PM (Morning only)",
  },
  mapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!2d!2m!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sYashoda%20Dental%20Clinic!5e0!3m2!1sen!2sus!4v1",
  rating: "4.8",
  reviewCount: "43+",
  links: {
    justdial:
      "https://justdial.com/Lucknow/Yshoda-Dental-Clinic-Near-Surya-Nagar-Crossing-Rajaji-Puram/0522PX522-X522-190115120112-T4I6_BZDET",
    magicpin:
      "https://magicpin.in/Lucknow/Para-Kunwar/Healthcare/Yashoda-Dental-Clinic",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us?", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  label: "Yashoda Dental Clinic",
  headline: [
    { part: "Trusted, Affordable", type: "sans" as const },
    { part: "Dental Care", type: "sans" as const },
    { part: "in Surya Nagar, Lucknow", type: "serif" as const },
  ],
  badge: `★ ${clinic.rating} / 5 — ${clinic.reviewCount} Happy Patients`,
  subhead:
    "Comprehensive dental care for your family. Root canals, teeth whitening, crowns, fillings, and gentle extractions at honest, affordable prices.",
  cta: "( Book on WhatsApp )",
  whatsappUrl: `https://wa.me/${clinic.whatsapp}`,
  image:
    "/assets/hero.jpeg",
  imageAlt: "Smiling woman with curly hair close-up",
};

export const about = {
  label: "About",
  heading: [
    { part: "Care From", type: "sans" as const },
    { part: "Dr. Yadav", type: "serif" as const },
  ],
  text:
    "Yashoda Dental Clinic is a trusted neighborhood dental clinic in Surya Nagar, Lucknow. Led by Dr. Yadav (BDS), we provide gentle, honest, and affordable dental care for patients of all ages. From routine check-ups to root canals and teeth whitening, your smile is in experienced hands.",
  doctorPlaceholder:
    "Dr. Yadav, BDS — Lead Dentist.",
  stats: [
    { value: "4.8★", label: "Patient Rating" },
    { value: "43+", label: "Verified Reviews" },
    { value: "42+", label: "Clinic Photos" },
  ],
  image:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
  imageAlt: "Yashoda Dental Clinic interior",
};

export const services = {
  label: "Services",
  heading: [
    { part: "Treatments We", type: "sans" as const },
    { part: "Offer", type: "serif" as const },
  ],
  text:
    "We offer comprehensive dentistry with a focus on affordable, painless treatment. Our most sought-after services include root canal treatment, teeth whitening & scaling, crowns, bridges, veneers, extractions, fillings, and general oral checkups.",
  items: [
    {
      id: 1,
      num: "(01)",
      title: [{ part: "Root Canal", type: "sans" }, { part: "Treatment", type: "serif" }],
      desc:
        "Painless RCT to save your natural tooth and relieve dental discomfort.",
      icon: "https://images.unsplash.com/photo-1601326683917-6e60143ad69f?q=80&w=400&auto=format&fit=crop",
      iconAlt: "Root canal treatment illustration",
    },
    {
      id: 2,
      num: "(02)",
      title: [{ part: "Teeth Whitening", type: "sans" }],
      desc:
        "Professional whitening and scaling for a brighter, cleaner smile.",
      icon: "https://images.unsplash.com/photo-1607691215263-0a1318e485f0?q=80&w=400&auto=format&fit=crop",
      iconAlt: "Teeth whitening illustration",
    },
    {
      id: 3,
      num: "(03)",
      title: [{ part: "Crowns", type: "sans" }, { part: "Bridges & Veneers", type: "serif" }],
      desc:
        "Durable crowns, bridges, and veneers to restore shape and function.",
      icon: "https://images.unsplash.com/photo-1594487911162-1e7182e011c5?q=80&w=400&auto=format&fit=crop",
      iconAlt: "Crowns and bridges illustration",
    },
    {
      id: 4,
      num: "(04)",
      title: [{ part: "Extractions", type: "sans" }, { part: "Fillings", type: "serif" }],
      desc:
        "Gentle tooth extractions and quality fillings for cavities.",
      icon: "https://images.unsplash.com/photo-1602848603123-7e77a0238592?q=80&w=400&auto=format&fit=crop",
      iconAlt: "Extraction and filling illustration",
    },
    {
      id: 5,
      num: "(05)",
      title: [{ part: "Oral Checkup", type: "sans" }, { part: "Preventive Care", type: "serif" }],
      desc:
        "Regular dental exams and preventive care for the whole family.",
      icon: "https://images.unsplash.com/photo-1605047698467-7fb0859d4503?q=80&w=400&auto=format&fit=crop",
      iconAlt: "Routine check-up illustration",
    },
  ],
};

export const whyUs = {
  label: "Why Us?",
  heading: [
    { part: "Why Patients", type: "sans" as const },
    { part: "Choose Us", type: "serif" as const },
  ],
  items: [
    {
      title: "Affordable pricing",
      desc: "Honest treatment plans with transparent, budget-friendly costs.",
      icon: "Tag",
    },
    {
      title: "Polite & friendly care",
      desc: "Dr. Yadav is known for a calm, approachable manner and clear guidance.",
      icon: "User",
    },
    {
      title: "Effective, painless treatment",
      desc: "Right treatment, expert care, and a good patient experience.",
      icon: "Smile",
    },
    {
      title: "Convenient location",
      desc: "Near Surya Nagar Crossing, Rajajipuram / Para Kunwar area, Lucknow.",
      icon: "MapPin",
    },
  ],
};

export const team = {
  label: "Team",
  heading: [
    { part: "Meet", type: "sans" as const },
    { part: "Dr. Yadav", type: "serif" as const },
  ],
  members: [
    {
      name: "Dr. Yadav",
      role: "Lead Dentist, BDS",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
      imageAlt: "Dr. Yadav",
    },
  ],
};

export const testimonials = {
  label: "Testimonials",
  heading: [
    { part: "Patient", type: "sans" as const },
    { part: "Experiences", type: "serif" as const },
  ],
  subtext:
    "Affordable pricing, polite care, and painless treatment — hear what our patients say.",
  largeImage:
    "https://images.unsplash.com/photo-1606981681337-2071320605e2?q=80&w=1000&auto=format&fit=crop",
  largeImageAlt: "Dentist treating a patient",
  tallImage:
    "https://images.unsplash.com/photo-1588800543862-44b6f60633c3?q=80&w=800&auto=format&fit=crop",
  tallImageAlt: "Smiling patient",
  reviews: [
    {
      name: "Rahul",
      tag: "Root Canal Treatment",
      rating: 5,
      text: "Dr. Yadav explained everything clearly and the RCT was completely painless. Most importantly, the charges were very affordable.",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Pooja",
      tag: "Teeth Whitening",
      rating: 5,
      text: "Friendly doctor and staff. My teeth look much brighter after scaling and whitening. Highly recommend in Surya Nagar.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Amit",
      tag: "Dental Filling",
      rating: 5,
      text: "Honest treatment plan, no unnecessary procedures. Good experience at Yashoda Dental Clinic.",
      avatar: "https://images.unsplash.com/photo-1594824476967-48c9b801ed21?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Sneha",
      tag: "Tooth Extraction",
      rating: 5,
      text: "The extraction was quick and gentle. The clinic is clean and located near Surya Nagar Crossing.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    },
  ],
};

export const faqs = [
  {
    q: "What are your clinic hours?",
    a: "We are open Monday to Saturday from 10:00 AM to 1:30 PM and 5:00 PM to 9:30 PM. On Sunday, we are open from 10:00 AM to 1:30 PM only.",
  },
  {
    q: "Do you offer root canal treatment?",
    a: "Yes. We provide painless root canal treatment (RCT) to save your natural tooth.",
  },
  {
    q: "Is teeth whitening available?",
    a: "Yes, we offer professional teeth whitening and scaling/cleaning services.",
  },
  {
    q: "What is your consultation fee?",
    a: "Our pricing is honest and affordable. Please contact us at +91 91616 04014 for current consultation and treatment charges.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book via WhatsApp at +91 91616 04014 or use the contact form below.",
  },
];

export const booking = {
  heading: [
    { part: "Book Your", type: "sans" as const },
    { part: "Appointment", type: "serif" as const },
  ],
  services: [
    "Root Canal Treatment",
    "Teeth Whitening & Scaling",
    "Crowns, Bridges & Veneers",
    "Extractions & Fillings",
    "General Oral Checkup",
  ],
  cta: "( Book on WhatsApp )",
  whatsappUrl: `https://wa.me/${clinic.whatsapp}`,
  amSlot: "10:00 AM – 1:30 PM",
  pmSlot: "5:00 PM – 9:30 PM",
};

export const footer = {
  description:
    "Yashoda Dental Clinic — trusted, affordable dental care near Surya Nagar Crossing, Rajajipuram / Para Kunwar area, Lucknow.",
  quickLinks: ["About", "Services", "Why Us?", "Testimonials", "Contact"],
  servicesLinks: [
    "Root Canal Treatment",
    "Teeth Whitening & Scaling",
    "Crowns, Bridges & Veneers",
    "Extractions & Fillings",
    "General Oral Checkup",
  ],
  contactLabel: "Contact",
  privacy: "Privacy Policy",
};
