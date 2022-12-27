export const categories = [
  {
    name: 'West Summer University',
  image: "https://th.bing.com/th/id/OIP.l2k37SAq1AmINQBm7Uiy0wHaE8?w=254&h=180&c=7&r=0&o=5&pid=1.7",
  },
    {
      name: 'Peisaj',
      image: 'https://camerafoto.eu/wp-content/uploads/2020/02/aeriana-300x200.jpg',
    },
    {
      name: 'Calatorie',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXhNbNbRiyGFxridDsKlkfsIvdjL_tr02HIQ&usqp=CAU',
    },
    {
      name: 'Portret',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbuMEf21xD_A_1ZSrWrImJreH2-TMBepREA&usqp=CAU',
    },
     {
      name: 'Evenimente',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwCCM4qqfA-T-XYYxcwP_8SIuPZmVS0L8Fg&usqp=CAU',
    },
    {
      name: 'Sport',
      image: 'https://www.athletes-photography.com/wp-content/uploads/2020/03/stronggirls_4.jpg',
    }, 
    {
      name: 'Animale',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUL1x-YulCbpAAlMumxvA9X6PskyIZpMp2w&usqp=CAU',
    },
    {
      name: 'Mancare',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAjxlbjJMr7WjCmQzOSUJ9ht5Ur2TBiROVwbbRhDGrWlrIhQCcLO0ijiUc7PQgRlsyRSA&usqp=CAU',
    },
    {
      name: 'Abstract',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJK7DdPVtDcPXPCjf1dpHuSswUtEw2rSexbg&usqp=CAU',
    },
    {
      name: 'Alb-negru',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2aB6HiLvTeADQeRobUdxXMRldgJHPm1UB9g&usqp=CAU',
    }, 
    {
      name: 'other',
    },
  ];


  export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
  };

  export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
    return query;
  };

  export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;
  