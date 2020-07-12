//testing functions of reducers
import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe('testing Auth reducer',()=>{
    it('should return initial state when passed invalid actionType',()=>{
        expect(reducer(undefined,{})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath:"/"
        });
    });
    it('should store token upon successful login',()=>{
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath:"/"
        },{
            type:actionTypes.AUTH_SUCCESS,
            idToken:'asdfsadf',
            userId:'sadfasfsadfsadfscas'
        })).toEqual({
            token: 'asdfsadf',
            userId: 'sadfasfsadfsadfscas',
            error: null,
            loading: false,
            authRedirectPath:"/"
        })
    })
})