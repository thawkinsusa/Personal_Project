import axios from 'axios';
import { ADD_TEAM_HERO, GET_ALL_HEROES, GET_HEROES_BY_ID, GET_TEAM_HEROES, DELETE_TEAM_HERO, ADD_HERO } from './actionTypes';

const initialState = {
    teamHeroes: {},
    heroes: {},
    error: false,
    redirect: false
};



export const getAllHeroes = () => {
    console.log('getallHeroes data hit')
    let data = axios.get('/api/allHeroes').then(res => {
        console.log('getallHeroes data', res.data)
        return res.data
    });
    return {
        type: GET_ALL_HEROES,
        payload: data
    };
};

export const getHero = (id) => {
    let data = axios.get(`/api/heroById/${id}`).then(res => {
        return res.data
    });
    return {
        type: GET_HEROES_BY_ID,
        payload: data
    };
};
export const getTeamHeroes = (id) => {
    console.log('hit getHeroes by user.id', id);
    let data = axios.get(`/api/teamHeroesByUserId/${id}`).then(res => {
        console.log('heroes return data', res.data);
        return res.data
    });
    return {
        type: GET_TEAM_HEROES,
        payload: data
    };
};

export function deleteTeamHero(heroId, teamId) {
    console.log('deleteHero hit in Reducer', heroId, teamId)
    let data = axios.delete(`/api/deleteTeamHero/${heroId}?teamId=${teamId}`)
        .then(res => res.data)
    console.log('res delete data', data)
    return {
        type: DELETE_TEAM_HERO,
        payload: data
    };
};

export function addTeamHero(userId, teamId, heroId) {
    console.log('team reducer', userId, teamId, heroId)
    let data = axios
        .put(`/api/addHeroMember`, { userId, teamId, heroId })
        .then(res => res.data);
    console.log(data)
    return {
        type: ADD_HERO,
        payload: data
    };
};


export default function (state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case GET_ALL_HEROES + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_ALL_HEROES + '_FULFILLED':
            return { ...state, heroes: payload, error: false };
        case GET_ALL_HEROES + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        case GET_TEAM_HEROES + '_PENDING':
            return { ...state, redirect: false, error: false };
        case GET_TEAM_HEROES + '_FULFILLED':
            console.log('payload', payload);
            return { ...state, teamHeroes: payload, error: false };
        case GET_TEAM_HEROES + '_REJECTED':
            return { ...state, redirect: true, error: payload };
        case ADD_TEAM_HERO + '_FULFILLED':
            return { ...state, teamHeroes: payload };
        case DELETE_TEAM_HERO + '_FULFILLED':
            return { ...state, teamHeroes: payload };
        default:
            return state;
    }
}
