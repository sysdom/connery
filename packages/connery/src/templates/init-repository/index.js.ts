const content = `const SampleAction = require("./actions/SampleAction");

module.exports = {
    title: '{{connector.title}}',
    description: '{{connector.description}}',
    actions: [
        SampleAction,
    ],
    configurationParameters: [],
    maintainers: [
        {
            name: '{{author.name}}',
            email: '{{author.email}}',
        }
    ],
    connery: {
        runnerVersion: '1',
    }
};
`;

export default content;