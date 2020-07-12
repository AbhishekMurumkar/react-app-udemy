import React from "react";
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Burgerbuilder} from "./Burgerbuilder.js";
import BuildControls from "../../../components/BB/Burger/BuildControls/BuildControls";

configure({
    adapter:new Adapter(), 
});
describe('<BurgerBuilder />',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<Burgerbuilder initIngredients={()=>{}} />);
    });
    it('render BuildControls when received ingredients',()=>{
        console.log(Burgerbuilder);
        wrapper.setProps({
            ingredients:{
                salad:0
            },
            totalPrice:4
        });
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    })
})