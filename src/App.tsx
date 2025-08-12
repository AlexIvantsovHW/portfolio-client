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
              <i.Route path={i.ROUTES.SIGN_IN} element={<i.SigninPage />} />
              <i.Route path={i.ROUTES.LOGIN} element={<i.LoginPage />} />
              <i.Route
                path={i.ROUTES.UPDATE_ABOUT}
                element={<i.UpdateAbout />}
              />
              <i.Route
                path={i.ROUTES.UPDATE_CONTACT}
                element={<i.UpdateContact />}
              />
              <i.Route
                path={i.ROUTES.UPDATE_EDUCATION}
                element={<i.UpdateEducation />}
              />
              <i.Route
                path={i.ROUTES.UPDATE_EXPERIENCE}
                element={<i.UpdateJobs />}
              />
              <i.Route
                path={i.ROUTES.UPDATE_FEEDBACK}
                element={<i.UpdateFeedback />}
              />
              <i.Route
                path={i.ROUTES.UPDATE_PROJECTS}
                element={<i.UpdateProjects />}
              />
              <i.Route
                path={i.ROUTES.UPDATE_EXPERIENCE + "/:id"}
                element={<i.UpdateSpecificJob />}
              />
              <i.Route
                path={i.ROUTES.UPDATE_PROJECTS + "/:id"}
                element={<i.UpdateSpecificProject />}
              />
              <i.Route
                path={i.ROUTES.UPDATE_EDUCATION + "/:id"}
                element={<i.UpdateSpecificEducation />}
              />{" "}
              <i.Route
                path={i.ROUTES.ADD_SOFTWARE}
                element={<i.AddSoftware />}
              />{" "}
              <i.Route path={i.ROUTES.CREATE_JOB} element={<i.AddJob />} />
              <i.Route path={i.ROUTES.ADD_PROJECT} element={<i.AddProject />} />
              <i.Route
                path={i.ROUTES.ADD_EDUCATION}
                element={<i.AddEducation />}
              />
            </i.Routes>
          </i.Suspense>
        </i.BaseLayout>
      </i.BrowserRouter>
    </div>
  );
}

export default App;
