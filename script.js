
const alphabetContainer = document.querySelector('.alphabet-container');
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

alphabet.forEach(letter => {
    const letterDiv = document.createElement('div');
    letterDiv.classList.add('letter');
    letterDiv.textContent = letter;

    letterDiv.addEventListener('click', () => {
        alert(`This is the letter ${letter} in Sign Language!`);
    });

    alphabetContainer.appendChild(letterDiv);
});
