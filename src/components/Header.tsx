import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import CompanyImage from "../Images/logo.webp"; // 画像のパスを適切に指定してください

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" sticky="top" className="custom-navbar">
        <Container>
          {/* ロゴとタイトル */}
          <Navbar.Brand href="/">
            <img
              src={CompanyImage}
              alt="会社ロゴ"
              className="CompanyImage"
              height="50"
            />
          </Navbar.Brand>

          {/* ハンバーガーメニューのトグルボタン */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* メニュー内容を右側に揃える */}
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} to="/">
                ホーム
              </Nav.Link>
              <Nav.Link as={Link} to="/price">
                料金について
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                ウェブ予約
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
