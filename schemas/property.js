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
            name: 'address',
            title: 'Address',
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
            name: 'currency',
            title: 'Moneda',
            type: 'string',
            options: {
                list: [
                    { title: 'Pesos argentinos', value: 'ars' },
                    { title: 'Dólares', value: 'usd' },
                ],
                layout: 'radio',
            },
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
            name: 'bedrooms',
            title: 'Bedrooms',
            type: 'number',
        },
        {
            name: 'superficie',
            title: 'Superficie',
            type: 'number',
        },
        {
            name: 'totalSuperficie',
            title: 'TotalSuperficie',
            type: 'number',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'string',
        },
        {
            name: 'id',
            title: 'ID',
            type: 'string',
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
        {
            name: 'status',
            title: 'Estado de la publicación',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'title',
            price: 'price',
        },
    },
}