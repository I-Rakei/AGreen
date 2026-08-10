export const company = {
  name: 'Asiye Green',
  founded: 2015,
  phone: '+27 11 568 5742',
  email: 'info@asiyegreen.com',
  address:
    'Unit 5, Building 2, Riversands Outlet Park, Riversands Boulevard, Knopjeslaagte, Johannesburg',
  social: {
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
  },
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    megamenu: {
      image: 'installer-drilling',
      columns: [
        {
          title: 'Energy Efficiency',
          links: [
            { label: 'Energy Audit', path: '/services' },
            { label: 'Business Case', path: '/services' },
            { label: 'Lighting Design', path: '/services' },
            { label: 'Project Execution', path: '/services' },
          ],
        },
        {
          title: 'Generation & Storage',
          links: [
            { label: 'Solar PV Systems', path: '/services' },
            { label: 'Battery Energy Storage', path: '/services' },
            { label: 'Supply Only', path: '/services' },
          ],
        },
        {
          title: 'Funding',
          links: [
            { label: 'Off-Balance-Sheet Finance', path: '/services' },
            { label: 'Section 12L Support', path: '/services' },
          ],
        },
        {
          title: 'Get Started',
          links: [
            { label: 'Book a Consultation', path: '/contact' },
            { label: 'View Our Projects', path: '/projects' },
          ],
        },
      ],
    },
  },
  { label: 'Projects', path: '/projects' },
]

export const heroStats = [
  { value: '2015', label: 'Operating since' },
  { value: '200MW', label: 'Renewable energy target by 2030' },
  { value: '30%+', label: 'Typical energy-cost savings' },
  { value: 'Level 1', label: 'BEE accredited' },
]

export const advantages = [
  {
    icon: 'worker',
    title: 'Operating since 2015',
    text: 'Founded to help South African organisations cut costs and generate energy onsite as Eskom reliability became an unwelcome business expense.',
  },
  {
    icon: 'award',
    title: 'Corporate track record',
    text: 'Completed projects for Landis+Gyr, BMW, Tsogo Sun, and Volvo Trucks, backed by residential installs across Johannesburg.',
  },
  {
    icon: 'quality',
    title: 'Section 12L experience',
    text: 'Practical experience helping clients access the Section 12L energy-efficiency tax incentive alongside project delivery.',
  },
  {
    icon: 'growth',
    title: 'Off-balance-sheet finance',
    text: 'Partnerships with reputable funders mean viable projects can proceed without upfront capital.',
  },
  {
    icon: 'warranty',
    title: 'Level 1 BEE accredited',
    text: 'A Level 1 BEE accreditation supports corporate procurement and enterprise-development goals.',
  },
]

export const proofPoints = [
  {
    icon: 'worker',
    title: 'Over 15 Years Experience',
    text: 'Our team has delivered efficient-energy solutions to large organisations and residential homes for more than 15 years.',
  },
  {
    icon: 'award',
    title: 'Corporate Projects',
    text: 'Completed work for Landis+Gyr, BMW, Tsogo Sun, and Volvo Trucks.',
  },
  {
    icon: 'growth',
    title: 'Financing Options',
    text: 'Off-balance-sheet finance is available so projects can proceed without upfront capital.',
  },
  {
    icon: 'quality',
    title: 'Level 1 BEE Accredited',
    text: 'Asiye Green holds Level 1 BEE accreditation.',
  },
]

export const md = {
  name: 'Ndumiso Mathebula',
  role: 'Managing Director / Founder',
  bio: [
    'A registered professional engineer with the Engineering Council of South Africa (ECSA), Ndumiso holds a BSc in Electrical Engineering from Wits, a Master\'s in Business Leadership (MBL) from UNISA, and a Government Certificate of Competence (GCC) for Factories.',
    'Before co-founding Asiye Green, he spent just over two decades at Sasol across engineering, marketing management, strategy management, and enterprise-development roles, including a secondment to the Sasol Chevron Joint Venture in London, marketing gas-to-liquids (GTL) naphtha from Sasol\'s Qatar GTL plant.',
    'His ambition is to make Asiye Green one of South Africa\'s leading renewable-energy companies, with priorities of customer satisfaction, employment opportunities, and lifelong learning.',
  ],
}

