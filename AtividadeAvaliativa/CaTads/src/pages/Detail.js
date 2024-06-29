// Tela de detalhes para os itens da listagem:
//     A tela deve ser acessada através da listagem
//     Exemplo: ao clicar em um item da listagem o usuário é redirecionado para uma tela com mais detalhes desse item
//     As informações da tela de detalhes deverá vir da API


import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ButtonRoute from "../components/ButtonRoute";
import '../App.css';
import ExternalButton from "../components/ExternalButton";

const Detail = () => {
    const { id } = useParams();
    const [catData, setCatData] = useState(null);

    const getCat = useCallback(async () => {
        try {
            const { data } = await axios.get(`https://api.thecatapi.com/v1/images/${id}`);
            setCatData(data);
        } catch (error) {
            console.error(error);
        }
    }, [id]);

    useEffect(() => {
        getCat();
    }, [id, getCat]);

    return (
        <div>
            <div className='Header'>
                <ButtonRoute text="← List" route="/list" />
                <ButtonRoute text="Log out" route="/" />
            </div>
            <header className="App-header">
                {catData && catData.breeds && catData.breeds[0] && (
                    <>
                        <h1 className="Title">{catData.breeds[0].name}</h1>
                        <div className="ButtonGroup">
                            <h2 className="GroupItem">{catData.breeds[0].description}</h2>
                            <img className='ImgCat' src={catData.url} alt='gatinho' />
                            <h2 className="GroupItem">{catData.breeds[0].temperament}</h2>
                        </div>
                        <div className='ButtonGroup'>
                            {catData.breeds[0].wikipedia_url && (
                                <ExternalButton text="WikiCat" url={catData.breeds[0].wikipedia_url} />
                            )}
                        </div>
                    </>
                )}
            </header>
        </div>
    );
}

export default Detail;