export const catchErrors = fn => (...args) =>
  fn(...args).catch(err => console.error(err));
