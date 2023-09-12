let string = "";
let buttons = document.querySelectorAll('.buttons');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonValue = e.target.innerHTML;

    const inputValue = buttonValue === 'X' ? '*' : buttonValue;

    if (inputValue === '=') {
      string = string.replace(/X/g, '*');
      string = eval(string);
      document.querySelector('input').value = string.toString().replace(/\*/g, 'X');
    } else if (inputValue === 'RESET') {
      string = "";
      document.querySelector('input').value = string;
    } else if (inputValue === 'DEL') {

      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    } else {
      console.log(inputValue);
      string = string + inputValue;
      document.querySelector('input').value = string.replace(/\*/g, 'X');
    }
  });
});
