const now = new Date();
const dateTime = document.querySelectorAll('span');
for (let i = 0; i < dateTime.length; i += 1) {
  dateTime[i].innerHTML = now.toString();
}
dateTime.innerHTML = now.toString();

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