import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'f8lcd5z6',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
})

const menuImages = {
  'Birria Tacos': 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=600',
  'Quesabirria': 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=600',
  'Birria Ramen': 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600',
  'Loaded Birria Fries': 'https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600',
  'Consommé Cup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600',
  'Horchata': 'https://images.unsplash.com/photo-1625865797689-8e4e7b3e5c5e?w=600',
}

const merchImages = {
  'Dip Drip Devour Tee': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600',
  'Birria Fusion Snapback': 'https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600',
  'Consommé Club Hoodie': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600',
  'OG Logo Sticker Pack': 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600',
}

const eventImages = {
  'Friday Night Pop-Up': 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=600',
  'Summer Street Festival': 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600',
  'Grand Opening Weekend': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600',
}

async function addImages() {
  console.log('Adding images...')

  const menuItems = await client.fetch(`*[_type == "menuItem"]`)
  for (const item of menuItems) {
    if (menuImages[item.name]) {
      await client.patch(item._id).set({image_url: menuImages[item.name]}).commit()
      console.log(`  ✓ ${item.name}`)
    }
  }

  const merchItems = await client.fetch(`*[_type == "merchItem"]`)
  for (const item of merchItems) {
    if (merchImages[item.name]) {
      await client.patch(item._id).set({image_url: merchImages[item.name]}).commit()
      console.log(`  ✓ ${item.name}`)
    }
  }

  const events = await client.fetch(`*[_type == "event"]`)
  for (const item of events) {
    if (eventImages[item.title]) {
      await client.patch(item._id).set({image_url: eventImages[item.title]}).commit()
      console.log(`  ✓ ${item.title}`)
    }
  }

  console.log('\n✅ Done! Images added.')
}

addImages().catch(console.error)
