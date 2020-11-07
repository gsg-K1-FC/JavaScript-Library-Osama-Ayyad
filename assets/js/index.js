let allBooks = localStorage.getItem("books");
let books =  [
            {title: 'A Smarter Way to Learn JavaScript', author: 'Mark Myers', image: './assets/images/1.jpg'},
            {title: 'Eloquent JavaScript', author: 'Marjin Haverbeke', image: './assets/images/2.jpg'},
            {title: 'JavaScript & JQuery: Interactive Front-End Web Development', author: 'Jon Duckett', image: './assets/images/3.png'},
            {title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', image: './assets/images/4.jpg'},
            {title: 'Learn JavaScript VISUALLY', author: 'Ivelin Demirov', image: './assets/images/5.png'},
            {title: 'JavaScript: The Definitive Guide', author: 'David Flanagan', image: './assets/images/6.jpg'},
            {title: 'Effective JavaScript', author: 'David Herman, Foreword by Brendan Eich', image: './assets/images/7.png'},
            {title: 'JavaScript for Kids', author: 'Nick Morgan', image: './assets/images/8.png'},
            {title: 'Programming JavaScript Applications', author: 'Eric Elliott', image: './assets/images/9.jpg'},
            {title: 'High-Performance Browser Networking', author: 'Ilya Grigorik', image: './assets/images/10.jpg'}
];

let card = document.getElementById("cards");



showBooks();
function showBooks(){
    card.innerHTML = "";
    //let myBooks= JSON.parse(books);
        books.map(function (book,i){
        let cardItem = document.createElement("div");
        let cardContent = document.createElement("div");
        let bookTitle = document.createElement("div");
        let bookAuthor = document.createElement("div");
        let bookImage = document.createElement("img");
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookImage.src= book.image;
        cardContent.appendChild(bookImage);
        cardContent.appendChild(bookTitle);
        cardContent.appendChild(bookAuthor);
        cardItem.appendChild(cardContent);
        card.appendChild(cardItem);
        cardItem.className = 'cardItem';
        cardContent.className = 'cardContent';
        bookTitle.className = 'cardTitle';
        bookAuthor.className = 'cardAuthor';
        bookImage.className = 'cardImage';
    }
    );

   // localStorage.setItem("books", JSON.stringify(books));
}

document.getElementById("add-btn").addEventListener("click", function(e){
    e.preventDefault();
    let bTitle=document.getElementById("Btitle").value;
    let bAuthor=document.getElementById("Bauthor").value;
    let bImg=document.getElementById("Bimg").value;

    if(bTitle === "" || bTitle === " " ){
        alert("Please Enter the Title of the Book");
    }
    else if(bAuthor === "" || bAuthor === " "){
        alert("Please Enter the Auther Name of the Book");
    }
    else if(bImg === "" || bImg === " "){
        alert("Please Enter the Image of the Book");
    }
    else {
        books.push({title: bTitle, author: bAuthor, image: bImg });
        document.getElementById("Btitle").value="";
        document.getElementById("Bauthor").value="";
        document.getElementById("Bimg").value="";
        showBooks();
        
    }
    
});