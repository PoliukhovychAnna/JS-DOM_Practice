// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);

// firstMenuItem.textContent = "Hello"

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);

// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });

// const date = new Date();

// console.log( date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log( date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// const date = new Date();
// console.log("Date: ", date);

// // Повертає день місяця від 1 до 31
// console.log("getDate(): ", date.getDate());

// // Повертає день тижня від 0 до 6
// console.log("getDay(): ", date.getDay());

// // Повертає місяць від 0 до 11
// console.log("getMonth(): ", date.getMonth());

// // Повертає рік з 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// // Повертає години
// console.log("getHours(): ", date.getHours());

// // Повертає хвилини
// console.log("getMinutes(): ", date.getMinutes());

// // Повертає секунди
// console.log("getSeconds(): ", date.getSeconds());

// // Повертає мілісекунди
// console.log("getMilliseconds(): ", date.getMilliseconds());



//============================= Закрытие рекламы с Timeout and Interval ==============

// const add = document.querySelector(".js-box")
// const counter = document.querySelector(".js-counter")
// const closeBtn = document.querySelector(".js-btn")
// let count = 11

// setTimeout(() => {
//     add.style.display = "block"

//     const id = setInterval(() => {
//     count -= 1;
//         counter.textContent = count;
//         closeBtn.addEventListener("click", onClick) // option 1

//         if (!count) {
//             counter.textContent = 0; // option 1
//             // add.style.display = "none"; // option 2
//             clearInterval(id);
//         }
//     }, 1000
        
//     )

// }, 5000)



// //functional for option 1

// function onClick() {
//     add.style.display = "none";
// }

// closeBtn.removeEventListener("click", onClick);
