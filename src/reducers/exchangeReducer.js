


const exchangeReducer = (state = historyData, action) => {
    switch (action.type) {
        case "ADD":
            return state + 1;
        case "RESET":
            return (state = 0);
        default:
            return state;
    }
};
export default exchangeReducer;