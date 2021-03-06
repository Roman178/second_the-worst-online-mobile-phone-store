import React from "react";
import { withRouter } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import { Layout } from "antd";
import ROUTES, { RenderRoutes } from "../route";
import "../App.less";

const { Content } = Layout;

function App(props) {
  return (
    <Layout>
      <Header />
      <Layout style={{ marginTop: "64px" }}>
        {props.location.pathname === "/" ||
        props.location.pathname === "/cart" ||
        props.location.pathname === "/checkout" ||
        props.location.pathname.split("/").length - 1 > 2 ? undefined : (
          <Sidebar />
        )}

        <Content>
          <RenderRoutes routes={ROUTES} />
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
}

export default withRouter(App);
