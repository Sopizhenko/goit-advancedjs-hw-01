const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email;
  formData.message = parsedData.message;

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  if (formData.email === '' || formData.message === '') {
    event.preventDefault();
    return alert('Fill please all fields');
  }

  console.log(formData);
  formData.email = '';
  formData.message = '';
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
});
