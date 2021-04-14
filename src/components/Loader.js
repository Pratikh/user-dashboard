import { useSelector } from "react-redux";

const Loader = ({ msg = 'Loading...' }) => {
    const isLoading = useSelector(state => state.isLoading)
    return (
        isLoading && <h1>{msg}</h1>
    )
}

export default Loader;