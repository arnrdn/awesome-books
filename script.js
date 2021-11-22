const id = null;
const bookInput = document.querySelector('#txt');
const bookInputOne = document.querySelector('#txtOne');
const addBtn = document.querySelector('.add');
const bookList = document.querySelector('.book-list');
let bookArray = JSON.parse(localStorage.getItem('bookArray'));
if (bookArray == null) {
  bookArray = [];
}
function display() {
  bookList.innerHTML = '';
  bookArray.forEach((element) => {
    const MyBooks = document.createElement('ul');
    const MyList = document.createElement('li');
    const MyListTwo = document.createElement('li');
    const Mybutton = document.createElement('button');
    Mybutton.classList = 'remove_btn';
    Mybutton.setAttribute('id', element.id);
    Mybutton.setAttribute('onclick', `${'remoteAt(this.id)'}`);
    MyList.innerHTML = element.booksName;
    MyListTwo.innerHTML = element.booksAu;
    Mybutton.innerHTML = 'Remove';
    MyBooks.appendChild(MyList);
    MyBooks.appendChild(MyListTwo);
    MyBooks.appendChild(Mybutton);
    bookList.appendChild(MyBooks);
    bookInput.value = '';
    bookInputOne.value = '';
  });
  localStorage.clear();
  localStorage.setItem('bookArray', JSON.stringify(bookArray));
}

addBtn.addEventListener('click', (e) => {
  if (bookInput.value !== '') {
    e.preventDefault();
    // create li
    // var input = bookInput.value;
    const object = {
      id: Math.random().toString(16).slice(2),
      booksName: bookInput.value,
      booksAu: bookInputOne.value,
    };
    bookArray.push(object);
    display();
  }
});

function remoteAt(id) {
  const element = document.getElementById(id);
  const index = bookArray.findIndex((prop) => prop.id === id);
  bookArray.splice(index, 1);
  element.parentElement.style.display = 'none';
  display();
}

window.addEventListener('load', () => {
  display();
  remoteAt(id);
});