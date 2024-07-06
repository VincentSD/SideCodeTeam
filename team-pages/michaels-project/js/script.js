const mainEl = document.querySelector("main");

const benefitsContentJson = [
    {
        imgName: "money",
        descPhrase: "competitive pay and overtime"
    },
    {
        imgName: "medical",
        descPhrase: "health and insurance options"
    },
    {
        imgName: "piggy-bank",
        descPhrase: "401K matching programs"
    },
    {
        imgName: "sun",
        descPhrase: "pto and paid holidays"
    },
    {
        imgName: "trophy",
        descPhrase: "monthly rewards and team building"
    },
    {
        imgName: "mug",
        descPhrase: "free snacks and beverages"
    },
    {
        imgName: "ping-pong",
        descPhrase: "fjing fjong [trust us you'll love it]"
    },
    {
        imgName: "apple",
        descPhrase: "multi screen workspace and macbook"
    },
];


for(let content of benefitsContentJson){
    const newSectionEl = document.createElement("section");
    newSectionEl.className = "grid-b-item";

    const imgEl = document.createElement("img");
    imgEl.src = `./image/${content.imgName}.png`;

    const spanEl = document.createElement("span");
    spanEl.textContent = content.descPhrase;
    
    newSectionEl.appendChild(imgEl);
    newSectionEl.appendChild(spanEl);
    mainEl.append(newSectionEl);

}