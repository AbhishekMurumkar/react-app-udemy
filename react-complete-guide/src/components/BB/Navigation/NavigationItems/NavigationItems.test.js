import React from "react";
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";
configure({
    adapter:new Adapter(), 
});

// to declare a test
// it involves 2 args
// 1. name of the test
// 2. testing code
describe('<NavigationItems />',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<NavigationItems />);
    })
    // unit tests goes here
    // this also takes 2 args
    // 1. string for test name
    // 2. 
    it('should render 2 elements',()=>{
        // const wrapper = shallow(<NavigationItems />);
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
    it('should render 3 elements when authenticated',()=>{
        // const wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({
            isAuthenticated:true
        })
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
        
    });
    it('should render Logout component when authenticated',()=>{
        // const wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({isAuthenticated:true});
        expect(wrapper.contains(
            <NavigationItem>Logout</NavigationItem>
        ));
    });
})