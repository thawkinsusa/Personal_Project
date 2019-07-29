import axios from 'axios';
import { TEAMSIGNUP, GET_TEAM } from './actionTypes';

const initialState = {
    team: {},
    error: false,
    redirect: false
};

export const teamSignup = (team_name, team_image,team_creation_date, id) => {
    let data = axios
    
        .post('/api/teamSignup', { team_name, team_image,team_creation_date, id })
        .then(console.log('teamsignup fired'));
    return {
        type: TEAMSIGNUP,
        payload: data
    };
};

export const getTeam = (id) => {
    let data = axios.get(`/api/teams/${id}`).then(res => {
        console.log(res.data);
        return res.data
    });
    return {
        type: GET_TEAM,
        payload: data
    };
};

export default function (state = initialState, action) {
    console.log('action in TEAMReducer ', action);
    let { type, payload } = action;
    switch (type) {
        case TEAMSIGNUP + '_FULFILLED':
            console.log('Team payload', payload)
            return { team: payload, redirect: false, error: false };
        case TEAMSIGNUP + '_REJECTED':
            return { ...state, error: payload };
        case GET_TEAM + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_TEAM + '_FULFILLED':
            console.log('hit fulfilled')
            return { ...state, team: payload, error: false };
        case GET_TEAM + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        default:
            return state;
    }
}
