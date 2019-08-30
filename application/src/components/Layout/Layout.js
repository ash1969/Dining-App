import React from 'react';
import Aux from '../../hoc/Auxillary';
import classes from './Layout.css'

const layout = (props) =>
    <Aux>
      <div>Toolbar, Drawer, Backdrop</div>
      <main className = {classes.Content}>
        {props.children}
      </main>
    </Aux>

export default layout;