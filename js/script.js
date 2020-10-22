console.log('Tlo elementow HTML');

const setBackground = () => {
  const allParagraphs = document.getElementsByTagName('p');
  // console.log(allParagraphs);

  let redParagraph = document.getElementsByTagName('p')[0];
  console.log(redParagraph);

  const yellowParagraph = document.getElementsByTagName('p')[1];
  // console.log(yellowParagraph);

  redParagraph.classList.toggle('red');
  yellowParagraph.classList.toggle('yellow');
}



const btn = document.querySelector('button');
btn.addEventListener('click', setBackground);