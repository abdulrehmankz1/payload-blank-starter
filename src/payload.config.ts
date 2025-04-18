// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Posts from './collections/Posts' // ✅ added
import Categories from './collections/Categories' // ✅ added

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    dateFormat: 'dd/mm/yyyy',
    meta: {
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/payload_dark.png',
          media: '(prefers-color-scheme: light)',
        },
        {
          rel: 'icon',
          type: 'image/png',
          url: '/payload_light.png',
          media: '(prefers-color-scheme: dark)',
        },
      ],
    },
  },
  collections: [
    Users,
    Media,
    Categories, 
    Posts,      
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
