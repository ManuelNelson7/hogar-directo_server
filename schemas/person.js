export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
      {
        name: 'nombre',
        title: 'Nombre',
        type: 'string',
        description: 'Please use "Firstname Lastname" format',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'nombre',
          maxLength: 100,
        },
      },
      {
        name: 'id',
        title: 'ID',
        type: 'number',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: 'nombre',
        media: 'image',
      },
    },
  }