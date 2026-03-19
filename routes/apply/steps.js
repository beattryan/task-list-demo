module.exports = {
    '/': {
        skip: true,
        next: 'task-list'
    },
    '/task-list': {
        fields: ['taskList'],
        next: 'confirm'
    },
    '/name': {
        controller: require('../../controllers/name'),
        prereqs: ['task-list'],
        fields: ['title', 'forenames', 'surname'],
        editable: true,
        backLink: 'task-list',
        next: 'task-list',
        completesField: 'yourNameComplete'
    },
    '/confirm': {
        prereqs: ['task-list'],
        backLink: 'task-list',
        next: 'submit'
    },
    '/submit': {
        controller: require('../../controllers/submit'),
        next: 'done'
    },
    '/done': {
        backLink: false
    }
};
