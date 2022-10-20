import 'animate.css/animate.min.css';

function component() {
  const element = document.createElement('div');
  element.classList.add('animate__animated');
  element.innerHTML = 'hello world';

  return element;
}

document.body.appendChild(component());
