
//actionType
const ADD_GUN = 'ADD_GUN'
const MINUS_GUN = 'MINUS_GUN'


//reducer
export function counter(state=0, action) {
    switch (action.type){
        case ADD_GUN:
            return state+1
        case MINUS_GUN:
            return state-1
        default:
            return 10
    }
}
//action creator
export function addGun() {
    return {type: ADD_GUN}
}
export function minusGun() {
    return {type: MINUS_GUN}
}
export function addGunAsync() {
    return dispatch=>{
        setTimeout(()=>dispatch(addGun()),2000)
    }
}