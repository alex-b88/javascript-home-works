let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const course of coursesArray) {
    let card = document.createElement('div');
    card.classList.toggle('card');
    let div = document.createElement('div');
    div.style.display = 'flex';
    div.style.gap = '10px';
    div.innerHTML = `
        <p>${course.monthDuration} months</p>
        <p>${course.hourDuration} hours</p>`;

    let h2Tag = document.createElement('h2');
    h2Tag.textContent = course.title;
    card.appendChild(h2Tag);
    card.appendChild(div);

    let ul = document.createElement('ul');
    ul.innerHTML = course.modules.map(module => `<li>${module}</li>`).join('');
    ul.style.alignSelf = 'flex-start';
    card.appendChild(ul);

    document.body.appendChild(card);
}

let maxHeight = 0;
let divList = document.getElementsByClassName('card');
for (const obj of divList) {
    if(obj.clientHeight > maxHeight) {
        maxHeight = obj.clientHeight;
    }
}

console.log(maxHeight);
for (let i = 0; i < divList.length; i++) {
    divList[i].style.height = maxHeight + 'px';

}