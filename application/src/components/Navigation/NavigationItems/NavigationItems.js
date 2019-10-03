import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => 
   <ul className={classes.NavigationItems}>
        <NavigationItem link="/">HungerHook</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        <NavigationItem link="/auth">Sign Up</NavigationItem>
   </ul>


export default navigationItems;