export default {
    ...require('../../content/cv/particular.json'),
    about: {
        skills: require('../../content/cv/skills.json'),
        ...require('../../content/cv/summary.json')
    },
    works: require('../../content/cv/works.json'),
    education: require('../../content/cv/education.json'),
    languages: require('../../content/cv/languages.json')
}