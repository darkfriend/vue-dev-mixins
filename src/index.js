import empty from 'empty-lite';

const mixins = {
    methods: {
        isEmpty(variable) {
            return empty(variable);
        },
        isArray(variable) {
            if(typeof variable !== 'object') {
                return false;
            }
            return variable.isArray();
        },
    },
};

export default mixins;