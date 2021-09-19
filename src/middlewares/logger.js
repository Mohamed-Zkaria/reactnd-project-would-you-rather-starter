const logger = (store) => (next) => (action) => {
    console.group(action.type);
        console.log('The action is:');
        console.log(action);
        
        const valueofNext = next(action);

        console.log("The new state is ", store.getState());
    console.groupEnd()
    return valueofNext;
}

export default logger;