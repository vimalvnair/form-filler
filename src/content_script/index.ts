import FormFiller from 'src/common/form-filler';

declare global {
  interface Window {
    formFiller: FormFiller;
    overrideIgnoreFieldsWithContent: boolean;
  }
}

document.addEventListener('mousedown', event => {
  if (event.button === 2 && window.formFiller) {
    window.formFiller.setClickedElement(event.target as HTMLElement);
  }
});

chrome.runtime.sendMessage('getOptions', response => {
  if (!window.formFiller) {
    window.formFiller = new FormFiller(response.options);
  }
});
