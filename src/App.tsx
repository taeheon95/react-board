import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Board from "./pages/Board";
import Login from "./pages/Login";
import Table from "./pages/Table";
import TodoList from "./pages/TodoList";
import Write from "./pages/Write";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<div>홈</div>} />
          <Route path="/table" element={<Table />} />
          <Route path="/write" element={<Write />} />
          <Route path="/board" element={<Board />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todos" element={<TodoList />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
