function dynamicCardGenerator(title,timeOld,duration,channelName,viewCount){

let Card=document.createElement("div");
let Container = document.querySelector(".container");
let Thumbnail = document.createElement("div");
let IMG=document.createElement("img");
let Duration = document.createElement("span");
let otherInfo=document.createElement("div");
let Title = document.createElement("div");
let smallInfo = document.createElement("div");
let views = document.createElement("span");
let cName = document.createElement("span");
let timeOldSpan = document.createElement("span");
let deleteButton = document.createElement("button");


//main card
Card.classList.add("card");
Container.appendChild(Card);

//thumbnail
Thumbnail.classList.add("thumbnail");
Card.appendChild(Thumbnail);

//Img
IMG.classList.add("img");
IMG.src="https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLBYghRBiZcZs-xVJKq92lAM8h3BOg";
Thumbnail.appendChild(IMG);

//durationTime
Duration.classList.add("duration");
Duration.innerHTML=duration;
Thumbnail.appendChild(Duration);


otherInfo.classList.add("other-info");
Card.appendChild(otherInfo);


Title.textContent=title;
otherInfo.appendChild(Title);

deleteButton.textContent= "Delete";
deleteButton.classList.add("delete-button");
otherInfo.appendChild(deleteButton);


cName.textContent=channelName;
smallInfo.appendChild(cName);

views.textContent=viewCount +" "+ "views";
smallInfo.appendChild(views);


timeOldSpan.textContent=timeOld;
smallInfo.appendChild(timeOldSpan);


otherInfo.appendChild(smallInfo);
smallInfo.classList.add("small-info");

deleteButton.addEventListener('click',function(){
Card.remove();
})


}

dynamicCardGenerator(
"#44 lec Web Dev Lecture for web development",
"4 months ago",
"5:10",
"Anuj Rawat",
"430K"
);
dynamicCardGenerator(
"#44 lec Web Dev Lecture for web development",
"4 months ago",
"5:10",
"Anuj Rawat",
"430K"
);
dynamicCardGenerator(
"#44 lec Web Dev Lecture for web development",
"4 months ago",
"5:10",
"Anuj Rawat",
"430K"
);
















