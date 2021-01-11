const board = document.querySelector('.taskboard');
const lists = board.querySelectorAll('.taskboard__list');

for (let list of lists) {
  let items = list.children;
  for (let item of items) {
    item.draggable = true;
  }

  board.addEventListener('dragstart', (evt) => {
    console.log('dragstart');
    evt.target.classList.add(`task--dragged`);
  });

  board.addEventListener('dragend', (evt) => {
    console.log('dragend');
    evt.target.classList.remove(`task--dragged`);
  });

  board.addEventListener('dragover', (evt) => {
    evt.preventDefault();

    const activeElement = board.querySelector(`.task--dragged`);
    const currentElement = evt.target;

    const isMoveable = activeElement !== currentElement && currentElement.classList.contains(`taskboard__item`);

    if (!isMoveable) {
      return;
    }

    if (currentElement.classList.contains('task')) {
      const nextElement = (currentElement === activeElement.nextElementSibling) ?
      currentElement.nextElementSibling :
      currentElement;

      currentElement.parentElement.insertBefore(activeElement, nextElement);
    }
  })
}
