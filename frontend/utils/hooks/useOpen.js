import { useSelector, useDispatch } from 'react-redux';

export function useOpen () {
    const open = useSelector((state) => state.open);
    const dispatch = useDispatch();
    const handleDrawerOpen = () => {
        dispatch({
            type: 'OPEN_TOGGLE'
        })
    }
    const handleDrawerClose = () => {
        dispatch({
            type: 'CLOSE_TOGGLE'
        })
    }
    return { open, handleDrawerOpen, handleDrawerClose}
}