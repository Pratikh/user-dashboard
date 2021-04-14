import { useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react';
import { UserList } from '../components';

const Search = (props) => {
    const searchInputRef = useRef();
    
    const [filteredData, setFilteredData] = useState([]);
    const [searchString, setSearchString] = useState('')

    const userList = useSelector(store => store.userList);
    
    const searchForUser = ({ target: { value } }) => {
        setSearchString(value.toLowerCase());
    }
    
    const searchNow = (event) => {
        event && event.preventDefault();
        setFilteredData(userList.filter(({ first_name, email }) => {
            // lower case string before search, sometimes data maybe in upper case.
            return first_name.toLowerCase().includes(searchString) || email.toLowerCase().includes(searchString)
        }));
    }

    useEffect(() => {
        searchInputRef.current.focus(); // focus on input box on mount.
    })

    useEffect(() => {
        searchNow(); // on mount load all users
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userList])

    return (
        <div>
            <form onSubmit={searchNow } style={{
                padding:'10px'
            }}>
            <span style={{
                padding:'10px'
            }}>Search for users</span>
                <input ref={searchInputRef} placeholder={'...search'} onChange={searchForUser} ></input>
                <button onClick={searchNow}> Search </button>
            </form>
            <div className='userListParent'>
                {filteredData.length > 0 ? <UserList userList={filteredData}/> : <h1> Sorry, No User found</h1>}
            </div>
        </div>
    )
}

export default Search;