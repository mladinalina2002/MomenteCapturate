import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

/**export const client = sanityClient({
    projectId: "qlgvu6aq",
    dataset: 'production',
    apiVersion: '2022-12-01',
    useCdn: true,
    token: "sknuegypMidnricNpVIiDhDhwTUqlz79v9vkAxDWB6ORYMYdz1Yu7l93yglWRKjEoHqWDblSEwDveQb6SES9ofFspUk5gjopkQHSis2AwaAIB17FIULTnoqAfdRpgJM81x5xHhnoBXLYimSy1rVg0hSb7k9H2ZSeLKZt6PvDS3hjXRF9j00V",
});**/
export const client = sanityClient({
    projectId:"qlgvu6aq",
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: "sknuegypMidnricNpVIiDhDhwTUqlz79v9vkAxDWB6ORYMYdz1Yu7l93yglWRKjEoHqWDblSEwDveQb6SES9ofFspUk5gjopkQHSis2AwaAIB17FIULTnoqAfdRpgJM81x5xHhnoBXLYimSy1rVg0hSb7k9H2ZSeLKZt6PvDS3hjXRF9j00V",
    ignoreBrowserTokenWarning: true,
    
  })

const builder = imageUrlBuilder(client);

export const urlFor=(source) => builder.image(source);



