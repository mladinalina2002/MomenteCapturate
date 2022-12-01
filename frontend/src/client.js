import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "qlgvu6aq",
    dataset: 'production',
    apiVersion: '2022-12-01',
    useCdn: true,
    token: "skFxCcHP3quaawYG61GhQcniAn49Bs3BMfqKMfaAajYy38RtEgQ8nYr93ktaM2i5BDrxd79ly0v7jRyvJbRwg9sxahFUu6aPEETN1Vo3P5msWRu6bSzJFAkncTzSAVJKB8DxePHptzvMQlYen8jlDge0aaKxcmN84he6nUpKpv0X1FiR5",
});

const builder= imageUrlBuilder(client);

export const urlFor=(source) => builder.image(source);