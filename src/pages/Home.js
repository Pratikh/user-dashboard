import { useDispatch, useSelector } from "react-redux";
import { actions } from "../reduxStore";
import { useEffect, useState } from "react";
import { getPageData } from "../apiServices";
import { UserList, NavigationBar, Loader, Footer } from "../components";
import { Button } from "react-bootstrap";
import "./Home.scss";

const { loadingUpdateAction, addUserListAction } = actions;

function useUserDataLoader() {
  const [isAllPagesLoaded, setIsAllPagesLoaded] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  async function loadData() {
    dispatch(loadingUpdateAction(true));
    try {
      const loadApiResponse = await getPageData(currentPage);
      dispatch(addUserListAction(loadApiResponse.data.data));
      setIsAllPagesLoaded(
        loadApiResponse.data.page === loadApiResponse.data.total_pages
      ); // all page loaded flag
    } catch (error) {
      window.alert("GOT ERROR");
    } finally {
      dispatch(loadingUpdateAction(false));
      setCurrentPage(currentPage + 1); // next page incriment
    }
  }

  return [isAllPagesLoaded, loadData];
}

function Home() {
  const [isAllPagesLoaded, loadData] = useUserDataLoader();
  const { userList, isLoading } = useSelector((store) => store);

  useEffect(() => {
    // On mount try to load data
    if (userList.length === 0) {
      // only load if data is not present
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Loader />
      <NavigationBar />
      <section className="userListParent">
        <UserList userList={userList} />
      </section>
      <div className="next-botton-div">
        {!isLoading && (
          <Button disabled={isAllPagesLoaded} onClick={loadData}>
            Next page
          </Button>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
