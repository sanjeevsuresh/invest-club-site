const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
console.log('hi ')

const run = () =>
console.log('hi there')
console.log(items)
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
      console.log('hi awdj')
    }

  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
document.body.addEventListener('scroll', () =>
  items.forEach(item => {
    console.log('in here')
    if (isInViewport(item)) {
      item.classList.add('show');
      console.log('hi awdj')
    }

  }));
