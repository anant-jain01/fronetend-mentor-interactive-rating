const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('click', function() {
        let rating = this.textContent.trim(); 
        let thanksDiv = document.querySelector('.thanks');
        thanksDiv.innerHTML = `You Selected ${rating} out of 5`;
        console.log('dfdf');
    });
});
