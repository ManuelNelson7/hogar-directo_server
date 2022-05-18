export default {
    name: 'property',
    title: 'Property',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint',
        },
        {
            name: 'propertyType',
            title: 'Property Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Casa', value: 'house' },
                    { title: 'Departamento', value: 'departamento' },
                    { title: 'PH', value: 'ph' },
                    { title: 'Quinta', value: 'quinta' },
                    { title: 'Garage', value: 'garage' },
                    { title: 'Oficina comercial', value: 'oficina' },
                    { title: 'Local comercial', value: 'local' },
                    { title: 'Terreno', value: 'terreno' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'modalidad',
            title: 'Modalidad',
            type: 'string',
            options: {
                list: [
                    { title: 'Alquilar', value: 'alquilar' },
                    { title: 'Comprar', value: 'comprar' },
                ],
                layout: 'radio',
            },
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'propertyImage' }],
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'expensas',
            title: 'Expensas',
            type: 'number',
        },
        {
            name: 'ambientes',
            title: 'Ambientes',
            type: 'number',
        },
        {
            name: 'bathrooms',
            title: 'Bathrooms',
            type: 'number',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 100,
            },
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number',
        },
        {
            name: 'descripcion',
            title: 'Descripción',
            type: 'string',
        },
        {
            name: 'owner',
            title: 'Owner',
            type: 'owner',
        },
    ],
    preview: {
        select: {
            title: 'title',
            price: 'price',
        },
    },
}