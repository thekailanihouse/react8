import { ADD } from "../actions/person";

const initialState = [{
    id: 1,
    name: 'Tahu',
    price: 500,
    photo: 'https://avatars.dicebear.com/api/miniavs/your-custom-seed.svg'
}]

export default function(state = initialState, action){
    switch (action.type) {
        case ADD:
            return[...state, action.payload]
        default:
            return state;
    }
}