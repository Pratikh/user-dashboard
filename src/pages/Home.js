import { useDispatch, useSelector } from "react-redux";
import { actions } from "../reduxStore";
import { useEffect, useState } from "react";
import { getPageData } from "../apiServices";
import { UserList, NavigationBar, Loader, Footer } from "../components";
import { Button } from "react-bootstrap";
import "./Home.scss";

const { loadingUpdateAction, addUserListAction } = actions;
let currentPage = 0;
let totalPages = 900;
function useUserDataLoader() {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(999);

  const dispatch = useDispatch();

  async function loadData() {
    dispatch(loadingUpdateAction(true));
    try {
      const loadApiResponse = await getPageData(currentPage + 1);
      dispatch(addUserListAction(loadApiResponse.data.data));
      totalPages = loadApiResponse.data.total_pages;
      currentPage = loadApiResponse.data.page;
      console.log(currentPage === totalPages);
    } catch (error) {
      window.alert("GOT ERROR");
    } finally {
      dispatch(loadingUpdateAction(false));
    }
  }

  return loadData;
}

function Home() {
  const loadData = useUserDataLoader();
  const { userList, isLoading } = useSelector((store) => store);
  const isAllPagesLoaded = currentPage === totalPages;
  console.log(isAllPagesLoaded, currentPage, totalPages);
  useEffect(() => {
    // On mount try to load data
    if (userList.length === 0) {
      // only load if data is not present
      loadData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      // style={{
      //   position: "relative",
      // }}
    >
      <div className="contentWrapper">
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
      </div>
      <Footer />
    </div>
  );
}

export default Home;
