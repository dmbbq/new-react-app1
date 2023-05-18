import React , {useState, useEffect} from 'react';
import Header from "./Header/Header";
import SearchInput from "./SearchInput/SearchInput";
import CardList from "./CardList/CardList";
import s from './../HomePage/Container/Container.module.css'

const HomePage = () => {

    let [pageNumber, setPageNumber] = useState(1)
    let [cards, setCards] = useState([])
    let [search, setSearch] = useState("")

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
    const getCardsRequest = async () => {
         return  await fetch(api).then(res=>res.json()).then((data) => {
             setCards(data.results)
         })
    }
    useEffect (()=>{
        getCardsRequest()
    }, [])

    return (
        <div className={s.container}>
            <Header />
            <SearchInput />
            <CardList  page='/' results={cards}  />


        </div>
    );
};

export default HomePage;