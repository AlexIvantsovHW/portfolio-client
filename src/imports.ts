import { lazy } from "react";
export { Suspense } from "react";
export { Route, Routes, BrowserRouter } from "react-router-dom";
export { ROUTES } from "./widgets/Header/imports";

export { default as BaseLayout } from "./widgets/Layout/BaseLayout";
export { RocketLoader } from "./shared/ui/rocket-loader";
export const MainPage = lazy(() => {
  return import("@/pages/main/main-page");
});
export const AboutPage = lazy(() => {
  return import("@/pages/about/about-page");
});
export const JobsPage = lazy(() => {
  return import("@/pages/jobs/jobs-page");
});
export const ProjectsPage = lazy(() => {
  return import("@/pages/projects/projects-page");
});
export const EducationPage = lazy(() => {
  return import("@/pages/education/education-page");
});
export const FeedbackPage = lazy(() => {
  return import("@/pages/feedback/feedback-page");
});
export const ContactPage = lazy(() => {
  return import("@/pages/contact/contact-page");
});
export const LoginPage = lazy(() => {
  return import("@/pages/log-in/log-in-page");
});
export const SigninPage = lazy(() => {
  return import("@/pages/sign-in/sign-in-page");
});
export const UpdateAbout = lazy(() => {
  return import("@/pages/update-about/update-about");
});
export const UpdateContact = lazy(() => {
  return import("@/pages/update-contact/update-contact");
});
export const UpdateFeedback = lazy(() => {
  return import("@/pages/update-feedback/update-feedback");
});
export const UpdateJobs = lazy(() => {
  return import("@/pages/update-jobs/update-jobs");
});
export const UpdateProjects = lazy(() => {
  return import("@/pages/update-projects/update-projects");
});
export const UpdateEducation = lazy(() => {
  return import("@/pages/update-education/update-education");
});
export const UpdateSpecificJob = lazy(() => {
  return import("@/pages/update-specific-job/update-specific-job");
});
export const UpdateSpecificProject = lazy(() => {
  return import("@/pages/update-specific-project/update-specific-project");
});
export const UpdateSpecificEducation = lazy(() => {
  return import("@/pages/update-specific-education/update-specific-project");
});
export const AddJob = lazy(() => {
  return import("@/pages/add-job/add-job");
});
export const AddSoftware = lazy(() => {
  return import("@/pages/add-software/add-software-page");
});
export const AddProject = lazy(() => {
  return import("@/pages/add-project/add-project");
});
