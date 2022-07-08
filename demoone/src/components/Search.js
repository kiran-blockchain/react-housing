import { useState } from "react";
const Search = () => {
    //Create the state variables
    const [searchData,setSearchData] = useState('hai')
    return (
        <div className="container">
            <div class="row g-3">

                <div class="col-auto">
                    <label for="search" class="visually-hidden">Search</label>
                    <input type="text" 
                    id="search"
                    name="search"
                    value={searchData}
                    onChange={e=>{
                        setSearchData(e.target.value)
                    }}
                    class="form-control" 
                    placeholder="Search"/>
                </div> <h1>{searchData}</h1>
            </div>
        </div>
    )
}

export default Search;