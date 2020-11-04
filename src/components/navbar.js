import React from "react";

import Icon from "./icon";
import Logo from "./logo";
import SearchBar from "./search-bar";
import Login from "./login";
import Icon1 from "../icons/iconfinder_ic_videocam_48px_3669181.png";
import Icon2 from "../icons/iconfinder_ic_view_module_48px_3669149.png";
import Icon3 from "../icons/iconfinder_icon-ios7-bell_211694.png";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <Logo logo={props.logo} />
      <SearchBar />
      <Icon icon={Icon1} />
      <Icon icon={Icon2} />
      <Icon icon={Icon3} />
      <Login />
    </div>
  );
}
