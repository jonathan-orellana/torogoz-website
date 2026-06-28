export const CONTACT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSewwhoCD53_7M6O-i9WFtUvBqTNJ8s7xBUlbNCOPVDSXBfmkQ/viewform";

export const INSTAGRAM_URL = "https://www.instagram.com/uva_upsilons";

export const EMAIL = "torogoz@lsu79.org";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    dropdown: [
      { label: "Our History", href: "/our-history" },
      { label: "Chapter History", href: "/chapter-history" },
    ],
  },
  { label: "Leadership", href: "/leadership" },
  { label: "Philanthropy", href: "/philanthropy" },
  { label: "Resources", href: "/resources" },
];

export const FOOTER_EXPLORE_LINKS = [
  { label: "Our History", href: "/our-history" },
  { label: "Chapter History", href: "/chapter-history" },
  { label: "Leadership", href: "/leadership" },
  { label: "Philanthropy", href: "/philanthropy" },
  { label: "Resources", href: "/resources" },
];

export const FOOTER_CONNECT_LINKS = [
  { label: "Contact Us", href: CONTACT_FORM_URL, isExternal: true },
  { label: "Instagram", href: INSTAGRAM_URL, isExternal: true },
  { label: "Events", href: "#events", isExternal: false },
  { label: "Home", href: "/", isExternal: false },
];

export const PILLARS = [
  {
    id: "academic",
    name: "Academic Excellence",
    description:
      "We prioritize education and continuous growth, equipping our brothers with the knowledge and skills to succeed in their careers and communities.",
    svgViewBox: "0 0 640 640",
    svgPath:
      "M80 259.8L289.2 345.9C299 349.9 309.4 352 320 352C330.6 352 341 349.9 350.8 345.9L593.2 246.1C602.2 242.4 608 233.7 608 224C608 214.3 602.2 205.6 593.2 201.9L350.8 102.1C341 98.1 330.6 96 320 96C309.4 96 299 98.1 289.2 102.1L46.8 201.9C37.8 205.6 32 214.3 32 224L32 520C32 533.3 42.7 544 56 544C69.3 544 80 533.3 80 520L80 259.8zM128 331.5L128 448C128 501 214 544 320 544C426 544 512 501 512 448L512 331.4L369.1 390.3C353.5 396.7 336.9 400 320 400C303.1 400 286.5 396.7 270.9 390.3L128 331.4z",
  },
  {
    id: "cultural",
    name: "Cultural Awareness & Diversity",
    description:
      "We celebrate our cultural heritage while fostering an inclusive environment that values diverse perspectives and backgrounds.",
    svgViewBox: "0 0 640 640",
    svgPath:
      "M119.7 263.7L150.6 294.6C156.6 300.6 164.7 304 173.2 304L194.7 304C203.2 304 211.3 307.4 217.3 313.4L246.6 342.7C252.6 348.7 256 356.8 256 365.3L256 402.8C256 411.3 259.4 419.4 265.4 425.4L278.7 438.7C284.7 444.7 288.1 452.8 288.1 461.3L288.1 480C288.1 497.7 302.4 512 320.1 512C337.8 512 352.1 497.7 352.1 480L352.1 477.3C352.1 468.8 355.5 460.7 361.5 454.7L406.8 409.4C412.8 403.4 416.2 395.3 416.2 386.8L416.2 352.1C416.2 334.4 401.9 320.1 384.2 320.1L301.5 320.1C293 320.1 284.9 316.7 278.9 310.7L262.9 294.7C258.7 290.5 256.3 284.7 256.3 278.7C256.3 266.2 266.4 256.1 278.9 256.1L313.6 256.1C326.1 256.1 336.2 246 336.2 233.5C336.2 227.5 333.8 221.7 329.6 217.5L309.9 197.8C306 194 304 189.1 304 184C304 178.9 306 174 309.7 170.3L327 153C332.8 147.2 336.1 139.3 336.1 131.1C336.1 123.9 333.7 117.4 329.7 112.2C326.5 112.1 323.3 112 320.1 112C224.7 112 144.4 176.2 119.8 263.7zM528 320C528 285.4 519.6 252.8 504.6 224.2C498.2 225.1 491.9 228.1 486.7 233.3L473.3 246.7C467.3 252.7 463.9 260.8 463.9 269.3L463.9 304C463.9 321.7 478.2 336 495.9 336L520 336C522.5 336 525 335.7 527.3 335.2C527.7 330.2 527.8 325.1 527.8 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z",
  },
  {
    id: "brotherhood",
    name: "Brotherhood",
    description:
      "We build lifelong bonds rooted in trust, loyalty, and support, encouraging each other's personal and leadership growth.",
    svgViewBox: "0 0 640 640",
    svgPath:
      "M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z",
  },
  {
    id: "leadership",
    name: "Community Leadership",
    description:
      "We lead by example through service, mentorship, and advocacy, creating a positive and lasting impact in our communities.",
    svgViewBox: "0 0 640 640",
    svgPath:
      "M525.2 82.9C536.7 88 544 99.4 544 112L544 528C544 540.6 536.7 552 525.2 557.1C513.7 562.2 500.4 560.3 490.9 552L444.3 511.3C400.7 473.2 345.6 451 287.9 448.3L287.9 544C287.9 561.7 273.6 576 255.9 576L223.9 576C206.2 576 191.9 561.7 191.9 544L191.9 448C121.3 448 64 390.7 64 320C64 249.3 121.3 192 192 192L276.5 192C338.3 191.8 397.9 169.3 444.4 128.7L491 88C500.4 79.7 513.9 77.8 525.3 82.9zM288 384L288 384.2C358.3 386.9 425.8 412.7 480 457.6L480 182.3C425.8 227.2 358.3 253 288 255.7L288 384z",
  },
];

export const CHAPTER_STATS = [
  { value: "2026", label: "Founded" },
  { value: "85th", label: "National Chapter" },
  { value: "UVA", label: "Our Home" },
];

export const INSTAGRAM_POST_URLS = [
  "https://www.instagram.com/p/DWb4qLKDdAU/",
  "https://www.instagram.com/p/DYAThc0kV5e/",
  "https://www.instagram.com/p/DXqSgRcjCbm/",
];

// To show an event, fill in all fields.
// Leave title empty ("") for a "Coming Soon" placeholder.
// date: "YYYY-MM-DD"  |  startTime / endTime: "HH:MM" (24-hour)
export const EVENTS = [
  { title: "", date: "", startTime: "", endTime: "", location: "" },
  { title: "", date: "", startTime: "", endTime: "", location: "" },
  { title: "", date: "", startTime: "", endTime: "", location: "" },
];
