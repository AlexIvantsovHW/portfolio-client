import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import { AppRootState } from "@/app/store";
import { schema } from "./model/index";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { Alert, CircularProgress } from "@mui/material";
import { InputField } from "@/features/input-field/input-field";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import JavascriptIcon from "@mui/icons-material/Javascript";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { TprojectForm, Tproject } from "./model/schema";
import { Projects } from "@/shared/types";
import { useUpdateProjectMutation } from "@/shared/api/requests/projects/projects.api";
import { ROUTES } from "@/imports";
import LinkIcon from "@mui/icons-material/Link";
import WebAssetIcon from "@mui/icons-material/WebAsset";
export {
  useEffect,
  DatePicker,
  LocalizationProvider,
  useForm,
  useNavigate,
  AdapterDayjs,
  dayjs,
  useSelector,
  useState,
  zodResolver,
  DateRangeIcon,
  ViewCarouselIcon,
  DescriptionIcon,
  ROUTES,
  Alert,
  CircularProgress,
  InputField,
  schema,
  useUpdateProjectMutation,
  LinkIcon,
  WebAssetIcon,
};
export type { Projects, TprojectForm, Tproject, AppRootState };
