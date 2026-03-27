module.exports = {
    taskList: {
        type: 'task-list',
        statuses: {
            default: 'blue',
            completed: false
        },
        tasks: [
            {
                id: 'yourName',
                href: '/apply/name',
                statusField: 'yourNameComplete'
            },
            {
                id: 'contactDetails',
                href: '/apply/contact-details',
                statusField: 'contactDetailsComplete'
            },
            {
                id: 'address',
                href: '/apply/address',
                statusField: 'addressComplete'
            },
            {
                id: 'passport',
                href: '/apply/passport',
                statusField: 'passportComplete'
            }
        ]
    },
    title: {
        journeyKey: 'applicant.title',
        type: 'radios',
        inline: true,
        validate: 'required',
        // Different options for adults and children
        adultTitles: ['Mr', 'Mrs', 'Miss', 'Ms', 'Other'],
        childTitles: ['Master', 'Miss', 'Other']
    },
    forenames: {
        type: 'text',
        validate: [
            'required',
            { type: 'maxlength', arguments: 30 },
            'alphaex1'
        ]
    },
    surname: {
        type: 'text',
        validate: [
            'required',
            { type: 'minlength', arguments: 2 },
            { type: 'maxlength', arguments: 30 },
            'alphaex1'
        ]
    },

    email: {
        journeyKey: 'applicant.email',
        type: 'text',
        validate: [
            'required',
            'email',
            { type: 'maxlength', arguments: 255 }
        ]
    },
    phone: {
        journeyKey: 'applicant.phone',
        type: 'text',
        validate: [
            'required',
            { type: 'maxlength', arguments: 20 }
        ]
    },
    addressLine1: {
        journeyKey: 'address.line1',
        type: 'text',
        validate: [
            'required',
            { type: 'maxlength', arguments: 255 }
        ]
    },
    town: {
        journeyKey: 'address.town',
        type: 'text',
        validate: [
            'required',
            { type: 'maxlength', arguments: 255 }
        ]
    },
    postcode: {
        journeyKey: 'address.postcode',
        type: 'text',
        validate: [
            'required',
            { type: 'maxlength', arguments: 10 }
        ]
    },

    passportNumber: {
        journeyKey: 'passport.number',
        type: 'text',
        validate: [
            'required',
            { type: 'maxlength', arguments: 20 }
        ]
    },
    passportCountry: {
        journeyKey: 'passport.country',
        type: 'text',
        validate: [
            'required',
            { type: 'maxlength', arguments: 100 }
        ]
    },
    passportExpiry: {
        journeyKey: 'passport.expiry',
        type: 'date',
        validate: ['required', 'date']
    },

    // Eligibility fields
    uk: {
        journeyKey: 'application.uk'
    },
    dateOfBirth: {
        journeyKey: 'applicant.dateOfBirth'
    },
    ageGroup: {
        journeyKey: 'applicant.ageGroup'
    }
};
