import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: r => r.required()}),
    defineField({name: 'category', title: 'Category', type: 'string',
      options: {list: ['Tacos', 'Bowls', 'Entrees', 'Sides', 'Desserts', 'Drinks', 'Specials']},
      validation: r => r.required(),
    }),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'price', title: 'Price', type: 'number', validation: r => r.required().min(0)}),
    defineField({name: 'image', title: 'Upload Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'image_url', title: 'Or Paste Image URL', type: 'url'}),
    defineField({name: 'is_popular', title: 'Popular / Fan Favorite', type: 'boolean', initialValue: false}),
    defineField({name: 'ingredients', title: 'Ingredients', type: 'text', rows: 2}),
    defineField({name: 'flavor_profile', title: 'Flavor Profile', type: 'text', rows: 2}),
    defineField({name: 'the_ritual', title: 'The Ritual', type: 'text', rows: 2}),
    defineField({name: 'status', title: 'Status', type: 'string',
      options: {list: ['Active', 'Special', 'Past Special']},
      initialValue: 'Active',
      validation: r => r.required(),
    }),
    defineField({name: 'is_available', title: 'Available', type: 'boolean', initialValue: true}),
    defineField({name: 'order', title: 'Sort Order', type: 'number', initialValue: 0}),
  ],
  orderings: [{title: 'Sort Order', name: 'order', by: [{field: 'order', direction: 'asc'}]}],
  preview: {
    select: {title: 'name', subtitle: 'category', status: 'status', media: 'image'},
    prepare: ({title, subtitle, status, media}) => ({
      title,
      subtitle: `${subtitle || ''}${status && status !== 'Active' ? ` — ${status}` : ''}`,
      media,
    }),
  },
})
