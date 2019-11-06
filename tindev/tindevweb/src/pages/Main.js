import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import './Main.css';
import api from '../services/api';

//match pega parametos passados para a rota
export default function Main({match}){
    const [users, setUsers] = useState([]); 

    async function handleLike(id){
        await api.post(`/devs/${id}/likes`, null, {
            headers:{
                user: match.params.id
            },
        });
        setUsers(users.filter(user => user._id !== id));
    }
    async function handleDislike(id){
        await api.post(`/devs/${id}/dislikes`, null, {
            headers:{
                user: match.params.id
            },
        });
        setUsers(users.filter(user => user._id !== id));
    }
    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('/devs', {
                headers: { 
                            user: match.params.id, 
                         }
            })
            setUsers(response.data);
        }
        loadUsers();
    },[match.params.id]);
    return(
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="Logo do tindev" />
            </Link>
            {users.length > 0 ? (
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <img src={user.avatar} alt="Foto de perfil do github"/>
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="buttons">
                            <button type="button" onClick={() => handleDislike(user._id)}>
                                <img src={dislike} alt="Dislike no dev" />
                            </button>
                            <button type="button" onClick={() => handleLike(user._id)} >
                                <img src={like} alt="Like no dev" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
                ): (
                    <div className="empty">Acabou :(</div>
                )}
        </div>
    );
}