const id = null;
const bookInput = document.querySelector('#txt');
const bookInputOne = document.querySelector('#txtOne');
const addBtn = document.querySelector('.add');
const bookList = document.querySelector('.book-list');
let bookArray = JSON.parse(localStorage.getItem('bookArray'));
class Books {
  constructor(id, booksName, booksAu) {
    if (bookArray == null) {
      bookArray = [];
    }
    this.booksName = booksName;
    this.booksAu = booksAu;
    this.id = id;
  }

  static display() {
    bookList.innerHTML = '';
    bookArray.forEach((element) => {
      const MyBooks = document.createElement('ul');
      const MyList = document.createElement('li');
      const Mybutton = document.createElement('button');
      Mybutton.classList = 'remove_btn';
      Mybutton.setAttribute('id', element.id);
      Mybutton.setAttribute('onclick', `${'Books.remoteAt(this.id)'}`);
      MyList.innerHTML = `''${element.booksName}'' by ${element.booksAu}`;
      Mybutton.innerHTML = 'Remove';
      MyBooks.appendChild(MyList);
      MyBooks.appendChild(Mybutton);
      bookList.appendChild(MyBooks);
      bookInput.value = '';
      bookInputOne.value = '';
    });
    localStorage.clear();
    localStorage.setItem('bookArray', JSON.stringify(bookArray));
  }

  static remoteAt(id) {
    const element = document.getElementById(id);
    const index = bookArray.findIndex((prop) => prop.id === id);
    bookArray.splice(index, 1);
    element.parentElement.style.display = 'none';
    Books.display();
  }
}

addBtn.addEventListener('click', (e) => {
  if (bookInput.value !== '') {
    e.preventDefault();
    const object = new Books(Math.random().toString(16).slice(2),
      bookInput.value, bookInputOne.value);
    bookArray.push(object);
    Books.display();
  }
});

window.addEventListener('load', () => {
  Books.display();
  Books.remoteAt(id);
});
