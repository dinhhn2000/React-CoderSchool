export var tasks = [
    {
        id: 1,
        status: 'Done',
        body: 'Read Instructions'
    },
    {
        id: 2,
        status: 'Done',
        body: 'Think a bit'
    },
    {
        id: 3,
        status: 'Done',
        body: "Google 'How to build todo app"
    },
    {
        id: 4,
        status: 'Done',
        body: 'Read results from Google'
    },
    {
        id: 5,
        status: 'Done',
        body: "Google 'How to build todo app using React Native"
    },
    {
        id: 6,
        status: 'Active',
        body: 'Read results from Google again'
    },
    {
        id: 7,
        status: 'Active',
        body: 'Spend some more time thinking'
    },
    {
        id: 8,
        status: 'Active',
        body: 'Use knowledge gained at CoderSchool to build new todo app'
    },
    {
        id: 9,
        status: 'Done',
        body: 'Identify resources to be monitored.'
    },
    {
        id: 10,
        status: 'Done',
        body: 'Define users and workflow'
    },
    {
        id: 11,
        status: 'Done',
        body: "Define the relationship between resources and business systems"
    },
    {
        id: 12,
        status: 'Done',
        body: 'Order the server hardware for production as well as test/quality assurance (QA)'
    },
];

export const updateTask = (newTasks) => {
    tasks = newTasks;
}