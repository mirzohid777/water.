const backroundColors = ['#F4A764', '#ADB0B0', '#30A357', '#F24F4F'];
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
swiper.on('slideChange', function(){
    const colorIndex = swiper.realIndex % backroundColors.length;
    document.body.style.backgroundColor = backroundColors[colorIndex];
})
document.body.style.backgroundColor = backroundColors[0]




