const catchErrors = fn =>
  function(...args) {
    return fn(...args).catch(err => {
      console.error('Ohh no we got an error!!!');
      console.error(err);
    });
  };

module.exports = catchErrors;
