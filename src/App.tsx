import { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ROUTES } from "./widgets/Header/imports";

import BaseLayout from "./widgets/Layout/BaseLayout";
import { RocketLoader } from "./shared/ui/rocket-loader";
const MainPage = lazy(() => {
  return import("@/pages/main/main-page");
});
const AboutPage = lazy(() => {
  return import("@/pages/about/about-page");
});
const JobsPage = lazy(() => {
  return import("@/pages/jobs/jobs-page");
});
const ProjectsPage = lazy(() => {
  return import("@/pages/projects/projects-page");
});
const EducationPage = lazy(() => {
  return import("@/pages/education/education-page");
});
const FeedbackPage = lazy(() => {
  return import("@/pages/feedback/feedback-page");
});
function App() {
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
              <Route path={ROUTES.ABOUT} element={<AboutPage />} />
              <Route path={ROUTES.EXPERIENCE} element={<JobsPage />} />
              <Route path={ROUTES.PROJECTS} element={<ProjectsPage />} />
              <Route path={ROUTES.EDUCATION} element={<EducationPage />} />

              <Route path={ROUTES.FEEDBACK} element={<FeedbackPage />} />
            </Routes>{" "}
          </Suspense>
        </BaseLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
