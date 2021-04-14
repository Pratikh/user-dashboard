import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../reduxStore'
import { useEffect, useState } from 'react'
import { getPageData } from '../apiServices';
import { UserList, NavigationBar } from '../components'
import './Home.scss'

const { loadingUpdateAction, addUserListAction } = actions;

let totalPages = null;
let currentPageCount = 1;

const Home = (props) => {
    const dispatch = useDispatch();

    const userList = useSelector(store => store.userList);
    const isLoading = useSelector(store => store.isLoading);
    const [isAllPagesLoaded, setIsAllPagesLoaded] = useState(false);
    // Load user data by calling api services
    // then show user profile.
    const loadPageData = async () => {
        console.log(currentPageCount);
        if (!totalPages || (totalPages >= currentPageCount)) {
            dispatch(loadingUpdateAction(true));
            const loadApiResponse = await getPageData(currentPageCount);
            dispatch(loadingUpdateAction(false));
            dispatch(addUserListAction(loadApiResponse.data.data));
            if (!totalPages) { // on first load, set total page count
                totalPages = loadApiResponse.data.total_pages
            }
            if(loadApiResponse.data.error){
                window.alert(loadApiResponse.data.error);
            }
            currentPageCount++; // next page incriment
        }else{
            setIsAllPagesLoaded(true); // all page loaded flag
        }
    }

    useEffect(() => {
        // On mount try to load data
        if (userList.length === 0) { // only load if data is not present
            loadPageData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const onNextButtonClick = () => {
        loadPageData();
    }

    return (
        <div>
            <NavigationBar ></NavigationBar>
            <div className='userListParent'>
                {isLoading ? <h1>Loading data.....</h1> : <UserList userList={userList} />}

            </div>
            {(!isLoading) && <button disabled={isAllPagesLoaded} onClick={onNextButtonClick}> Next page</button>}
        </div>
    )
}



export default Home;