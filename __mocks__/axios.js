const hello = require('../data/__mocks__/news');

export default {
    get: (url) => {
        let data = {};
        const urlParams = new URLSearchParams(url.substr(url.indexOf('?')));
        const search = urlParams.get('search');
        if (search === 'hello') {
            data = hello;
        } else {
            data.news = [];
        }
        return Promise.resolve({ data });
    }
};
