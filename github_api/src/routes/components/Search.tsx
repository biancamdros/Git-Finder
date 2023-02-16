type SearchProps = {
    loadUser: (username: string) => Promise<void>; 
}

import React from 'react'
import {BsSearch} from "react-icons/bs"
import { useState } from "react"
import classes from "./Search.module.css"

const Search = ({loadUser}: SearchProps) => {
    const [username, setUserName] = useState("");
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") {
          loadUser(username);
        }
      };
    return (
        <div className={classes.search}>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios</p>
            <div className={classes.search_container}>
                <input type="text" placeholder='Digite o nome do usuário' onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown}/>
                <button onClick={() => loadUser(username)}>
                    <BsSearch/>
                </button>
            </div>
        </div>
    )
}

export default Search 