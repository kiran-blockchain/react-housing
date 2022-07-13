export const customLog = (store)=>(next)=>(action)=>{
    console.log("Custom Middleware");
        console.log(action.type);
    next(action);
}