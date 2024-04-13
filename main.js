//first portfolio card

const firstBlockPortfolio = document.getElementById('portfolio--block--one');
const fistBlockParagraph = document.getElementById('portfolio--paragraph--one');
const fistBlockTitle = document.getElementById('portfolio--title--one');

const firstBlockFun = () => {
    fistBlockParagraph.classList.remove('src-hiden');
    fistBlockTitle.classList.remove('src-hiden');
}

const returnClass = () => {
    fistBlockParagraph.classList.add('src-hiden');
    fistBlockTitle.classList.add('src-hiden');
}

firstBlockPortfolio.addEventListener('mouseenter', firstBlockFun);
firstBlockPortfolio.addEventListener('mouseleave', returnClass);

//second portfolio card
const secondBlockPortfolio = document.getElementById('portfolio--block--two');
const secondBlockParagraph = document.getElementById('portfolio--paragraph--two');
const secondBlockTitle = document.getElementById('portfolio--title--two');

const secondBlockFun = () => {
    secondBlockParagraph.classList.remove('src-hiden');
    secondBlockTitle.classList.remove('src-hiden');
}

const returnClassSecond = () => {
    secondBlockParagraph.classList.add('src-hiden');
    secondBlockTitle.classList.add('src-hiden');
}

secondBlockPortfolio.addEventListener('mouseenter', secondBlockFun);
secondBlockPortfolio.addEventListener('mouseleave', returnClassSecond);

//third portfolio card
const thirdBlockPortfolio = document.getElementById('portfolio--block--three');
const thirdBlockParagraph = document.getElementById('portfolio--paragraph--three');
const thirdBlockTitle = document.getElementById('portfolio--title--three');

const thirdBlockFun = () => {
    thirdBlockParagraph.classList.remove('src-hiden');
    thirdBlockTitle.classList.remove('src-hiden');
}

const returnClassthird = () => {
    thirdBlockParagraph.classList.add('src-hiden');
    thirdBlockTitle.classList.add('src-hiden');
}

thirdBlockPortfolio.addEventListener('mouseenter', thirdBlockFun);
thirdBlockPortfolio.addEventListener('mouseleave', returnClassthird);