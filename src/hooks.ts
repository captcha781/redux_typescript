import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import {AppDispatch, RootState} from "./Store"

export const useAppState : TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()