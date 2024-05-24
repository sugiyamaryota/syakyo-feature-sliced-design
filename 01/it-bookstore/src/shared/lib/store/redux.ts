import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"

const useAppDispatch: () => AppDispatch = useDispatch
const useAppSelector: () => TypedUseSelectorHook<RootState> = useSelector