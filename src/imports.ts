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
const ContactPage = lazy(() => {
  return import("@/pages/contact/contact-page");
});
const LoginPage = lazy(() => {
  return import("@/pages/log-in/log-in-page");
});
export {
  BaseLayout,
  RocketLoader,
  MainPage,
  AboutPage,
  JobsPage,
  ProjectsPage,
  EducationPage,
  FeedbackPage,
  ContactPage,
  Route,
  Suspense,
  BrowserRouter,
  ROUTES,
  Routes,
  LoginPage,
};
