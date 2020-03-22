const dataSet = require('../data/__mocks__/news');

export default {
    get: () => Promise.resolve({ data: dataSet })
};
