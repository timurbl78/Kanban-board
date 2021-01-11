import {RenderPosition, InsertPosition} from "./constants";

export function createElement(template) {
  const element = document.createElement(`div`);
  element.innerHTML = template;

  return element.firstElementChild;
}

export const render = (container, child, place) => {
  if (container instanceof Abstract) {
    container = container.getElement();
  }

  if (child instanceof Abstract) {
    child = child.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

export function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
