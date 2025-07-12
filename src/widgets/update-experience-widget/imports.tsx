import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import { AppRootState } from "@/app/store";
import { schema } from "./model/index";

import { Alert, CircularProgress } from "@mui/material";
import { InputField } from "@/features/input-field/input-field";
import BusinessIcon from "@mui/icons-material/Business";
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import JavascriptIcon from "@mui/icons-material/Javascript";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { TexperienceForm } from "./model/schema";
import { Job, Jobs } from "@/shared/types";
import { useUpdateJobMutation } from "@/shared/api/requests/jobs/jobs.api";

export {
  useEffect,
  useForm,
  useSelector,
  useState,
  zodResolver,
  DateRangeIcon,
  BusinessIcon,
  WorkIcon,
  ViewCarouselIcon,
  JavascriptIcon,
  DescriptionIcon,
  Alert,
  CircularProgress,
  InputField,
  schema,
  useUpdateJobMutation,
};
export type { Job, TexperienceForm, AppRootState, Jobs };