export const services = [
  {
    slug: 'energy-efficient-services',
    title: 'Energy Efficient Services',
    summary:
      'A long-term roadmap for ongoing savings, from audit through to ISO 9001-compliant delivery.',
    items: [
      { name: 'Energy audit', detail: 'Detailed facility audits to identify major energy users.' },
      { name: 'Business case', detail: 'Documents that quantify energy savings and potential return on investment.' },
      { name: 'Funding of projects', detail: 'Sourcing finance for customers seeking off-balance-sheet funding or wishing to avoid upfront capex.' },
      { name: 'Lighting design', detail: 'Designs intended to meet health and safety regulations.' },
      { name: 'Project execution', detail: 'Project delivery using an ISO 9001-compliant quality-management system.' },
    ],
  },
  {
    slug: 'energy-efficient-products',
    title: 'Energy Efficient Products',
    summary:
      'LED lighting procurement and installation, a low-capital measure with a short payback period.',
    items: [
      { name: 'Non-hazardous LED lights', detail: 'Asiye Green is a distributor and professional lighting partner to Signify (formerly Philips Lighting).' },
      { name: 'Hazardous LED lights', detail: 'We work with two leading providers for hazardous-location facilities.' },
    ],
  },
  {
    slug: 'solar-pv-systems',
    title: 'Solar PV Systems',
    summary:
      'Solar PV is increasingly viable as technology advances and material prices fall. With industry partners, we offer:',
    items: [
      { name: 'Design', detail: 'Engineering design of solar-PV systems.' },
      { name: 'Project management', detail: 'Procurement and construction of PV systems.' },
      { name: 'Solar PV systems', detail: 'Products from leading manufacturers.' },
    ],
  },
  {
    slug: 'battery-energy-storage',
    title: 'Battery Energy Storage Systems',
    summary:
      'Falling battery costs have made storage economical for backup power for many customers. We work with multiple manufacturers to implement storage systems.',
    items: [],
  },
  {
    slug: 'supply-only',
    title: 'Flexible Approach, Supply Only',
    summary:
      'Customers who intend to install efficiency projects themselves can buy supply-only equipment, including high-quality LED lighting through our Signify channel relationship.',
    items: [],
  },
]

export const projects = [
  {
    slug: 'residential-solar-pv',
    name: 'Residential Solar PV System',
    tag: 'Residential Solar',
    spec: 'Roof-mounted PV panels',
    description:
      'A home powered by the sun with an Asiye Green solar-PV system, with panels mounted on the roof.',
    image: 'rooftop-panels',
  },
  {
    slug: 'kyalami-solar-pv',
    name: 'Kyalami Solar PV System',
    tag: 'Residential Solar + Storage',
    spec: 'Victron EasySolar inverter, Pylontech lithium-ion batteries',
    description:
      'Panels mounted on a flat roof, our first time using this approach, with Renusol\'s ConSole+ assembly system and an East-West orientation. Thanks to Mpumi for the opportunity.',
    image: 'installer-drilling',
  },
  {
    slug: 'sunninghill-solar-pv',
    name: 'Sunninghill Solar PV System',
    tag: 'Residential Solar',
    spec: 'Added to existing inverter and batteries',
    description:
      'The house already had an inverter and batteries for load shedding and outages. Asiye Green added PV panels so solar can power the home by day and charge the batteries.',
    image: 'installers-roof',
  },
  {
    slug: 'sunninghill-solar-pv-lithium',
    name: 'Sunninghill Solar PV System with Lithium',
    tag: 'Residential Solar + Storage',
    spec: 'Lithium-ion battery storage',
    description:
      'A solar PV system with lithium-ion batteries commissioned for customers in Sunninghill, praised for fast, high-quality workmanship.',
    image: 'installer-black-panel',
  },
  {
    slug: 'victron-easysolar-ii',
    name: 'Victron EasySolar II Installation',
    tag: 'Residential Solar + Storage',
    spec: '3 kW Victron EasySolar II, Pylontech batteries, Canadian Solar panels',
    description:
      'A Fourways installation completed during Level 2 load shedding. The household continued operating within five minutes of commissioning during the outage.',
    image: 'worker-tablet',
  },
]

export const clients = {
  logos: [
    { name: 'G4S', image: 'g4s' },
    { name: 'Landis+Gyr', image: 'landisgyr' },
    { name: 'Tsogo Sun', image: 'tsogo' },
    { name: 'GIBS', image: 'gibs' },
    { name: 'Volvo', image: 'volvo' },
  ],
  names: [],
}

export const funding = {
  title: 'Finding the Money for Energy Projects',
  text: 'Viable energy-efficiency and solar projects can be delayed by operational priorities and budget constraints. Asiye Green partners with reputable funders so projects can proceed without upfront capital, supported by a mixed engineering-and-financial team for small through large projects.',
}

export const ctaBanner = {
  title: "Let's go green together",
  text: 'Our team looks forward to discussing your energy-saving needs, call us, write to us, or knock on our door.',
  image: 'panels-sunburst-wide',
}
