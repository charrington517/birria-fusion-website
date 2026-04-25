import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: r => r.required()}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 3}),
    defineField({name: 'event_type', title: 'Event Type', type: 'string',
      options: {list: ['public', 'private', 'festival', 'popup']},
      validation: r => r.required(),
    }),
    defineField({name: 'date', title: 'Date', type: 'date'}),
    defineField({name: 'time_start', title: 'Start Time', type: 'string'}),
    defineField({name: 'time_end', title: 'End Time', type: 'string'}),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({name: 'image', title: 'Upload Image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'image_url', title: 'Or Paste Image URL', type: 'url'}),
    defineField({name: 'is_active', title: 'Active', type: 'boolean', initialValue: true}),
  ],
  orderings: [{title: 'Date', name: 'date', by: [{field: 'date', direction: 'desc'}]}],
  preview: {
    select: {title: 'title', subtitle: 'date', media: 'image'},
  },
})
