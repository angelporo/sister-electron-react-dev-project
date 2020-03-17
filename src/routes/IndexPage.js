import React from "react";
import {connect} from "dva";
import {Link} from "react-router-dom";
import {notification} from "antd";
import style from "./IndexPage.css";

const openNotification = placement => {
  notification.info({
    message: `此功能还在开发中...`,
    placement,
  });
};

const Home = props => {
  const {dispatch} = props;
  return (
    <div
      style={{
        background: "url(./images/background.png) no-repeat center center ",
      }}
      className={style.cont}
    >
      <div className={style.contAnniu}>
        <Link to="/counter" className={style.contAnniuA}>
          <img style={{marginTop: "93px"}} src="./images/icon01.png" />
          <span className={style.contAnniuASpan}>矿物成分预估</span>
        </Link>
      </div>
      <div className={style.contAnniuB}>
        <a
          className={style.contAnniuA}
          onClick={() => openNotification("topRight")}
        >
          <img style={{marginTop: "93px"}} src="./images/icon02.png" />
          <span className={style.contAnniuASpan}>成分预估标准修改</span>
        </a>
      </div>
    </div>
  );
};

export default connect()(Home);
