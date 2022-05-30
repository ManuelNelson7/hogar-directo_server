export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}