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

const filterTechStack = (filter) => {
    // this.classList.add('active');
    // console.log(this.classList);
    const projectCard = document.querySelectorAll('.projectCard');
    projectCard.forEach((item) => {
        if (filter === 'all') {
            item.style.display = '';
        } else {
            if (item.classList.contains(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    })

    const btnContainer = document.getElementById('tech-stack-id');
    const btns = btnContainer.getElementsByClassName('tech-stack-name');
    for (let i = 0; i < btns.length; i++) {
        const element = btns[i];
        element.addEventListener("click", function () {
            var current = document.getElementsByClassName("active");

            if (current.length > 0) {
                current[0].className = current[0].className.replace(" active", "");
            }

            this.className += " active";
        });
    }
}