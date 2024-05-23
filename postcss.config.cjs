module.exports = {
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss')('./tailwind.config.ts'),
    require('autoprefixer'),
  ],
};

// /*eslint-env node*/

// module.exports = {
//   plugins: [
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     require('tailwindcss')('./tailwind.config.ts'),
//     require('autoprefixer'),
//   ],
// };
