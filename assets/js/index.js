let allBooks = localStorage.getItem("books");
let books = allBooks ? allBooks : [
            {title: 'A Smarter Way to Learn JavaScript', author: 'Mark Myers', image: './assets/images/1.jpg'},
            {title: 'Eloquent JavaScript', author: 'Marjin Haverbeke', image: './assets/images/2.jpg'},
            {title: 'JavaScript & JQuery: Interactive Front-End Web Development', author: 'Jon Duckett', image: './assets/images/3.png'},
            {title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', image: '4.jpj'},
            {title: 'Learn JavaScript VISUALLY', author: 'Ivelin Demirov', image: '5.png'},
            {title: 'JavaScript: The Definitive Guide', author: 'David Flanagan', image: './assets/images/6.jpg'},
            {title: 'Effective JavaScript', author: 'David Herman, Foreword by Brendan Eich', image: './assets/images/7.png'},
            {title: 'JavaScript for Kids', author: 'Nick Morgan', image: './assets/images/8.png'},
            {title: 'Programming JavaScript Applications', author: 'Eric Elliott', image: './assets/images/9.jpg'},
            {title: 'High-Performance Browser Networking', author: 'Ilya Grigorik', image: './assets/images/10.jpg'}
];



let card = document.getElementsByClassName("cards");


/*let someBooks = [{title: 'A Smarter Way to Learn JavaScript', author: 'Mark Myers', image: './assets/images/1.jpg'},
                 {title: 'Eloquent JavaScript', author: 'Marjin Haverbeke', image: './assets/images/2.jpg'},
                 {title: 'JavaScript & JQuery: Interactive Front-End Web Development', author: 'Jon Duckett', image: './assets/images/3.png'},
                 {title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', image: '4.jpj'},
                 {title: 'Learn JavaScript VISUALLY', author: 'Ivelin Demirov', image: '5.png'},
                 {title: 'JavaScript: The Definitive Guide', author: 'David Flanagan', image: './assets/images/6.jpg'},
                 {title: 'Effective JavaScript', author: 'David Herman, Foreword by Brendan Eich', image: './assets/images/7.png'},
                 {title: 'JavaScript for Kids', author: 'Nick Morgan', image: './assets/images/8.png'},
                 {title: 'Programming JavaScript Applications', author: 'Eric Elliott', image: './assets/images/9.jpg'},
                 {title: 'High-Performance Browser Networking', author: 'Ilya Grigorik', image: './assets/images/10.jpg'}
];

for(var key in someBooks) {
    books.push(someBooks[key]);
}*/

showBooks();
function showBooks(){
    card.innerHTML = "";
  
    books.map(function (book,i){
        let cardItem = document.createElement("div").className = "cardItem";
        let cardContent = document.createElement("div").className = "cardContent";
        let bookTitle = document.createElement("div").className = "cardTitle";
        let bookAuthor = document.createElement("div").className = "cardAuthor";
        let bookImage = document.createElement("img").className = "cardImage";
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookImage.src= book.image;
        cardContent.appendChild(bookImage);
        cardContent.appendChild(bookTitle);
        cardContent.appendChild(bookAuthor);
        cardItem.appendChild(cardContent);
        card.appendChild(cardItem);


    }
    );

    localStorage.setItem("books", JSON.stringify(books));
}

document.getElementById("add-btn").addEventListener("click", function(){
    let bTitle=document.getElementById("Btitle").value;
    let bAuthor=document.getElementById("Bauthor").value;
    let bImg=document.getElementById("Bimg").value;

    if(bTitle === ""){
        alert("Please Enter the Title of the Book");
    }
    else if(bAuthor === ""){
        alert("Please Enter the Auther Name of the Book");
    }
    else if(bImg === ""){
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