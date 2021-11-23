/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */

const id = null;
const bookInput = document.querySelector('#txt');
const bookInputOne = document.querySelector('#txtOne');
const addBtn = document.querySelector('.add');
const bookList = document.querySelector('.book-list');

class Books {
  constructor(id, booksName, booksAu) {
    this.booksName = booksName;
    this.booksAu = booksAu;
    this.id = id;
  }
}

class BookStore {
  static getBooks() {
    let bookArray;
    if (localStorage.getItem('bookArray') === null) {
      bookArray = [];
    } else {
      bookArray = JSON.parse(localStorage.getItem('bookArray'));
    }
    return bookArray;
  }

  static addButton() {
    const bookArray = BookStore.getBooks();
    addBtn.addEventListener('click', (e) => {
      if (bookInput.value !== '') {
        e.preventDefault();
        const object = new Books(
          Math.random().toString(16).slice(2),
          bookInput.value,
          bookInputOne.value,
        );
        bookArray.push(object);
        BookStore.display();
      }
      localStorage.setItem('bookArray', JSON.stringify(bookArray));
    });
  }

  static removeAt(id) {
    const bookArray = BookStore.getBooks();
    const element = document.getElementById(id);
    const index = bookArray.findIndex((prop) => prop.id === id);
    bookArray.splice(index, 1);
    element.parentElement.style.display = 'none';
    BookStore.display();
    localStorage.setItem('bookArray', JSON.stringify(bookArray));
  }
}

class BookDisplay {
  static display() {
    const bookArray = BookStore.getBooks();
    bookList.innerHTML = '';
    bookArray.forEach((element) => {
      const MyBooks = document.createElement('ul');
      const MyList = document.createElement('li');
      const MyListTwo = document.createElement('li');
      const Mybutton = document.createElement('button');
      Mybutton.classList = 'remove_btn';
      Mybutton.setAttribute('id', element.id);
      Mybutton.setAttribute('onclick', `${'removeAt(this.id)'}`);
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
}

// document.addEventListener('DOMContentLoaded', BookStore.display);

// addBtn.addEventListener('submit', BookStore.addButton);