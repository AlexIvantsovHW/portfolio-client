import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import { AppRootState } from "@/app/store";
import { schema } from "./model/index";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import FaceIcon from "@mui/icons-material/Face";
import FlagIcon from "@mui/icons-material/Flag";
import Looks6Icon from "@mui/icons-material/Looks6";
import Timer3SelectIcon from "@mui/icons-material/Timer3Select";
import { Alert, CircularProgress } from "@mui/material";
import { InputField } from "@/features/input-field/input-field";

import { TpersonalForm } from "./model/schema";
import { Personals } from "@/shared/types";
import { useUpdatePersonalDataMutation } from "@/shared/api/requests/personal";
export {
  useEffect,
  useForm,
  useSelector,
  useState,
  zodResolver,
  AccountBoxIcon,
  PersonIcon,
  SensorOccupiedIcon,
  LocationCityIcon,
  FaceIcon,
  Looks6Icon,
  Timer3SelectIcon,
  FlagIcon,
  Alert,
  CircularProgress,
  InputField,
  useUpdatePersonalDataMutation,
  schema,
};
export type { Personals, TpersonalForm, AppRootState };
