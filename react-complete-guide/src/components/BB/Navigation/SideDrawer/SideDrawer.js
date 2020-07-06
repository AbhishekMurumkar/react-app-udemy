import React from "react";
import styles from "./SideDrawer.module.css";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../../higher-order-components/BBAux";

const sideDrawer = (props) => {
  //attach conditional css
  let sideDrawerClass;
  if (props.status) {
    sideDrawerClass = [styles.SideDrawer, styles.Open].join(" ");
  } else {
    sideDrawerClass = [styles.SideDrawer, styles.Close].join(" ");
  }
//   console.log(sideDrawerClass);
  return (
    <Aux>
      <Backdrop show={props.status} backdropClicked={props.closed} />
      <div className={sideDrawerClass} onClick={props.closed}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems 
            isAuthenticated={props.isAuth}/>
        </nav>
      </div>
    </Aux>
  );
};
export default sideDrawer;
