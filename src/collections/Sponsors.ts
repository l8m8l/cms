import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Sponsors: CollectionConfig = {
  slug: 'sponsors',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'code',
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      minLength: 1,
      maxLength: 50,
      validate: (val) => {
        const value = val as string
        if (!value) return 'Code is required'
        if (!/^[a-z_]{1,50}$/.test(value)) {
          return 'Only lowercase letters and underscores are allowed'
        }
        return true
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'logo',
      type: 'group',
      localized: true,
      fields: [
        {
          name: 'default',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'black',
          label: 'Black version',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'white',
          label: 'White version',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'text',
    },
  ],
}
