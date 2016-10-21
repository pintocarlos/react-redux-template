export const incrementCounter = (value) => ({
    type: "INCREMENT",
        value
});

export const decrementCounter = (value) => ({
    type: "DECREMENT",
        value
});

export const resetCounter = () => ({
    type: "RESET"
});
