/**
 * Constants
 */
export const ADD_NUMBER = 'ADD_NUMBER';

/**
 * Actions
 */

export const addNumber = (num) => {
    return {
        type: ADD_NUMBER,
        num
    };
};
