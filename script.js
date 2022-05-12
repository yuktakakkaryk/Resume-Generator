function addSkillsBtn(){
    let newNode = document.createElement('input');
    newNode.classList.add('skillsField');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-1');
    newNode.setAttribute('placeholder', 'Add Skills');

    let skillsGroup = document.getElementById('skillsGroup');
    let addSkillsBtn = document.getElementById('addSkillsBtn');

    skillsGroup.insertBefore(newNode, addSkillsBtn);
}

function addLinksBtn(){
    let newNode = document.createElement('input');
    newNode.classList.add('linksField');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-1');
    newNode.setAttribute('placeholder', 'Add Links');

    let linksGroup = document.getElementById('linksGroup');
    let addLinksBtn = document.getElementById('addLinksBtn');

    linksGroup.insertBefore(newNode, addLinksBtn);
}

function addExperienceBtn(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('experienceField');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-1');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Add Experience');

    let experienceGroup = document.getElementById('experienceGroup');
    let addExperienceBtn = document.getElementById('addExperienceBtn');

    experienceGroup.insertBefore(newNode, addExperienceBtn);
}

function addProjectsBtn(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('projectField');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-1');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Add Projects');

    let projectsGroup = document.getElementById('projectsGroup');
    let addProjectsBtn = document.getElementById('addProjectsBtn');

    projectsGroup.insertBefore(newNode, addProjectsBtn);
}

function addTrainingsBtn(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('trainingField');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-1');
    newNode.setAttribute('rows', 3);
    newNode.setAttribute('placeholder', 'Add Training');

    let trainingsGroup = document.getElementById('trainingsGroup');
    let addTrainingBtn = document.getElementById('addTrainingBtn');

    trainingsGroup.insertBefore(newNode, addTrainingBtn);
}

// generateCV

function generateCVBtn(){

    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';

    let profileImage = document.getElementById('profileImage').files[0];
    let reader = new FileReader();
    reader.readAsDataURL(profileImage);

    reader.onloadend = function(){
        document.getElementById('profileImageCV').src = reader.result;
    }

    document.getElementById('nameCV').innerHTML = document.getElementById('nameField').value;
    document.getElementById('aboutFieldCV').innerHTML = document.getElementById('aboutField').value;

    let skillsField = document.getElementsByClassName('skillsField');
    let addedSkill = "";
    for(skill of skillsField){
        addedSkill = addedSkill + `<li> ${skill.value}`;
    }
    document.getElementById('skillsFieldCV').innerHTML = addedSkill;

    document.getElementById('emailFieldCV').innerHTML = document.getElementById('emailField').value;
    document.getElementById('phoneFieldCV').innerHTML = document.getElementById('phoneField').value;

    let linksField = document.getElementsByClassName('linksField');
    let addedLink = "";
    for(link of linksField){
        addedLink = addedLink + `<a class="text-white" href=> ${link.value} <br>`;
    }
    document.getElementById('linksFieldCV').innerHTML = addedLink;

    let experienceField = document.getElementsByClassName('experienceField');
    let addedExperience = "";
    for(experience of experienceField){
        addedExperience = addedExperience + `<li> ${experience.value}`;
    }
    document.getElementById('experienceFieldCV').innerHTML = addedExperience;

    let projectField = document.getElementsByClassName('projectField');
    let addedProject = "";
    for(project of projectField){
        addedProject = addedProject + `<li> ${project.value}`;
    }
    document.getElementById('projectsFieldCV').innerHTML = addedProject;

    let trainingField = document.getElementsByClassName('trainingField');
    let addedTraining = "";
    for(training of trainingField){
        addedTraining = addedTraining + `<li> ${training.value}`;
    }
    document.getElementById('trainingsFieldCV').innerHTML = addedTraining;

}

function printCVBtn(){
    window.print();
}
