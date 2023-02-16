type SearchProps = {
    loadUser: (username: string) => Promise<void>; 
}

import React from 'react'
import {BsSearch} from "react-icons/bs"
import { useState } from "react";

const Search = ({loadUser}: SearchProps) => {
    const [username, setUserName] = useState("");
    return (
        <div>
            <h2>Busque por um usuário:</h2>
            <p>Conheça seus melhores repositórios</p>
            <div>
                <input type="text" placeholder='Digite o nome do usuário' onChange={(e) => setUserName(e.target.value)}/>
                <button onClick={() => loadUser(username)}>
                    <BsSearch/>
                </button>
            </div>
        </div>
    )
}

export default Search 