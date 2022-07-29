(() => {
  const select = document.querySelector('#color');
  const body = document.querySelector('body');

  const colors = ['normal', 'dark-green', 'white-beige'];

  select.addEventListener('change', () => {
    removeAllClasses();
    if (select.value == colors[1] || select.value == colors[2]) {
      addClass(select.value);
    }
  })
  function addClass(value) {
    body.classList.add(value);
  }
  function removeAllClasses() {
    for (let i = 1; i < colors.length; i++) {
      body.classList.remove(`${colors[i]}`);
    }
  }
})()