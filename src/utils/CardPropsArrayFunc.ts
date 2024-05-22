// interface CardProps {
//   borderRadius: string;
//   avatarSrc: string;
//   titleHeader: string;
//   subTitleHeader: string;
//   price: number;
//   listItems: string[];
// }

// export const cardPropsArray: CardProps[] = [
//   {
//     borderRadius: '20px 0 0 20px',
//     avatarSrc:
//       'https://s3-alpha-sig.figma.com/img/c9ed/3af3/7adde321a6caec97895d6a1e7d1de08e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPf93O~Nf3G9r9-sMR~zhudGbY3eoV9AtgUd-sD3Lhse5a5ciQtvXHEG1nBq~v8cI7GzOYy-SgtjJw1c2Louj8EXdI8nCVPaiXf1C6glim6UimLiIDqkZ3PnizlOP6ie2YjT-hD7~6kYyBChIvUIZ-mfB8rRRROUbv-yDzkdMwsn2yarLgb72vlwkiJqYn7uKOn0UoVBvmE33ZpS3Mv2vru2QgXkazSlt-PCTng3ReiitGieHVf-Xr6cr1rwfg2UO-Vd2hwubP8moPTPYHz1AC7QG1~Wg7ibdjacVRHA1YnGhWK6K9T5rKZxNEEgsPy3vRFJuotjCwjdemjBsx1x~w__',
//     titleHeader: 'Single Size',
//     subTitleHeader: 'Perfect for people who live alone',
//     price: 10,
//     listItems: ['2 loads per week', 'up to 10 lbs per load'],
//   },
//   {
//     borderRadius: '20px',
//     avatarSrc:
//       'https://s3-alpha-sig.figma.com/img/01a7/ed11/dbb8f30f73b6c4e708f185b2545a4d82?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VIAWVXT2kdDoDrFg929xa3~lD6CRyOlVFY5s88WZylV-6z~YlKXTDXxjM~11TdOICecOGISTAA~XM798wIifTbPym4op~S8Jczn2iiEBw2aZM9hK1HmR06GPXNQHQShnabRa2QtBajy1UoDPln5FBkG3MFlVm36S2-GqQFC9cw0N-C~C2x6lJuOQ5eP5TB~nHt-17X8ZxV1vQxPqy5Huv8baLWxkKsxVG9vsjSE4v41MFk-G89GxR5sBmGdqEgNDz4dXcGs8D8xfu2C5tfVfbqirIazV0JVCbF0SZ9gUzBu20UUlAaDHBUubsp6Qe0DvcmO72pDTbNKESMX15zfwIg__',
//     titleHeader: 'Couples size',
//     subTitleHeader: 'Perfect for couples size 3-6',
//     price: 20,
//     listItems: [
//       '4 loads per week',
//       'up to 12 lbs per load',
//       'Special garments',
//       'Pickup & drop off',
//     ],
//   },
//   {
//     borderRadius: '0 20px 20px 0',
//     avatarSrc:
//       'https://s3-alpha-sig.figma.com/img/57d2/14e3/d80f6693c78c866370aaec179c0a2fdf?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SRXy1505lG7rbVe1if9HTpdrebvH558DhWGs9wPFNgjwu6uCRaTBb~M3wtGBwh30ADl1ceZWOFpSbucftNTgwWM2KuFlGbKrm8zKCisJzBvlpWbwHNBrwfZyY6-~BuJ9TFYjgfnu-DoGMZ0JpG99f1mn7O9pNKoWS5v1jWZUovyBbXUKs5kxFk-rgqHGwEXtp9wSOis9pixVMYnxHV3TzG3bmoiU7ZapP2Ep8Sv0JcfvSIN-Gc6xGjpIxEaGUYZ4BdTzgmp38mECBz9lX8d3NKUUDWsMijiEgRNhpR6e3-WbnTvmlnviWNMx-FxLlXGyNRXmpbljp~6WGvo2iaCfSg__',
//     titleHeader: 'Family size',
//     subTitleHeader: 'Perfect for families size 4-6',
//     price: 30,
//     listItems: [
//       '6 loads per week',
//       'up to 15 lbs per load',
//       'Special garments',
//       'Pickup & drop off',
//       'Free detergent samples',
//     ],
//   },
// ];

