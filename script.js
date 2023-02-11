const { event } = require("cypress/types/jquery");

const preventSubimit = (event) => {
    event.preventDefault();
}

const getBtnSubimit = document.getElementById('submit-btn');
getBtnSubimit.addEventListener('click', preventSubimit)

const verififyAgreement = (event) => {
    if (event.target.checked) {
        const elementImg = create.document('input')
        elementImg.setAtribute 
    }
}
const getBtnAgreement = document.getElementById('#confirm');
