import React, { Suspense, useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useGetAllContactQuery } from "./shared/api/requests/contact";
import { ROUTES } from "./widgets/Header/imports";
import MainPage from "./pages/main/main-page";
import BaseLayout from "./widgets/Layout/BaseLayout";

function App() {
  const { data } = useGetAllContactQuery(20);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("api/jobs");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        <BaseLayout>
          <Routes>
            <Route path={ROUTES.HOME + "/"} element={<MainPage />} />
          </Routes>{" "}
        </BaseLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
