import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
<<<<<<< HEAD
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
  _id: " ",
=======
    projectId: "",
    dataset: 'production',
    apiVersion: '2022-12-01',
    useCdn: true,
    token: "",
>>>>>>> 27db781a402609ca9eab1c7dcc1d79d56cf3569c
});

const builder = imageUrlBuilder(client);

<<<<<<< HEAD
export const urlFor = (source) => builder.image(source);
=======
export const urlFor=(source) => builder.image(source);
>>>>>>> 27db781a402609ca9eab1c7dcc1d79d56cf3569c
