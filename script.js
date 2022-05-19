const {    
    speakerName = [        
        "Yochai Benkler",
        "SohYeong Noh",
        "Churchil Okonkwo",
        "Lila tetrikov",
        "Kilnam Chom",
        "Chimamanda Adichie", 
        ],
    photoImage = [
            "images/yochai-benkler.jpg",
            "images/sohyang.jpg",
            "images/churchil-okonkwo.jpg" ,
            "images/lila-tretikov.jpg",
            "images/kilnam-chom.jpg",
            "images/chimamanda.jpg"
            ],
    speakerProf = [        
        "Berman Professor of Entrepreneurial Legal Studies at Havard Law School",
        "Director of Art Center Nabi and a board member of CC Korea",
        "As an Assistant Program Manager at DC Water",
        "Deputy CTO at Microsoft.",
        "PhD in Computer Science, UCLA, 1974 ·",
        "Novelist, short story writer, non-fiction writer", 
        ],
    aboutSpeaker = [
        
        "Benkler studies commons-based peer production, and published his seminal book 'The Wealth of Networks in 2006.'",
        "As the main venue for new media art production in korea, nabi promotes cross-disciplinary collaboration and understanding among science technology, humanites and the arts",
        "A Water Services Specialist at District of Columbia Water and Sewer Authority, Washington DC, United State of America.",
        "A strategic, customer-centric innovator, known for rapid growth. Experience includes creating and scaling companies, operating a top-5 web and media property,",
        "Professor Chon contributed to the Internet's growth in Asia through his extensive work in advancing Internet initiatives, research, and development.",
        "Chimamanda Ngozi Adichie is a Nigerian writer whose works include novels, short stories and nonfiction",
         ]

} = ['speakers'];


const nameOfSpeaker = (num) => speakerName[num];
const profileOfSpeaker = (num) => speakerProf[num];
const speakerAbout = (num) => aboutSpeaker[num];
const speakerImage = (num) => photoImage[num];

const speakerContainer = document.querySelector(".speakers");


const featureSpeaker = document.createElement("div");
featureSpeaker.classList.add("f-speaker");
featureSpeaker.innerText = "Featured Speakers";
speakerContainer.appendChild(featureSpeaker);

const speakerItems = document.createElement("div");
speakerItems.classList.add("speaker-items");
speakerContainer.appendChild(speakerItems);

for (let i = 0;i < speakerName.length; i+=1){

const speakerBox = document.createElement("div");
speakerBox.classList.add("speaker-content");
speakerItems.appendChild(speakerBox);


const speakerPhoto = document.createElement("div");
speakerPhoto.classList.add("photo");
speakerBox.appendChild(speakerPhoto);

const speakerDetails = document.createElement("div");
speakerDetails.classList.add("speaker-details");
speakerBox.appendChild(speakerDetails);
}

const speakerPhoto = document.querySelectorAll(".photo");
console.log(speakerPhoto.length)
for (let i =0;i < speakerPhoto.length; i+=1){
  
const imgSpeaker = document.createElement('img');
imgSpeaker.classList.add("speaker-img");
imgSpeaker.src = speakerImage(i);
imgSpeaker.alt = "speaker's photo"
speakerPhoto[i].appendChild(imgSpeaker);
}

const speakerDetails = document.querySelectorAll(".speaker-details");

for (let i =0; i < speakerDetails.length; i+=1){
const speakerId = document.createElement("div");
speakerId.classList.add("speaker-name");
speakerId.innerText = nameOfSpeaker(i)
speakerDetails[i].appendChild(speakerId);

const speakerCap = document.createElement("div");
speakerCap.classList.add("speaker-about");
speakerCap.innerText = profileOfSpeaker(i)
speakerDetails[i].appendChild(speakerCap);

const speakerStory = document.createElement("div");
speakerStory.classList.add("speaker-story");
speakerStory.innerHTML = speakerAbout(i)
speakerDetails[i].appendChild(speakerStory);

}

//console.log(nameOfSpeaker(5))
const moreBar = document.querySelector('.more-bar');
const moreBtn = document.querySelector(".more-btn-ctn");
const speakerBox = document.querySelectorAll(".speaker-content")
console.log(speakerBox[5])
const speakerId = document.getElementsByClassName("speaker-name")

moreBtn.addEventListener("click", () => {

  for (let i = speakerBox.length-1; i >= 2; i-=1){
  if ( speakerBox[i].className == "speaker-content" ){
   
    speakerBox[i].classList = "hide-speaker";
  } else if (speakerBox[i].className == "hide-speaker"){
    speakerBox[i].classList = "speaker-content";
  }  
}
})


const navBar = document.querySelector('.nav-bar');
const menuBar = document.querySelector('.menu-bar');
const navList = document.querySelector('.nav-list');

navBar.addEventListener('click', () => {
  menuBar.classList.toggle('change');
});

navList.addEventListener('click', () => {
  navBar.click();
});
