const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const addBtn = document.getElementById('add');
const bookList = document.getElementsByClassName('book-cards');
const id = null;

const bookArr = [];

function display() {
  bookList.innerHTML = '';
  bookArr.forEach((element) => {
    const BookCard = document.createElement('li');
    const BookCardTwo = document.createElement('li');
    const RemoveBtn = document.createElement('button');
    RemoveBtn.classList = 'remove_btn';
    RemoveBtn.setAttribute('id', element.id);
    RemoveBtn.setAttribute('onclick', `${'remoteAt(this.id)'}`);
    BookCard.innerHTML = element.booksName;
    BookCardTwo.innerHTML = element.booksAu;
    RemoveBtn.innerHTML = 'Remove';
    bookList.appendChild(BookCard);
    bookList.appendChild(BookCardTwo);
    bookList.appendChild(RemoveBtn);
    bookList.appendChild(bookList);
    titleInput.value = '';
    authorInput.value = '';
  });
  localStorage.clear();
  localStorage.setItem('bookArr', JSON.stringify(bookArr));
}

addBtn.addEventListener('click', (e) => {
  if (titleInput.value !== '') {
    e.preventDefault();
    const book = {
      id: Math.random().toString(16).slice(2),
      title: titleInput.value,
      author: authorInput.value,
    };
    bookArr.push(book);
    display();
  }
});

function remoteAt(id) {
  const element = document.getElementById(id);
  const index = bookArr.findIndex((prop) => prop.id === id);
  bookArr.splice(index, 1);
  element.parentElement.style.display = 'none';
  display();
}

window.addEventListener('load', () => {
  display();
  remoteAt(id);
});
