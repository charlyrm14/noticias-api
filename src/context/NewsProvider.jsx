import { useState, useEffect, createContext } from "react";
import axios from 'axios';

const NewsContext    = createContext();

const NewsProvider  = ( { children } ) => {

    const [ category, setCatgeory ] = useState('general'); // Carga por defecto la categoría general
    const [ news, setNews ]         = useState([]);
    const [ page, setPage ]         = useState(1); // Inicia en página 1
    const [ totalNews, setTotalNews ] = useState(0);

    useEffect( () => {

        const consultAPI = async () => {

            const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

            const { data } = await axios( url );
            setNews( data.articles );
            setTotalNews( data.totalResults );
            setPage(1);
        }

        consultAPI();

    }, [ category ]);

    useEffect( () => {

        const consultAPI = async () => {

            const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

            const { data } = await axios( url );
            setNews( data.articles );
            setTotalNews( data.totalResults );
        }

        consultAPI();

    }, [ page ]);

    const handleChangeCategory = e => {
        setCatgeory( e.target.value );
    }

    const handleChangePage = ( e, value ) => {
        // value: toma en este caso la página al cual nos esta llevando el paginador
        setPage( value );
    }

    return (
        <NewsContext.Provider
            value={{
                category,
                handleChangeCategory,
                news,
                totalNews,
                handleChangePage,
                page
            }}
        >
            { children }
        </NewsContext.Provider>
    )
} 

export {
    NewsProvider
}

export default NewsContext;