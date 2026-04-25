import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'truckLocation',
  title: 'Truck Location',
  type: 'document',
  fields: [
    defineField({name: 'is_open', title: 'Currently Open', type: 'boolean', initialValue: false}),
    defineField({name: 'address', title: 'Address', type: 'string'}),
    defineField({name: 'city', title: 'City', type: 'string'}),
    defineField({name: 'hours_today', title: "Today's Hours", type: 'string'}),
    defineField({name: 'next_location', title: 'Next Location', type: 'string'}),
    defineField({name: 'latitude', title: 'Latitude', type: 'number'}),
    defineField({name: 'longitude', title: 'Longitude', type: 'number'}),
  ],
  preview: {
    select: {title: 'address', subtitle: 'hours_today'},
    prepare: ({title, subtitle}) => ({title: title || 'Truck Location', subtitle}),
  },
})
