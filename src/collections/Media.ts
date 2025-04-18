import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*'], 
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
  },
  access: {
    read: () => true, 
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
};
