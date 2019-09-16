export function getFormGroups(task) {
  let formGroups = [...task.querySelectorAll('.form-group')].map((formGroup) => {
    return [...formGroup.querySelectorAll('.form-control')].reduce((acc, input) => {
      Object.defineProperty(acc, [input.dataset.value], { get() { return input.value } });
      return acc;
    }, {});
  });
  return formGroups;
}

export function setOnlyNumbersRestriction(event) {
  if (event.target.classList.contains('string')) {
    event.target.value = event.target.value.replace(/[^\d]/g, '');
  } else {
    let value = Number(event.target.value.replace(/[^\d]/g, ''));
    event.target.value = Object.is(event.target.value, '') ? '' : value;
  };
}