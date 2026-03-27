module.exports = {
    '/': {
        skip: true,
        next: 'task-list'
    },
    '/task-list': {
        fields: ['taskList'],
        noPost: true,
        checkJourney: false,
        hub: true
    },
    '/name': {
        controller: require('../../controllers/name'),
        prereqs: ['task-list'],
        fields: ['title', 'forenames', 'surname'],
        editable: true,
        backLink: 'task-list',
        next: 'task-list',
        setValuesOnSave: [{ key: 'yourNameComplete', value: 'completed' }]
    },
    '/contact-details': {
        prereqs: ['task-list'],
        fields: ['email', 'phone'],
        editable: true,
        backLink: 'task-list',
        next: 'task-list',
        setValuesOnSave: [{ key: 'contactDetailsComplete', value: 'completed' }]
    },
    '/address': {
        prereqs: ['task-list'],
        fields: ['addressLine1', 'town', 'postcode'],
        editable: true,
        backLink: 'task-list',
        next: 'task-list',
        setValuesOnSave: [{ key: 'addressComplete', value: 'completed' }]
    },
    '/passport': {
        prereqs: ['task-list'],
        fields: ['passportNumber'],
        editable: true,
        backLink: 'task-list',
        next: 'passport-country'
    },
    '/passport-country': {
        fields: ['passportCountry'],
        editable: true,
        backLink: 'passport',
        next: 'passport-expiry'
    },
    '/passport-expiry': {
        fields: ['passportExpiry'],
        editable: true,
        backLink: 'passport-country',
        next: 'task-list',
        setValuesOnSave: [{ key: 'passportComplete', value: 'completed' }]
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
