import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

type DispatchFunction = () => AppDispatch;

export const useAppDispatch: DispatchFunction = useDispatch;
