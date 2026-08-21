const defaultProducts = [

  // =====================================================
  // PVC PRESSURE PIPES
  // =====================================================

  {
    id: 1,
    name: "Pressure Pipe",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"', '5"', '6"']
  },

  {
    id: 2,
    name: "Agriculture Pipe",
    category: "PVC",
    sizes: ['1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"', '5"', '6"']
  },

  {
    id: 3,
    name: "Column Pipe",
    category: "PVC",
    sizes: ['1.25"', '1.5"', '2"', '2.5"', '3"', '4"', '5"', '6"']
  },

  {
    id: 4,
    name: "Casing Pipe",
    category: "PVC",
    sizes: ['2"', '2.5"', '3"', '4"', '5"', '6"', '8"', '10"']
  },


  // =====================================================
  // ELBOW
  // =====================================================

  {
    id: 5,
    name: "Elbow 90°",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"', '5"', '6"']
  },

  {
    id: 6,
    name: "Elbow 45°",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"', '5"', '6"']
  },

  {
    id: 7,
    name: "Elbow 90° Thread",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },

  {
    id: 8,
    name: "Elbow 45° Thread",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },


  // =====================================================
  // TEE
  // =====================================================

  {
    id: 9,
    name: "Tee",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"', '5"', '6"']
  },

  {
    id: 10,
    name: "Tee Thread",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },

  {
    id: 11,
    name: "Reducing Tee",
    category: "PVC",
    sizes: [
      '1" x 1/2"',
      '1" x 3/4"',
      '1.5" x 1"',
      '2" x 1"',
      '2" x 1.5"',
      '2.5" x 2"',
      '3" x 2"',
      '4" x 2"',
      '4" x 3"',
      '6" x 4"'
    ]
  },


  // =====================================================
  // COUPLING / SOCKET
  // =====================================================

  {
    id: 12,
    name: "Coupling",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"', '5"', '6"']
  },

  {
    id: 13,
    name: "Coupling Thread",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },

  {
    id: 14,
    name: "Repair Coupling",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"', '6"']
  },


  // =====================================================
  // REDUCER
  // =====================================================

  {
    id: 15,
    name: "Reducer",
    category: "PVC",
    sizes: [
      '1" x 1/2"',
      '1" x 3/4"',
      '1.5" x 1"',
      '2" x 1"',
      '2" x 1.5"',
      '2.5" x 2"',
      '3" x 2"',
      '3" x 2.5"',
      '4" x 2"',
      '4" x 3"',
      '5" x 4"',
      '6" x 4"',
      '6" x 5"'
    ]
  },

  {
    id: 16,
    name: "Reducer Bush",
    category: "PVC",
    sizes: [
      '1" x 1/2"',
      '1" x 3/4"',
      '1.5" x 1"',
      '2" x 1"',
      '2" x 1.5"',
      '2.5" x 2"',
      '3" x 2"',
      '4" x 2"',
      '4" x 3"',
      '6" x 4"'
    ]
  },


  // =====================================================
  // BUSH
  // =====================================================

  {
    id: 17,
    name: "Bush",
    category: "PVC",
    sizes: [
      '1" x 1/2"',
      '1" x 3/4"',
      '1.5" x 1"',
      '2" x 1"',
      '2" x 1.5"',
      '2.5" x 2"',
      '3" x 2"',
      '4" x 2"',
      '4" x 3"',
      '6" x 4"'
    ]
  },

  {
    id: 18,
    name: "Thread Bush",
    category: "PVC",
    sizes: [
      '1" x 1/2"',
      '1" x 3/4"',
      '1.5" x 1"',
      '2" x 1"',
      '2" x 1.5"',
      '3" x 2"',
      '4" x 2"',
      '4" x 3"'
    ]
  },


  // =====================================================
  // ADAPTER
  // =====================================================

  {
    id: 19,
    name: "Male Adapter",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },

  {
    id: 20,
    name: "Female Adapter",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },

  {
    id: 21,
    name: "Male Thread Adapter",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },

  {
    id: 22,
    name: "Female Thread Adapter",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },


  // =====================================================
  // CAP / PLUG
  // =====================================================

  {
    id: 23,
    name: "End Cap",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"', '5"', '6"']
  },

  {
    id: 24,
    name: "Thread Cap",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },

  {
    id: 25,
    name: "Thread Plug",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },


  // =====================================================
  // UNION
  // =====================================================

  {
    id: 26,
    name: "Union",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },

  {
    id: 27,
    name: "Union Thread",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },


  // =====================================================
  // NIPPLE
  // =====================================================

  {
    id: 28,
    name: "Nipple",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },

  {
    id: 29,
    name: "Hex Nipple",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },


  // =====================================================
  // CROSS
  // =====================================================

  {
    id: 30,
    name: "Cross",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },


  // =====================================================
  // Y / WYE
  // =====================================================

  {
    id: 31,
    name: "Y",
    category: "PVC",
    sizes: ['1.5"', '2"', '3"', '4"', '5"', '6"']
  },

  {
    id: 32,
    name: "Y Reducing",
    category: "PVC",
    sizes: ['2" x 1.5"', '3" x 2"', '4" x 2"', '4" x 3"', '6" x 4"']
  },


  // =====================================================
  // BALL VALVE
  // =====================================================

  {
    id: 33,
    name: "Ball Valve",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },

  {
    id: 34,
    name: "Ball Valve Thread",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },


  // =====================================================
  // GATE VALVE
  // =====================================================

  {
    id: 35,
    name: "Gate Valve",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },


  // =====================================================
  // CHECK VALVE
  // =====================================================

  {
    id: 36,
    name: "Check Valve",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },


  // =====================================================
  // FOOT VALVE
  // =====================================================

  {
    id: 37,
    name: "Foot Valve",
    category: "PVC",
    sizes: ['1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },


  // =====================================================
  // STRAINER
  // =====================================================

  {
    id: 38,
    name: "Y Strainer",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
  },


  // =====================================================
  // SADDLE
  // =====================================================

  {
    id: 39,
    name: "Saddle Clamp",
    category: "PVC",
    sizes: [
      '1.5" x 1/2"',
      '2" x 1/2"',
      '2" x 3/4"',
      '2" x 1"',
      '3" x 1/2"',
      '3" x 3/4"',
      '3" x 1"',
      '4" x 1"',
      '4" x 1.5"',
      '6" x 2"'
    ]
  },


  // =====================================================
  // DRAINAGE / SWR PIPE
  // =====================================================

  {
    id: 40,
    name: "SWR Pipe",
    category: "PVC",
    sizes: ['2"', '3"', '4"', '6"', '8"', '10"']
  },

  {
    id: 41,
    name: "SWR Elbow 90°",
    category: "PVC",
    sizes: ['2"', '3"', '4"', '6"']
  },

  {
    id: 42,
    name: "SWR Elbow 45°",
    category: "PVC",
    sizes: ['2"', '3"', '4"', '6"']
  },

  {
    id: 43,
    name: "SWR Tee",
    category: "PVC",
    sizes: ['2"', '3"', '4"', '6"']
  },

  {
    id: 44,
    name: "SWR Door Tee",
    category: "PVC",
    sizes: ['2"', '3"', '4"', '6"']
  },

  {
    id: 45,
    name: "SWR Coupler",
    category: "PVC",
    sizes: ['2"', '3"', '4"', '6"']
  },

  {
    id: 46,
    name: "SWR Reducer",
    category: "PVC",
    sizes: ['3" x 2"', '4" x 2"', '4" x 3"', '6" x 4"']
  },

  {
    id: 47,
    name: "SWR End Cap",
    category: "PVC",
    sizes: ['2"', '3"', '4"', '6"']
  },


  // =====================================================
  // WASTE FITTINGS
  // =====================================================

  {
    id: 48,
    name: "Waste Coupling",
    category: "PVC",
    sizes: ['1.25"', '1.5"', '2"']
  },

  {
    id: 49,
    name: "Waste Trap",
    category: "PVC",
    sizes: ['1.25"', '1.5"', '2"']
  },

  {
    id: 50,
    name: "P Trap",
    category: "PVC",
    sizes: ['1.25"', '1.5"', '2"']
  },

  {
    id: 51,
    name: "S Trap",
    category: "PVC",
    sizes: ['1.25"', '1.5"', '2"']
  },


  // =====================================================
  // FLOOR TRAP / DRAIN
  // =====================================================

  {
    id: 52,
    name: "Floor Trap",
    category: "PVC",
    sizes: ['2"', '3"', '4"']
  },

  {
    id: 53,
    name: "Floor Drain",
    category: "PVC",
    sizes: ['2"', '3"', '4"']
  },

  {
    id: 54,
    name: "Nahani Trap",
    category: "PVC",
    sizes: ['2"', '3"', '4"']
  },


  // =====================================================
  // RAIN WATER
  // =====================================================

  {
    id: 55,
    name: "Rain Water Pipe",
    category: "PVC",
    sizes: ['3"', '4"', '5"', '6"']
  },

  {
    id: 56,
    name: "Rain Water Shoe",
    category: "PVC",
    sizes: ['3"', '4"', '5"', '6"']
  },

  {
    id: 57,
    name: "Rain Water Bend",
    category: "PVC",
    sizes: ['3"', '4"', '5"', '6"']
  },


  // =====================================================
  // CLEANOUT
  // =====================================================

  {
    id: 58,
    name: "Cleanout",
    category: "PVC",
    sizes: ['2"', '3"', '4"', '6"']
  },

  {
    id: 59,
    name: "Cleanout Plug",
    category: "PVC",
    sizes: ['2"', '3"', '4"', '6"']
  },


  // =====================================================
  // PIPE CLAMP
  // =====================================================

  {
    id: 60,
    name: "Pipe Clamp",
    category: "PVC",
    sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"', '6"']
  },
  // =====================================================
// MORE PVC PLUMBING PRODUCTS
// =====================================================

{
  id: 61,
  name: "Double Socket Bend",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
},

{
  id: 62,
  name: "Long Bend",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
},

{
  id: 63,
  name: "Long Socket",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
},

{
  id: 64,
  name: "Service Saddle",
  category: "PVC",
  sizes: ['2" x 1/2"', '2" x 3/4"', '3" x 1/2"', '3" x 3/4"', '4" x 1"', '6" x 1"']
},

{
  id: 65,
  name: "Tank Connector",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"']
},

{
  id: 66,
  name: "Tank Nipple",
  category: "PVC",
  sizes: ['1"', '1.25"', '1.5"', '2"']
},

{
  id: 67,
  name: "Tank Outlet",
  category: "PVC",
  sizes: ['1"', '1.25"', '1.5"', '2"']
},

{
  id: 68,
  name: "Overflow Connector",
  category: "PVC",
  sizes: ['1"', '1.25"', '1.5"', '2"']
},

{
  id: 69,
  name: "Water Level Connector",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"']
},

{
  id: 70,
  name: "Pipe End Socket",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
},

{
  id: 71,
  name: "Repair Socket",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
},

{
  id: 72,
  name: "Double Tee",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"', '1.5"', '2"', '2.5"', '3"', '4"']
},

{
  id: 73,
  name: "Double Y",
  category: "PVC",
  sizes: ['2"', '3"', '4"', '6"']
},

{
  id: 74,
  name: "Cross Tee",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"', '1.5"', '2"', '2.5"', '3"', '4"']
},

{
  id: 75,
  name: "Reducing Coupler",
  category: "PVC",
  sizes: [
    '1" x 3/4"',
    '1.25" x 1"',
    '1.5" x 1"',
    '1.5" x 1.25"',
    '2" x 1"',
    '2" x 1.5"',
    '2.5" x 2"',
    '3" x 2"',
    '4" x 3"',
    '6" x 4"'
  ]
},

{
  id: 76,
  name: "Male Elbow",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"']
},

{
  id: 77,
  name: "Female Elbow",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"']
},

{
  id: 78,
  name: "Male Tee",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"']
},

{
  id: 79,
  name: "Female Tee",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"']
},

{
  id: 80,
  name: "Pipe Clip",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
},

{
  id: 81,
  name: "Pipe Saddle",
  category: "PVC",
  sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"', '2.5"', '3"', '4"']
},

{
  id: 82,
  name: "Drain Connector",
  category: "PVC",
  sizes: ['1.5"', '2"', '3"', '4"']
},

{
  id: 83,
  name: "Drain Bend",
  category: "PVC",
  sizes: ['1.5"', '2"', '3"', '4"']
},

{
  id: 84,
  name: "Drain Tee",
  category: "PVC",
  sizes: ['1.5"', '2"', '3"', '4"']
},

{
  id: 85,
  name: "Drain Reducer",
  category: "PVC",
  sizes: [
    '2" x 1.5"',
    '3" x 2"',
    '4" x 2"',
    '4" x 3"'
  ]
},

{
  id: 86,
  name: "Drain Cap",
  category: "PVC",
  sizes: ['1.5"', '2"', '3"', '4"']
},

{
  id: 87,
  name: "Bottle Trap",
  category: "PVC",
  sizes: ['1.25"', '1.5"']
},

{
  id: 88,
  name: "Waste Pipe",
  category: "PVC",
  sizes: ['1.25"', '1.5"', '2"']
},

{
  id: 89,
  name: "Waste Bend",
  category: "PVC",
  sizes: ['1.25"', '1.5"', '2"']
},

{
  id: 90,
  name: "Waste Tee",
  category: "PVC",
  sizes: ['1.25"', '1.5"', '2"']
},
  // =========================================================
  // CPVC PRODUCTS - 100 ITEMS
  // =========================================================

  { id: 101, name: "Hot & Cold Water Pipe", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 102, name: "Elbow 90° - Socket", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 103, name: "Elbow 45° - Socket", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 104, name: "Elbow 90° - Brass Thread", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 105, name: "Elbow 45° - Brass Thread", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 106, name: "Tee - Equal", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 107, name: "Tee - Brass Thread", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 108, name: "Tee - Reducing", category: "CPVC", sizes: ['3/4" x 1/2"', '1" x 1/2"', '1" x 3/4"', '1.25" x 1"', '1.5" x 1"', '2" x 1"'] },
  { id: 109, name: "Tee - Female Thread", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 110, name: "Coupler - Straight", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 111, name: "Coupler - Brass Thread", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 112, name: "Coupler - Reducing", category: "CPVC", sizes: ['3/4" x 1/2"', '1" x 1/2"', '1" x 3/4"', '1.25" x 1"', '1.5" x 1"', '2" x 1.5"'] },
  { id: 113, name: "Repair Coupler", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 114, name: "Male Adapter", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 115, name: "Female Adapter", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 116, name: "Male Brass Adapter", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 117, name: "Female Brass Adapter", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 118, name: "End Cap", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 119, name: "Threaded Cap", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 120, name: "Threaded Plug", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 121, name: "Reducer Bush", category: "CPVC", sizes: ['3/4" x 1/2"', '1" x 1/2"', '1" x 3/4"', '1.25" x 1"', '1.5" x 1"', '2" x 1"'] },
  { id: 122, name: "Reducer - Socket", category: "CPVC", sizes: ['3/4" x 1/2"', '1" x 1/2"', '1" x 3/4"', '1.25" x 1"', '1.5" x 1"', '2" x 1.5"'] },
  { id: 123, name: "Reducer - Brass Thread", category: "CPVC", sizes: ['3/4" x 1/2"', '1" x 1/2"', '1" x 3/4"', '1.25" x 1"', '1.5" x 1"', '2" x 1"'] },

  { id: 124, name: "Union", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 125, name: "Brass Union", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 126, name: "Cross - Equal", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 127, name: "Cross - Reducing", category: "CPVC", sizes: ['3/4" x 1/2"', '1" x 1/2"', '1" x 3/4"', '1.25" x 1"', '1.5" x 1"', '2" x 1"'] },

  { id: 128, name: "Male Thread Elbow", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 129, name: "Female Thread Elbow", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 130, name: "Male Thread Tee", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 131, name: "Female Thread Tee", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 132, name: "Shower Arm Adapter", category: "CPVC", sizes: ['1/2"', '3/4"'] },
  { id: 133, name: "Shower Arm Elbow", category: "CPVC", sizes: ['1/2"', '3/4"'] },
  { id: 134, name: "Shower Elbow - Brass", category: "CPVC", sizes: ['1/2"', '3/4"'] },

  { id: 135, name: "Stop Cock Adapter", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },
  { id: 136, name: "Bib Cock Adapter", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },
  { id: 137, name: "Angle Cock Adapter", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },

  { id: 138, name: "Tank Connector", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 139, name: "Overhead Tank Adapter", category: "CPVC", sizes: ['1"', '1.25"', '1.5"', '2"'] },

  { id: 140, name: "Ball Valve - Socket", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 141, name: "Ball Valve - Threaded", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 142, name: "Ball Valve - Brass Handle", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 143, name: "Gate Valve - Socket", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 144, name: "Gate Valve - Threaded", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 145, name: "Check Valve", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 146, name: "Spring Check Valve", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 147, name: "Foot Valve", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 148, name: "NRV Valve", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 149, name: "Pressure Reducing Valve", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },
  { id: 150, name: "Pressure Relief Valve", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },

  { id: 151, name: "Air Vent Valve", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },
  { id: 152, name: "Drain Valve", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },

  { id: 153, name: "Pipe Clip", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 154, name: "Pipe Clamp", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 155, name: "Double Pipe Clip", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"'] },

  { id: 156, name: "Pipe Support Bracket", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 157, name: "Pipe Hanger", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 158, name: "Saddle Clamp", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 159, name: "Repair Saddle", category: "CPVC", sizes: ['1"', '1.25"', '1.5"', '2"'] },

  { id: 160, name: "Pipe Thread Adapter", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 161, name: "Brass Thread Adapter", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 162, name: "Water Heater Connector", category: "CPVC", sizes: ['1/2"', '3/4"'] },
  { id: 163, name: "Geyser Connection Elbow", category: "CPVC", sizes: ['1/2"', '3/4"'] },
  { id: 164, name: "Geyser Connection Tee", category: "CPVC", sizes: ['1/2"', '3/4"'] },

  { id: 165, name: "Mixer Connection Elbow", category: "CPVC", sizes: ['1/2"', '3/4"'] },
  { id: 166, name: "Mixer Connection Tee", category: "CPVC", sizes: ['1/2"', '3/4"'] },
  { id: 167, name: "Mixer Connection Adapter", category: "CPVC", sizes: ['1/2"', '3/4"'] },

  { id: 168, name: "Flush Tank Connector", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },
  { id: 169, name: "Flush Valve Adapter", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },
  { id: 170, name: "Flush Pipe Connector", category: "CPVC", sizes: ['1.5"', '2"'] },

  { id: 171, name: "Washing Machine Adapter", category: "CPVC", sizes: ['1/2"', '3/4"'] },
  { id: 172, name: "Washing Machine Elbow", category: "CPVC", sizes: ['1/2"', '3/4"'] },
  { id: 173, name: "Washing Machine Tee", category: "CPVC", sizes: ['1/2"', '3/4"'] },

  { id: 174, name: "Water Filter Adapter", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },
  { id: 175, name: "Water Filter Elbow", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },

  { id: 176, name: "RO Connection Adapter", category: "CPVC", sizes: ['1/2"', '3/4"'] },
  { id: 177, name: "RO Connection Elbow", category: "CPVC", sizes: ['1/2"', '3/4"'] },
  { id: 178, name: "RO Connection Tee", category: "CPVC", sizes: ['1/2"', '3/4"'] },

  { id: 179, name: "Water Meter Adapter", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 180, name: "Water Meter Union", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 181, name: "Pressure Gauge Adapter", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },
  { id: 182, name: "Temperature Gauge Adapter", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },

  { id: 183, name: "Pipe End Connector", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 184, name: "Pipe Extension Socket", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 185, name: "Long Bend 90°", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 186, name: "Short Bend 90°", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 187, name: "Offset Bend", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },
  { id: 188, name: "Double Offset Bend", category: "CPVC", sizes: ['1/2"', '3/4"', '1"'] },

  { id: 189, name: "Pipe Expansion Coupler", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 190, name: "Thermal Expansion Loop", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },

  { id: 191, name: "Solvent Cement", category: "CPVC", sizes: ['50ml', '100ml', '200ml', '500ml', '1L'] },
  { id: 192, name: "Primer", category: "CPVC", sizes: ['50ml', '100ml', '200ml', '500ml', '1L'] },

  { id: 193, name: "Thread Seal Tape", category: "CPVC", sizes: ['10m', '12m', '20m', '50m'] },
  { id: 194, name: "Pipe Cutting Tool", category: "CPVC", sizes: ['16mm', '20mm', '25mm', '32mm', '40mm'] },

  { id: 195, name: "Deburring Tool", category: "CPVC", sizes: ['Small', 'Medium', 'Large'] },
  { id: 196, name: "Pipe Reamer", category: "CPVC", sizes: ['Small', 'Medium', 'Large'] },

  { id: 197, name: "Insulation Sleeve", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 198, name: "Pipe Identification Tape", category: "CPVC", sizes: ['10m', '20m', '50m'] },

  { id: 199, name: "Pipe End Protector", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
  { id: 200, name: "Pipe Storage Cap", category: "CPVC", sizes: ['1/2"', '3/4"', '1"', '1.25"', '1.5"', '2"'] },
    // =========================================================
  // SANITARY PRODUCTS - 100 ITEMS
  // =========================================================

  { id: 201, name: "Bib Cock", category: "Sanitary", sizes: ['1/2"', '3/4"'] },
  { id: 202, name: "Long Body Bib Cock", category: "Sanitary", sizes: ['1/2"', '3/4"'] },
  { id: 203, name: "Angular Stop Cock", category: "Sanitary", sizes: ['1/2"', '3/4"'] },
  { id: 204, name: "Stop Cock", category: "Sanitary", sizes: ['1/2"', '3/4"', '1"'] },
  { id: 205, name: "Pillar Cock", category: "Sanitary", sizes: ['1/2"', '3/4"'] },
  { id: 206, name: "Basin Mixer", category: "Sanitary", sizes: ['1/2"'] },
  { id: 207, name: "Wall Mixer", category: "Sanitary", sizes: ['1/2"', '3/4"'] },
  { id: 208, name: "Wall Mixer with Overhead Shower", category: "Sanitary", sizes: ['1/2"', '3/4"'] },
  { id: 209, name: "Single Lever Basin Mixer", category: "Sanitary", sizes: ['1/2"'] },
  { id: 210, name: "Single Lever Basin Mixer Tall", category: "Sanitary", sizes: ['1/2"'] },

  { id: 211, name: "Deck Mounted Basin Mixer", category: "Sanitary", sizes: ['1/2"'] },
  { id: 212, name: "Bath Tub Spout", category: "Sanitary", sizes: ['1/2"', '3/4"'] },
  { id: 213, name: "Bib Cock with Wall Flange", category: "Sanitary", sizes: ['1/2"', '3/4"'] },
  { id: 214, name: "Angle Cock with Wall Flange", category: "Sanitary", sizes: ['1/2"', '3/4"'] },
  { id: 215, name: "Health Faucet", category: "Sanitary", sizes: ['1/2"'] },
  { id: 216, name: "Health Faucet Set", category: "Sanitary", sizes: ['1/2"'] },
  { id: 217, name: "Hand Shower", category: "Sanitary", sizes: ['1/2"'] },
  { id: 218, name: "Overhead Shower", category: "Sanitary", sizes: ['4"', '6"', '8"', '10"', '12"'] },
  { id: 219, name: "Rain Shower", category: "Sanitary", sizes: ['6"', '8"', '10"', '12"', '16"'] },
  { id: 220, name: "Shower Arm", category: "Sanitary", sizes: ['6"', '9"', '12"', '15"', '18"'] },

  { id: 221, name: "Shower Arm Flange", category: "Sanitary", sizes: ['1/2"', '3/4"'] },
  { id: 222, name: "Shower Elbow", category: "Sanitary", sizes: ['1/2"', '3/4"'] },
  { id: 223, name: "Shower Hose", category: "Sanitary", sizes: ['1m', '1.2m', '1.5m', '2m'] },
  { id: 224, name: "Flexible Hose", category: "Sanitary", sizes: ['12"', '18"', '24"', '36"'] },
  { id: 225, name: "Basin Waste Coupling", category: "Sanitary", sizes: ['1.25"', '1.5"'] },
  { id: 226, name: "Pop-Up Waste Coupling", category: "Sanitary", sizes: ['1.25"', '1.5"'] },
  { id: 227, name: "Waste Coupling with Overflow", category: "Sanitary", sizes: ['1.25"', '1.5"'] },
  { id: 228, name: "Waste Coupling without Overflow", category: "Sanitary", sizes: ['1.25"', '1.5"'] },
  { id: 229, name: "Bottle Trap", category: "Sanitary", sizes: ['1.25"', '1.5"'] },
  { id: 230, name: "P-Trap", category: "Sanitary", sizes: ['1.25"', '1.5"', '2"'] },

  { id: 231, name: "S-Trap", category: "Sanitary", sizes: ['1.25"', '1.5"', '2"'] },
  { id: 232, name: "Q-Trap", category: "Sanitary", sizes: ['1.25"', '1.5"', '2"'] },
  { id: 233, name: "Wash Basin", category: "Sanitary", sizes: ['16"', '18"', '20"', '22"'] },
  { id: 234, name: "Corner Wash Basin", category: "Sanitary", sizes: ['15"', '16"', '18"'] },
  { id: 235, name: "Counter Top Basin", category: "Sanitary", sizes: ['16"', '18"', '20"', '22"'] },
  { id: 236, name: "Table Top Basin", category: "Sanitary", sizes: ['16"', '18"', '20"'] },
  { id: 237, name: "Under Counter Basin", category: "Sanitary", sizes: ['16"', '18"', '20"', '22"'] },
  { id: 238, name: "Half Pedestal Basin", category: "Sanitary", sizes: ['16"', '18"', '20"'] },
  { id: 239, name: "Full Pedestal Basin", category: "Sanitary", sizes: ['18"', '20"', '22"'] },
  { id: 240, name: "Wall Hung Basin", category: "Sanitary", sizes: ['16"', '18"', '20"', '22"'] },

  { id: 241, name: "One Piece Toilet", category: "Sanitary", sizes: ['S-Trap', 'P-Trap'] },
  { id: 242, name: "Two Piece Toilet", category: "Sanitary", sizes: ['S-Trap', 'P-Trap'] },
  { id: 243, name: "Wall Hung Toilet", category: "Sanitary", sizes: ['S-Trap', 'P-Trap'] },
  { id: 244, name: "Floor Mounted Toilet", category: "Sanitary", sizes: ['S-Trap', 'P-Trap'] },
  { id: 245, name: "Western Commode", category: "Sanitary", sizes: ['S-Trap', 'P-Trap'] },
  { id: 246, name: "Indian Toilet Pan", category: "Sanitary", sizes: ['20"', '22"', '24"'] },
  { id: 247, name: "Orissa Pan", category: "Sanitary", sizes: ['20"', '22"', '24"'] },
  { id: 248, name: "Toilet Seat Cover", category: "Sanitary", sizes: ['Standard'] },
  { id: 249, name: "Soft Close Toilet Seat", category: "Sanitary", sizes: ['Standard'] },
  { id: 250, name: "Toilet Seat Hinges", category: "Sanitary", sizes: ['Standard'] },

  { id: 251, name: "Flush Tank", category: "Sanitary", sizes: ['6L', '8L', '10L'] },
  { id: 252, name: "Concealed Cistern", category: "Sanitary", sizes: ['6L', '8L', '10L'] },
  { id: 253, name: "Flush Valve", category: "Sanitary", sizes: ['1.5"', '2"'] },
  { id: 254, name: "Flush Button", category: "Sanitary", sizes: ['38mm', '48mm', '58mm'] },
  { id: 255, name: "Dual Flush Button", category: "Sanitary", sizes: ['38mm', '48mm', '58mm'] },
  { id: 256, name: "Flush Pipe", category: "Sanitary", sizes: ['32mm', '40mm', '50mm'] },
  { id: 257, name: "Flush Pipe Connector", category: "Sanitary", sizes: ['32mm', '40mm', '50mm'] },
  { id: 258, name: "Flush Tank Inlet Valve", category: "Sanitary", sizes: ['1/2"'] },
  { id: 259, name: "Flush Tank Outlet Valve", category: "Sanitary", sizes: ['1.5"', '2"'] },
  { id: 260, name: "Flush Tank Handle", category: "Sanitary", sizes: ['Standard'] },

  { id: 261, name: "Toilet Connector", category: "Sanitary", sizes: ['12"', '18"', '24"'] },
  { id: 262, name: "Toilet Pan Connector", category: "Sanitary", sizes: ['3"', '4"'] },
  { id: 263, name: "Toilet Pan Collar", category: "Sanitary", sizes: ['3"', '4"'] },
  { id: 264, name: "Toilet Floor Flange", category: "Sanitary", sizes: ['3"', '4"'] },
  { id: 265, name: "Toilet Flexible Connector", category: "Sanitary", sizes: ['12"', '18"', '24"'] },

  { id: 266, name: "Floor Drain", category: "Sanitary", sizes: ['2"', '3"', '4"'] },
  { id: 267, name: "Square Floor Drain", category: "Sanitary", sizes: ['4"', '5"', '6"'] },
  { id: 268, name: "Round Floor Drain", category: "Sanitary", sizes: ['3"', '4"', '5"', '6"'] },
  { id: 269, name: "Nahani Trap", category: "Sanitary", sizes: ['2"', '3"', '4"'] },
  { id: 270, name: "Cockroach Trap Floor Drain", category: "Sanitary", sizes: ['2"', '3"', '4"'] },

  { id: 271, name: "Waste Pipe", category: "Sanitary", sizes: ['1.25"', '1.5"', '2"'] },
  { id: 272, name: "Flexible Waste Pipe", category: "Sanitary", sizes: ['1.25"', '1.5"', '2"'] },
  { id: 273, name: "Basin Waste Pipe", category: "Sanitary", sizes: ['1.25"', '1.5"'] },
  { id: 274, name: "Sink Waste Pipe", category: "Sanitary", sizes: ['1.5"', '2"'] },
  { id: 275, name: "Bottle Trap with Waste", category: "Sanitary", sizes: ['1.25"', '1.5"'] },

  { id: 276, name: "Kitchen Sink", category: "Sanitary", sizes: ['18" x 18"', '24" x 18"', '30" x 18"', '32" x 20"'] },
  { id: 277, name: "Single Bowl Sink", category: "Sanitary", sizes: ['18" x 18"', '24" x 18"'] },
  { id: 278, name: "Double Bowl Sink", category: "Sanitary", sizes: ['30" x 18"', '32" x 20"', '36" x 20"'] },
  { id: 279, name: "Sink Waste Coupling", category: "Sanitary", sizes: ['1.5"', '2"'] },
  { id: 280, name: "Sink Bottle Trap", category: "Sanitary", sizes: ['1.5"', '2"'] },

  { id: 281, name: "Health Faucet Holder", category: "Sanitary", sizes: ['Standard'] },
  { id: 282, name: "Soap Dish", category: "Sanitary", sizes: ['Standard'] },
  { id: 283, name: "Soap Dispenser", category: "Sanitary", sizes: ['Standard'] },
  { id: 284, name: "Tumbler Holder", category: "Sanitary", sizes: ['Standard'] },
  { id: 285, name: "Toothbrush Holder", category: "Sanitary", sizes: ['Standard'] },
  { id: 286, name: "Towel Ring", category: "Sanitary", sizes: ['Standard'] },
  { id: 287, name: "Towel Rod", category: "Sanitary", sizes: ['18"', '24"', '30"', '36"'] },
  { id: 288, name: "Towel Rack", category: "Sanitary", sizes: ['18"', '24"', '30"'] },
  { id: 289, name: "Robe Hook", category: "Sanitary", sizes: ['Standard'] },
  { id: 290, name: "Toilet Paper Holder", category: "Sanitary", sizes: ['Standard'] },

  { id: 291, name: "Mirror", category: "Sanitary", sizes: ['18" x 24"', '24" x 30"', '24" x 36"', '30" x 36"'] },
  { id: 292, name: "Medicine Cabinet", category: "Sanitary", sizes: ['18" x 24"', '24" x 30"'] },
  { id: 293, name: "Glass Shelf", category: "Sanitary", sizes: ['18"', '24"', '30"'] },
  { id: 294, name: "Corner Shelf", category: "Sanitary", sizes: ['8"', '10"', '12"'] },
  { id: 295, name: "Bathroom Shelf", category: "Sanitary", sizes: ['18"', '24"', '30"'] },

  { id: 296, name: "Shower Curtain Rod", category: "Sanitary", sizes: ['36"', '48"', '60"', '72"'] },
  { id: 297, name: "Floor Mounted Grab Bar", category: "Sanitary", sizes: ['18"', '24"', '32"'] },
  { id: 298, name: "Wall Mounted Grab Bar", category: "Sanitary", sizes: ['18"', '24"', '32"'] },
  { id: 299, name: "Bathroom Door Hook", category: "Sanitary", sizes: ['Standard'] },
  { id: 300, name: "Bathroom Accessory Set", category: "Sanitary", sizes: ['5 Piece', '7 Piece', '9 Piece'] }

];