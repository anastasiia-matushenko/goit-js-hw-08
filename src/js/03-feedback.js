import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(onFormInput, 500));
form.addEventListener("submit", onFormSubmit);

const STORAGE_KEY = "feedback-form-state";
let formData = {};

populateInput();

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();

    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
};

function populateInput() {

    if (localStorage.getItem(STORAGE_KEY)) {
        formData = JSON.parse(localStorage.getItem(STORAGE_KEY));

        const { email, message } = form.elements;
        if (formData.email) {
            email.value = formData.email;
        }

        if (formData.message) {
            message.value = formData.message;
        }
    } 
};
