import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'merchItem',
  title: 'Merch Item',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: r => r.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 2}),
    defineField({name: 'price', title: 'Price', type: 'number', validation: r => r.required().min(0)}),
    defineField({name: 'image', title: 'Upload Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'image_url', title: 'Or Paste Image URL', type: 'url'}),
    defineField({name: 'is_available', title: 'Available', type: 'boolean', initialValue: true}),
    defineField({name: 'sizes_available', title: 'Sizes Available', type: 'array', of: [{type: 'string'}],
      options: {list: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']},
    }),
    defineField({name: 'colors_available', title: 'Colors Available', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'order', title: 'Sort Order', type: 'number', initialValue: 0}),
  ],
  preview: {
    select: {title: 'name', subtitle: 'price', media: 'image'},
    prepare: ({title, subtitle, media}) => ({title, subtitle: subtitle ? `$${subtitle}` : '', media}),
  },
})
