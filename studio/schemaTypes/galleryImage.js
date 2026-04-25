import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title / Caption', type: 'string'}),
    defineField({name: 'image', title: 'Upload Image', type: 'image', options: {hotspot: true}, validation: r => r.required()}),
    defineField({name: 'image_url', title: 'Or Paste Image URL', type: 'url'}),
    defineField({name: 'category', title: 'Category', type: 'string',
      options: {list: ['Food', 'Truck', 'Events', 'Behind the Scenes', 'Customers']},
    }),
    defineField({name: 'order', title: 'Sort Order', type: 'number', initialValue: 0}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category', media: 'image'},
    prepare: ({title, subtitle, media}) => ({title: title || 'Untitled', subtitle, media}),
  },
})
