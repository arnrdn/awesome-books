/* eslint-disable no-undef */

function setDate() {
  const date = document.getElementById('date');
  const { DateTime } = luxon;
  date.innerHTML = DateTime.now().toFormat('LLL dd yyyy, t');
}

setDate();

const list = document.querySelector('#list');
const addNew = document.querySelector('#add');
const Contact = document.querySelector('#cont_txt');
const listPage = document.querySelector('.book-list-container');
const addNewPage = document.querySelector('.addNew');
const ContactPage = document.querySelector('.contact-us');
list.addEventListener('click', () => {
  listPage.setAttribute('style', 'display: flex');
  addNewPage.setAttribute('style', 'display: none');
  ContactPage.setAttribute('style', 'display: none');
});
addNew.addEventListener('click', () => {
  addNewPage.setAttribute('style', 'display: flex');
  listPage.setAttribute('style', 'display: none');
  ContactPage.setAttribute('style', 'display: none');
});
Contact.addEventListener('click', () => {
  ContactPage.setAttribute('style', 'display: flex');
  addNewPage.setAttribute('style', 'display: none');
  listPage.setAttribute('style', 'display: none');
});