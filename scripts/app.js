document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll('.navbar-burger'),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener('click', () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');
      // console.log('$target', $target);
    });
  });
});


const burger = document.getElementById('navbarBasicExample');
const menu = document.getElementById('tryThis');
const a = document.getElementById('top');
const b = document.getElementById('middle');
const c = document.getElementById('bottom');



document.addEventListener('click', function (event) {
  if (
    event.target !== menu &&
    event.target !== burger &&
    event.target !== a &&
    event.target !== b &&
    event.target !== c
  ) {
    if (
      burger.classList.contains('is-active') &&
      menu.classList.contains('is-active')
    ) {
      console.log('remove the burrger');
      burger.classList.remove('is-active');
      menu.classList.remove('is-active');
    }
  }
})
