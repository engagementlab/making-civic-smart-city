const {
    registerPlugin
} = require('@scullyio/scully');

const agenda = async (route, config) => {
    const routes = [];
    const keys = [
        'introduction',
        'framing-the-smart-city',
        'identify-values',
        'plays',
        'prototyping',
        'concluding-remarks',
    ];
    keys.forEach((res) => {
        routes.push({
            route: `/agenda/${res}`
        });
    });
    return Promise.resolve(routes);
};
const plays = async (route, config) => {
    const routes = [];
    const keys = [
        'embrace-smart-cities',
        'cultivate-local-innovation-ecosystems',
        'invite-public-influence',
        'question-data',
        'imagine-the-possible',
    ];
    keys.forEach((res) => {
        routes.push({
            route: `/playbook/${res}`
        });
    });
    return Promise.resolve(routes);
};

const validator = async (config) => [];
registerPlugin('router', 'agenda', agenda, validator);
registerPlugin('router', 'plays', plays, validator);