const hello = require('../data/__mocks__/news');

export default {
    get: (url) => {
        let data = {};
        const urlParams = new URLSearchParams(url.substr(url.indexOf('?')));
        const search = urlParams.get('search');
        const offset = urlParams.get('offset');
        if (search === 'hello') {
            data = hello;
            if (+offset) {
                data.offset = 2;
            }
        } else if (search === 'error') {
            return Promise.reject();
        } else {
            data.news = [];
        }
        return Promise.resolve({ data });
    }
};
