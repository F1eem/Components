import React from "react";
import MultiSelector from "./component/MultiSelector";
import { MySlide } from "./component/MySlide";
import TestTable from "./component/Table";
import { claimDict } from "api/claimTable";
import { css } from "@emotion/css";
import { NavLink, Route } from "react-router-dom";
import Claim from "./component/Table/Claim";

const ITEMS = [
  { id: 0, item: "Алтайский край" },
  { id: 1, item: "Амурская область" },
  { id: 2, item: "Архангельская область" },
  { id: 3, item: "Астраханская область" },
  { id: 4, item: "Белгородская область" },
  { id: 5, item: "Нижегородская область" },
];

const onClickSearchButton = (items) => {
  window.alert(items.map((e) => e.item));
};

const SLIDE_ITEMS_DATA = [
  {
    id: 0,
    header: "Пила",
    price: "4599",
    rating: 3,
    img:
      "https://c.dns-shop.ru/thumb/st4/fit/190/190/1ed2626e1b9c2b2623a4812129415078/51fb46ef5ffb4e6433217a1bf5142b83c6e1da0679c8bb7ce984da52c75408a2.jpg.webp",
  },
  {
    id: 1,
    header: "Пила1",
    price: "2699",
    rating: 2.3,
    img:
      "https://c.dns-shop.ru/thumb/st1/fit/190/190/e5eae13df2d6714fac50f31d535f1523/cc8dd98e86491f7b87eac52d53645e0c438b2ae4b8d4430d2581f53b7ea44739.jpg.webp",
  },
  {
    id: 2,
    header: "Пила2",
    price: "3299",
    rating: 3.2,
    img:
      "https://c.dns-shop.ru/thumb/st1/fit/190/190/f004e16095d280f86e2e003cb6c5b7c3/1582eba7c0b9959ddd7a9476ceebd36e32b4f0c790e435637caef40574df247f.jpg.webp",
  },
  {
    id: 3,
    header: "Пила3",
    price: "1999",
    rating: 3.6,
    img:
      "https://c.dns-shop.ru/thumb/st1/fit/190/190/bcbcbec19902f72090914195600367c7/283b01984941e38f7649c1b08ce9147a191bfa6a36493001cced43d3e805b980.jpg.webp",
  },
  {
    id: 4,
    header: "Пила4",
    price: "1399",
    rating: 4.7,
    img:
      "https://c.dns-shop.ru/thumb/st1/fit/190/190/85a250d602634e4a9d3d8f8d71168171/494049d2f722b21e8b0bb758e05d834aa53a99f38b2e4e3f30013a8a20cff07c.jpg.webp",
  },
  {
    id: 5,
    header: "Пила5",
    price: "1799",
    rating: 3,
    img:
      "https://c.dns-shop.ru/thumb/st1/fit/190/190/c774969348d49fa2b2fd1a65459617b0/a713a380d27f8b489818e41b66050b10d4246fa128df2ac21e9b4943296e174e.jpg.webp",
  },
  {
    id: 6,
    header: "Пила6",
    price: "5999",
    rating: 3,
    img:
      "https://c.dns-shop.ru/thumb/st1/fit/190/190/6b3adfcc12c7bd2b8d5705ccef7770ab/19b581117cb194111629d8888046656f3b1543edc241a3553758a71461b13747.jpg.webp",
  },
  {
    id: 7,
    header: "Пила7",
    price: "4599",
    rating: 1,
    img:
      "https://c.dns-shop.ru/thumb/st1/fit/190/190/bd4e1ee21a017e776c53ba94a310b431/2c04f7da7c3f0d052447fa336781ed93389712354a0fb9084cc1d8a57eefa8b4.jpg.webp",
  },
  {
    id: 8,
    header: "Пила8",
    price: "6399",
    rating: 5,
    img:
      "https://c.dns-shop.ru/thumb/st1/fit/190/190/13eb7fad61e84e7163d9d8300b82dc5a/c7f8708c603053b0c218fc1fa59187c0622fd3da98142bf62e4e242f0eab2308.jpg.webp",
  },
];

function App() {
  return (
    <>
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <div style={{ height: 300 }}>
              <h3>Мультиселектор</h3>
              <MultiSelector
                items={ITEMS}
                placeholder={"Выберите регион"}
                titleDropDawn={"Регион проживания"}
                onClickSearchButton={onClickSearchButton}
              />
            </div>
            <div style={{ height: 300 }}>
              <h3>Карусель</h3>
              <MySlide
                itemWidth={210}
                slideWidth={850}
                slideItemsData={SLIDE_ITEMS_DATA}
              />
            </div>
            <div style={{ height: 200 }}>
              <h3>Таблица</h3>
              <NavLink to="/table">Перейти на страницу таблицы</NavLink>
            </div>
          </div>
        )}
      />
      <Route
        exact
        path="/table"
        render={() => (
          <TestTable
            config={claimDict}
            wrapperStyle={css`
              margin-left: 5px;
            `}
          />
        )}
      />
      <Route
        path="/table/:currentClaimId"
        render={() => <Claim config={claimDict} />}
      />
    </>
  );
}

export default App;
