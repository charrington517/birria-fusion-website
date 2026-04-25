import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'f8lcd5z6',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
})

const menuItems = [
  {
    _type: 'menuItem',
    name: 'Birria Tacos',
    category: 'Tacos',
    description: 'Three slow-braised birria tacos on handmade corn tortillas, dipped and griddled in consommé fat. Served with onion, cilantro, lime, and a cup of rich consommé.',
    price: 14.99,
    is_popular: true,
    is_available: true,
    ingredients: 'Slow-braised beef, handmade corn tortillas, onion, cilantro, lime, consommé',
    flavor_profile: 'Rich, savory, smoky with a hint of dried chiles and warm spices',
    the_ritual: "Dip each taco into the consommé before every bite. Let the broth soak in. That's the move.",
    order: 1,
  },
  {
    _type: 'menuItem',
    name: 'Quesabirria',
    category: 'Tacos',
    description: 'Crispy birria-stuffed quesadilla loaded with melted Oaxaca cheese, griddled in consommé fat until golden. Served with consommé for dipping.',
    price: 15.99,
    is_popular: true,
    is_available: true,
    ingredients: 'Slow-braised beef, Oaxaca cheese, flour tortilla, consommé',
    flavor_profile: 'Crispy, cheesy, deeply savory',
    the_ritual: 'Pull apart slowly — watch the cheese stretch. Dunk in consommé. Repeat.',
    order: 2,
  },
  {
    _type: 'menuItem',
    name: 'Birria Ramen',
    category: 'Bowls',
    description: 'Ramen noodles swimming in our signature birria consommé, topped with tender shredded beef, soft-boiled egg, green onion, and chili oil.',
    price: 16.99,
    is_popular: false,
    is_available: true,
    ingredients: 'Ramen noodles, birria consommé, shredded beef, soft-boiled egg, green onion, chili oil',
    flavor_profile: 'Umami-rich, warming, with a spicy kick',
    order: 3,
  },
  {
    _type: 'menuItem',
    name: 'Loaded Birria Fries',
    category: 'Sides',
    description: 'Crispy fries smothered in birria meat, melted cheese, jalapeños, sour cream, and drizzled with consommé salsa.',
    price: 12.99,
    is_popular: false,
    is_available: true,
    ingredients: 'Fries, birria meat, cheese blend, jalapeños, sour cream, consommé salsa',
    flavor_profile: 'Crunchy, cheesy, indulgent',
    order: 4,
  },
  {
    _type: 'menuItem',
    name: 'Consommé Cup',
    category: 'Sides',
    description: 'A cup of our rich, slow-simmered birria consommé. Sip it straight or use it for dipping.',
    price: 4.99,
    is_popular: false,
    is_available: true,
    ingredients: 'Beef bone broth, dried chiles, spices, onion, garlic',
    flavor_profile: 'Deep, warming, complex',
    order: 5,
  },
  {
    _type: 'menuItem',
    name: 'Horchata',
    category: 'Drinks',
    description: 'House-made horchata — creamy rice milk with cinnamon and vanilla. Ice cold.',
    price: 5.99,
    is_popular: false,
    is_available: true,
    ingredients: 'Rice, cinnamon, vanilla, sugar, milk',
    flavor_profile: 'Sweet, creamy, refreshing',
    order: 6,
  },
]

const merchItems = [
  {
    _type: 'merchItem',
    name: 'Dip Drip Devour Tee',
    description: 'Our signature tagline on a premium heavyweight cotton tee.',
    price: 34.99,
    is_available: true,
    sizes_available: ['S', 'M', 'L', 'XL', '2XL'],
    colors_available: ['Black', 'White'],
    order: 1,
  },
  {
    _type: 'merchItem',
    name: 'Birria Fusion Snapback',
    description: 'Structured snapback with embroidered logo. One size fits most.',
    price: 29.99,
    is_available: true,
    sizes_available: [],
    colors_available: ['Black', 'Red'],
    order: 2,
  },
  {
    _type: 'merchItem',
    name: 'Consommé Club Hoodie',
    description: 'Heavyweight pullover hoodie. If you know, you know.',
    price: 59.99,
    is_available: true,
    sizes_available: ['M', 'L', 'XL', '2XL'],
    colors_available: ['Black'],
    order: 3,
  },
  {
    _type: 'merchItem',
    name: 'OG Logo Sticker Pack',
    description: "Pack of 5 die-cut vinyl stickers. Slap 'em everywhere.",
    price: 9.99,
    is_available: false,
    sizes_available: [],
    colors_available: [],
    order: 4,
  },
]

const events = [
  {
    _type: 'event',
    title: 'Friday Night Pop-Up',
    description: 'Kicking off the weekend with birria under the lights. Live DJ, cold drinks, and the full menu.',
    event_type: 'popup',
    date: '2025-08-15',
    time_start: '5:00 PM',
    time_end: '10:00 PM',
    location: 'Downtown Food Truck Park',
    is_active: true,
  },
  {
    _type: 'event',
    title: 'Summer Street Festival',
    description: "Catch us at the annual Summer Street Festival. We're bringing the heat with a special festival-only menu.",
    event_type: 'festival',
    date: '2025-09-06',
    time_start: '11:00 AM',
    time_end: '8:00 PM',
    location: 'Main Street, City Center',
    is_active: true,
  },
  {
    _type: 'event',
    title: 'Taco Tuesday Takeover',
    description: 'Every Tuesday we post up with $2 off all tacos. Pull up.',
    event_type: 'public',
    date: '2025-07-22',
    time_start: '4:00 PM',
    time_end: '9:00 PM',
    location: 'Birria Fusion Home Base',
    is_active: true,
  },
  {
    _type: 'event',
    title: 'Grand Opening Weekend',
    description: 'Our very first weekend serving the community. Free consommé with every order.',
    event_type: 'public',
    date: '2025-01-11',
    time_start: '11:00 AM',
    time_end: '9:00 PM',
    location: 'Eastside Lot',
    is_active: true,
  },
]

const truckLocation = {
  _type: 'truckLocation',
  _id: 'truckLocation',
  is_open: true,
  address: '1234 Main Street',
  city: 'Los Angeles, CA',
  hours_today: '11:00 AM — 9:00 PM',
  next_location: 'Eastside Food Park — Saturday',
  latitude: 34.0522,
  longitude: -118.2437,
}

async function seed() {
  console.log('Seeding Sanity...')

  console.log('→ Truck location...')
  await client.createOrReplace(truckLocation)

  console.log('→ Menu items...')
  for (const item of menuItems) {
    await client.create(item)
    console.log(`  ✓ ${item.name}`)
  }

  console.log('→ Merch items...')
  for (const item of merchItems) {
    await client.create(item)
    console.log(`  ✓ ${item.name}`)
  }

  console.log('→ Events...')
  for (const item of events) {
    await client.create(item)
    console.log(`  ✓ ${item.title}`)
  }

  console.log('\n✅ Done! All data imported.')
}

seed().catch(console.error)