// Define the CardProps interface
interface CardProps {
  borderRadius: string;
  avatarSrc: string;
  titleHeader: string;
  subTitleHeader: string;
  price: number;
  listItems: string[];
}

// Function to return an array of CardProps
export const cardPropsArrayFunc = (): CardProps[] => {
  const cardPropsArray: CardProps[] = [
    {
      borderRadius: '20px 0 0 20px',
      avatarSrc:
        'https://s3-alpha-sig.figma.com/img/c9ed/3af3/7adde321a6caec97895d6a1e7d1de08e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPf93O~Nf3G9r9-sMR~zhudGbY3eoV9AtgUd-sD3Lhse5a5ciQtvXHEG1nBq~v8cI7GzOYy-SgtjJw1c2Louj8EXdI8nCVPaiXf1C6glim6UimLiIDqkZ3PnizlOP6ie2YjT-hD7~6kYyBChIvUIZ-mfB8rRRROUbv-yDzkdMwsn2yarLgb72vlwkiJqYn7uKOn0UoVBvmE33ZpS3Mv2vru2QgXkazSlt-PCTng3ReiitGieHVf-Xr6cr1rwfg2UO-Vd2hwubP8moPTPYHz1AC7QG1~Wg7ibdjacVRHA1YnGhWK6K9T5rKZxNEEgsPy3vRFJuotjCwjdemjBsx1x~w__',
      titleHeader: 'Single Size',
      subTitleHeader: 'Perfect for people who live alone',
      price: 10,
      listItems: ['2 loads per week', 'up to 10 lbs per load'],
    },
    {
      borderRadius: '20px',
      avatarSrc:
        'https://s3-alpha-sig.figma.com/img/01a7/ed11/dbb8f30f73b6c4e708f185b2545a4d82?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VIAWVXT2kdDoDrFg929xa3~lD6CRyOlVFY5s88WZylV-6z~YlKXTDXxjM~11TdOICecOGISTAA~XM798wIifTbPym4op~S8Jczn2iiEBw2aZM9hK1HmR06GPXNQHQShnabRa2QtBajy1UoDPln5FBkG3MFlVm36S2-GqQFC9cw0N-C~C2x6lJuOQ5eP5TB~nHt-17X8ZxV1vQxPqy5Huv8baLWxkKsxVG9vsjSE4v41MFk-G89GxR5sBmGdqEgNDz4dXcGs8D8xfu2C5tfVfbqirIazV0JVCbF0SZ9gUzBu20UUlAaDHBUubsp6Qe0DvcmO72pDTbNKESMX15zfwIg__',
      titleHeader: 'Couples size',
      subTitleHeader: 'Perfect for couples size 3-6',
      price: 20,
      listItems: [
        '4 loads per week',
        'up to 12 lbs per load',
        'Special garments',
        'Pickup & drop off',
      ],
    },
    {
      borderRadius: '0 20px 20px 0',
      avatarSrc:
        'https://s3-alpha-sig.figma.com/img/57d2/14e3/d80f6693c78c866370aaec179c0a2fdf?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SRXy1505lG7rbVe1if9HTpdrebvH558DhWGs9wPFNgjwu6uCRaTBb~M3wtGBwh30ADl1ceZWOFpSbucftNTgwWM2KuFlGbKrm8zKCisJzBvlpWbwHNBrwfZyY6-~BuJ9TFYjgfnu-DoGMZ0JpG99f1mn7O9pNKoWS5v1jWZUovyBbXUKs5kxFk-rgqHGwEXtp9wSOis9pixVMYnxHV3TzG3bmoiU7ZapP2Ep8Sv0JcfvSIN-Gc6xGjpIxEaGUYZ4BdTzgmp38mECBz9lX8d3NKUUDWsMijiEgRNhpR6e3-WbnTvmlnviWNMx-FxLlXGyNRXmpbljp~6WGvo2iaCfSg__',
      titleHeader: 'Family size',
      subTitleHeader: 'Perfect for families size 4-6',
      price: 30,
      listItems: [
        '6 loads per week',
        'up to 15 lbs per load',
        'Special garments',
        'Pickup & drop off',
        'Free detergent samples',
      ],
    },
  ];

  return cardPropsArray;
};
