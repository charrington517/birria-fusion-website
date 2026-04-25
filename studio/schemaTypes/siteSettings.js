import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name: 'email', title: 'Email Address', type: 'string'}),
    defineField({name: 'phone', title: 'Phone Number', type: 'string'}),
    defineField({name: 'instagram_url', title: 'Instagram URL', type: 'url'}),
    defineField({name: 'instagram_handle', title: 'Instagram Handle', type: 'string'}),
    defineField({name: 'facebook_url', title: 'Facebook URL', type: 'url'}),
    defineField({name: 'facebook_name', title: 'Facebook Name', type: 'string'}),
    defineField({name: 'tiktok_url', title: 'TikTok URL', type: 'url'}),
    defineField({name: 'tiktok_handle', title: 'TikTok Handle', type: 'string'}),
  ],
  preview: {
    prepare: () => ({title: 'Site Settings'}),
  },
})
