export const updateObject = (oldstate,updatedState)=>{
    return {
        ...oldstate,
        ...updatedState
    }
 }