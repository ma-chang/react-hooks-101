import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const App = (props) => {
  return (
    <>
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <form>
          <div className="form-group">
            <label htmlfor="formEventTitle">タイトル</label>
            <input className="form-control" id="formEventTitle" />
          </div>
          <div className="form-group">
            <label htmlfor="formEventBody">ボディー</label>
            <input className="form-control" id="formEventBody" />
          </div>
          <button className="btn btn-primary">イベントを作成する</button>
          <button className="btn btn-danger">イベントを削除する</button>A
        </form>
        <h4>イベント一覧</h4>
        <table className="table-bordered">
          <thread>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">タイトル</th>
              <th scope="col">ボディー</th>
            </tr>
          </thread>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
