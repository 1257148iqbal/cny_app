export const onTextFieldFocus = (e, idPrefix, index, dataLength) => {
  if (e.keyCode === 40) {
    if (index < dataLength - 1) {
      let currentElement = document.querySelector(`#${idPrefix}${index + 1}`);
      const isCurrentElementDisabled = currentElement.hasAttribute('disabled');
      if (isCurrentElementDisabled) currentElement = document.querySelector(`#${idPrefix}${index + 2}`);
      currentElement.focus();
    }
  }
  if (e.keyCode === 38) {
    if (index > 0) {
      let currentElement = document.querySelector(`#${idPrefix}${index - 1}`);
      const isCurrentElementDisabled = currentElement.hasAttribute('disabled');
      if (isCurrentElementDisabled) currentElement = document.querySelector(`#${idPrefix}${index - 2}`);
      currentElement.focus();
    }
  }
};
