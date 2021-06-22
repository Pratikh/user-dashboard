import { useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
import "./Loader.scss";

function Loader({ forceShow = false }: { forceShow?: boolean }) {
  const isLoading = useSelector(
    ({ isLoading }: { isLoading: boolean }) => isLoading
  );
  return (
    (isLoading || forceShow) && (
      <div className="loader-parent">
        <BeatLoader size={15} margin={2} />
      </div>
    )
  );
}

export default Loader;
