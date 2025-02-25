import React, { useRef, useState } from 'react'
import Body from './Body'
import { useSelector } from 'react-redux'
import languageConfig from '../utils/languageConfig';
import model from '../utils/Gemini';
import { API_OPTIONS } from '../utils/constants';
import MovieCard from './MovieCard';

const GPTSearch = () => {

    const pageLang = useSelector(store=> store.appConfig.lang);
    const searchText = useRef(null);
    const [searchResults, setSearchResults] = useState(null);

    const fetchQueryData = async () => {
        const prompt = "Give me a list of 5 " + searchText.current.value + "in a comma separated manner without any whitespaces before the movie names as in example ahead i.e Golmaal,The Shining,Sholay,1920,Haunted"

        const result = await model.generateContent(prompt)
        //console.log(result.response.text())

        getQueryResults(result.response.text())
    }

    const getQueryResults = async (queryResult) => {
        //console.log(queryResult);
        const arr = queryResult.split(',');
        arr[4] = arr[4].slice(0,arr[4].length - 1);             //so as to remove the newline operator coming at the end of string
        //console.log(arr);
        const results = [];
        if(queryResult)
        {
            for(let i=0;i<5;i++){
                //console.log(arr[i]);
                const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+arr[i]+'&language=en-US&page=1', API_OPTIONS)
                const jsonData = await data.json();
                //console.log(jsonData);
                results.push(jsonData);
            }
        }
        setSearchResults(results);
    }

    const handleClick = () => {
        setSearchResults(null);
        fetchQueryData();
    }

  return (
    <div className='relative'>
        <Body/>
        <div className='absolute z-10 bg-black bg-opacity-30 mt-[10%] ml-[33%] w-1/3'>
            <form className='grid grid-cols-12' onSubmit={e=>e.preventDefault()}>
                <input type="text" placeholder={languageConfig[pageLang].searchPlaceholderText} className='col-span-9 p-3 m-2 rounded-lg bg-gray-600' ref={searchText}></input>
                <button className='col-span-3 bg-red-700 text-white rounded-md p-3 m-2 font-bold' onClick={handleClick}>{languageConfig[pageLang].search}</button>
            </form>
        </div>
        <div className='absolute bg-black z-10 mt-[15%]'>
            {(searchResults) && (searchResults.map((i)=>(
                <span className='flex overflow-x-scroll'>{i.results.map((r)=>((r.poster_path)?<MovieCard poster_path={r.poster_path} />:<></>))}</span>
            )))}
        </div>
    </div>
  )
}

export default GPTSearch