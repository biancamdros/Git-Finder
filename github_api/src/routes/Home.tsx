import Search from "./components/Search";
import { useState } from "react";
import { UserProps } from "../types/user";

const Home = () => {
    const [user, setUser] = useState <UserProps|null> (null);
    const loadUser = async(username: string) => {
        const res = await fetch(`https://api.github.com/users/${username}`)

        const data = await res.json();
        const {avatar_url, login, location, follower, following} = data

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            follower,
            following,
        }
        setUser(userData);
    }
    return(
        <div> 
            <Search loadUser = {loadUser}/> 
            {user && <p>{user.login}</p>}
        </div>
    )  

};

export default Home;