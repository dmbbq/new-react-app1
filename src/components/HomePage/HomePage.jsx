import React , {useState, useEffect} from 'react';
import Header from "./Header/Header";
import SearchInput from "./SearchInput/SearchInput";
import CardList from "./CardList/CardList";
import s from './../HomePage/Container/Container.module.css'

const HomePage = () => {

    let [pageNumber, setPageNumber] = useState(1)
    let [fetchedData, updateFetchedData] = useState([])
    let [search, setSearch] = useState("")

    let {info, results} = fetchedData

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`

    useEffect (()=>{

        (async function(){
            let data = await fetch(api).then(res=>res.json())
            updateFetchedData(data)
        }) ()

    }, [api])

    return (
        <div className={s.container}>
            <Header />
            <SearchInput />
            <CardList  page='/' results={results}  />


        </div>
    );
};

export default HomePage;