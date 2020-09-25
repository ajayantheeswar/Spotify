module.exports = {
  plugins: [],
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
   
  },
  theme: {
    extend: {
      colors : {
        spgreen : '#1DB954',
        spgreen1 : '#1ED760',
        lipgrey : '#919496',
        facebookBlue : '#3a5897',
        greyblack100 : '#222326',
        greyblack200 : '#919496',
        lightgrey1 : '#9E9E9E',
        lightgrey2 : '#282828',
        lightgrey3 : '#7f7f7f'
      }
    },
    fill: theme => ({
            'red': theme('colors.red.500'),
            'green': theme('colors.green.500'),
            'blue': theme('colors.blue.500'),
            'white' : theme('colors.white'),
            'black' : theme('colors.black')
    }),
    stroke: theme => ({
      'red': theme('colors.red.500'),
      'green': theme('colors.green.500'),
      'blue': theme('colors.blue.500'),
      'white' : theme('colors.white'),
      'black' : theme('colors.black')
  })   
  },
 
  variants: {},
  
}
