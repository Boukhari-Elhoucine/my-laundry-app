/*eslint-env node*/
module.exports = {
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('tailwindcss')('./tailwind.config.ts'),
    require('autoprefixer'),
  ],
};

// import tailwindcss from 'tailwindcss';
// import autoprefixer from 'autoprefixer';

// export default {
//   plugins: {
//     tailwindcss,
//     autoprefixer,
//   },
// };
