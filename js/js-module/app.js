requirejs.config({
  paths: {
    jq: './jq',
    swiper: './swiper'
  }
})

// require(['jq'], jq => {
//   document.getElementById('btn').addEventListener('click', () => {
//     require(['swiper'], swiper => {
//       console.log('swiper')
//     })
//   })
// })
require(['./seaMain'], seaMain => {})