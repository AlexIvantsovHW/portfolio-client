import { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useGetAllContactQuery } from "./shared/api/requests/contact";
import { ROUTES } from "./widgets/Header/imports";

import BaseLayout from "./widgets/Layout/BaseLayout";
import { RocketLoader } from "./shared/ui/rocket-loader";
const MainPage = lazy(() => {
  return import("@/pages/main/main-page");
});
const AboutPage = lazy(() => {
  return import("@/pages/about/about-page");
});
function App() {
  const { data } = useGetAllContactQuery(20);
  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        <BaseLayout>
          <Suspense
            fallback={
              <div className="w-full h-full flex-grow flex items-center justify-center">
                <RocketLoader />
              </div>
            }
          >
            <Routes>
              <Route path={ROUTES.HOME + "/"} element={<MainPage />} />
              <Route path={ROUTES.ABOUT + "/"} element={<AboutPage />} />
            </Routes>{" "}
          </Suspense>
        </BaseLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
