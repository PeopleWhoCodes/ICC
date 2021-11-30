const searchICCProject = () => {
    let projectName = document.getElementById('searchProject').value.toUpperCase();
    let ul = document.getElementById('iccProjectContainer');
    let project = ul.getElementsByTagName('card');

    for (let i = 0; i < project.length; i++) {
        const element = project[i];

        let text = element.getElementsByTagName('div');
        let cardText = '';

        for (let j = 0; j < text.length; j++) {
            cardText += text[j].innerText;
        }
        // console.log(cardText);

        let textValue = cardText
        if (textValue.toUpperCase().indexOf(projectName) > -1) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    }
}