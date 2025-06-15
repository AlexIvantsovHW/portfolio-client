import * as i from "./imports";
function App() {
  return (
    <div className="App">
      <i.BrowserRouter>
        {" "}
        <i.BaseLayout>
          <i.Suspense
            fallback={
              <div className="w-full h-full flex-grow flex items-center justify-center">
                <i.RocketLoader />
              </div>
            }
          >
            <i.Routes>
              <i.Route path={i.ROUTES.HOME + "/"} element={<i.MainPage />} />
              <i.Route path={i.ROUTES.ABOUT} element={<i.AboutPage />} />
              <i.Route path={i.ROUTES.EXPERIENCE} element={<i.JobsPage />} />
              <i.Route path={i.ROUTES.PROJECTS} element={<i.ProjectsPage />} />
              <i.Route
                path={i.ROUTES.EDUCATION}
                element={<i.EducationPage />}
              />
              <i.Route path={i.ROUTES.FEEDBACK} element={<i.FeedbackPage />} />
              <i.Route path={i.ROUTES.CONTACT} element={<i.ContactPage />} />
            </i.Routes>
          </i.Suspense>
        </i.BaseLayout>
      </i.BrowserRouter>
    </div>
  );
}

export default App;
