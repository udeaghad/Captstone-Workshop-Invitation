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
        "Board director, CEO, entrepreneur, and deputy CTO at Microsoft.",
        "PhD in Computer Science, UCLA, 1974 · Employment Professor, Keio University, 2008-Present",
        "Novelist, short story writer, non-fiction writer", 
        ],
    aboutSpeaker = [
        
        "Benkler studies commons-based peer production, and published his seminal book 'The Wealth of Networks in 2006.'",
        "As the main venue for new media art production in korea, nabi promotes cross-disciplinary collaboration and understanding among science technology, humanites and the arts",
        "A Water Services Specialist at District of Columbia Water and Sewer Authority, Washington DC, United State of America. I’ve acquired a thorough understanding of water availability, distribution and multi-disciplinary approaches to planning and rational management of water resources.",
        "A strategic, customer-centric innovator, known for rapid growth. Experience includes creating and scaling companies, operating a top-5 web and media property, a top-10 US retail bank, the largest global energy PPP and a first-tier VC. A unique and diverse background of business, technology, design, and policy.",
        "Professor Chon contributed to the Internet's growth in Asia through his extensive work in advancing Internet initiatives, research, and development.",
        "Chimamanda Ngozi Adichie is a Nigerian writer whose works include novels, short stories and nonfiction",
         ]

} = ['speakers']

const speakerImage = (num) => photoImage[num];
const nameOfSpeaker = (num) => speakerName[num];
const profileOfSpeaker = (num) => speakerProf[num];
const speakerAbout = (num) => aboutSpeaker[num];

const speakerContainer = document.querySelector(".speakers");


const featureSpeaker = document.createElement("div");
featureSpeaker.classList.add("f-speaker");
featureSpeaker.innerText = "Featured Speakers";
speakerContainer.appendChild(featureSpeaker);

for (let i = 0;i < speakerName.length; i+=1){
const speakerBox = document.createElement("div");
speakerBox.classList.add("speaker-content");
speakerContainer.appendChild(speakerBox);


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
    console.log("I am running")
const imgSpeaker = document.querySelector('img');
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
