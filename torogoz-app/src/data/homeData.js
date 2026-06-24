export const CONTACT_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSewwhoCD53_7M6O-i9WFtUvBqTNJ8s7xBUlbNCOPVDSXBfmkQ/viewform';

export const INSTAGRAM_URL = 'https://www.instagram.com/uva_upsilons';

export const EMAIL = 'torogoz@lsu79.org';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    dropdown: [
      { label: 'Our History', href: '/our-history' },
      { label: 'Chapter History', href: '/chapter-history' },
    ],
  },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Philanthropy', href: '/philanthropy' },
  { label: 'Resources', href: '/resources' },
];

export const FOOTER_EXPLORE_LINKS = [
  { label: 'Our History', href: '/our-history' },
  { label: 'Chapter History', href: '/chapter-history' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Philanthropy', href: '/philanthropy' },
  { label: 'Resources', href: '/resources' },
];

export const FOOTER_CONNECT_LINKS = [
  { label: 'Contact Us', href: CONTACT_FORM_URL, isExternal: true },
  { label: 'Instagram', href: INSTAGRAM_URL, isExternal: true },
  { label: 'Events', href: '#events', isExternal: false },
  { label: 'Home', href: '/', isExternal: false },
];

export const PILLARS = [
  {
    id: 'academic',
    name: 'Academic Excellence',
    description:
      'We prioritize education and continuous growth, equipping our brothers with the knowledge and skills to succeed in their careers and communities.',
    svgViewBox: '0 -960 960 960',
    svgPath:
      'M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Z',
  },
  {
    id: 'cultural',
    name: 'Cultural Awareness & Diversity',
    description:
      'We celebrate our cultural heritage while fostering an inclusive environment that values diverse perspectives and backgrounds.',
    svgViewBox: '0 -960 960 960',
    svgPath:
      'M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z',
  },
  {
    id: 'brotherhood',
    name: 'Brotherhood',
    description:
      "We build lifelong bonds rooted in trust, loyalty, and support, encouraging each other's personal and leadership growth.",
    svgViewBox: '0 -960 960 960',
    svgPath:
      'M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-365q32-20 76.5-27.5T480-400q53 0 97.5 7.5T654-365q33 20 49.5 46.5T720-258v18H240Zm540 0v-65q0-26-6.5-49T754-358q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v24H780ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Z',
  },
  {
    id: 'leadership',
    name: 'Community Leadership',
    description:
      'We lead by example through service, mentorship, and advocacy, creating a positive and lasting impact in our communities.',
    svgViewBox: '0 -960 960 960',
    svgPath:
      'M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 38v-272q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346Z',
  },
];

export const CHAPTER_STATS = [
  { value: '1979', label: 'Founded' },
  { value: '85th', label: 'National Chapter' },
  { value: 'UVA', label: 'Our Home' },
];

export const INSTAGRAM_POST_URLS = [
  'https://www.instagram.com/p/DWb4qLKDdAU/',
  'https://www.instagram.com/p/DYAThc0kV5e/',
  'https://www.instagram.com/p/DXqSgRcjCbm/',
];

// To show an event, fill in all fields.
// Leave title empty ("") for a "Coming Soon" placeholder.
// date: "YYYY-MM-DD"  |  startTime / endTime: "HH:MM" (24-hour)
export const EVENTS = [
  { title: '', date: '', startTime: '', endTime: '', location: '' },
  { title: '', date: '', startTime: '', endTime: '', location: '' },
  { title: '', date: '', startTime: '', endTime: '', location: '' },
];
