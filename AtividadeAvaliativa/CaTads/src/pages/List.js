// Tela de listagem, a qual exiba:
//     Uma imagem retornada pela API
//     2 informações retornadas pela API (informações textuais, numéricas, datas, etc.)
//     Paginação feita via backend
//     Pode ser listagem por tabela, cards, etc. O layout fica a critério de vocês
//
//     https://thecatapi.com/


import React, { useState, useEffect, useCallback } from 'react';
import ButtonRoute from '../components/ButtonRoute.js';
import '../App.css';
import axios from 'axios';
import { Box, Input } from '@chakra-ui/react';
import cat from '../assets/cat.png';

const List = () => {
    const [catData, setCatData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getCats = useCallback(async (searchTerm = '') => {
        try {
            const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=18&has_breeds=1&api_key=live_OrZVLkg7cpka2DQ5eqnKgJz0Bk9VLotJq5IPnlx6pxcEAKRyEbID3fhB7WwPpA5Y`);
            if (searchTerm) {
                const filteredCats = response.data.filter(cat =>
                    cat.breeds[0]?.name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setCatData(filteredCats);
            } else {
                setCatData(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        getCats(searchTerm);
    }, [getCats, searchTerm]);

    const handleImageClick = () => {
        window.location.reload();
    };

    return (
        <Box>
            <div className='Header'>
                <Input
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder='Search'
                    size='lg'
                    width='auto'
                    borderColor="black"
                    focusBorderColor="black"
                    className="SearchInput"
                />
                <img src={cat} className="App-Sticker" alt="gatinho" onClick={handleImageClick} />
                <ButtonRoute text="Log out" route="/" className="LogoutButton" />
            </div>

            <header className="App-header">
                <div className="CatGrid">
                    {catData.map(cat => (
                        <div key={cat.id} className="CatItem">
                            <ButtonRoute text={cat.breeds[0]?.name} route={`/detail/${cat.id}`} params={cat} />
                            <img className='ImgCatList' src={cat.url} alt='gatinho' />
                            <div className="CatTitleItem">
                                <p className="OriginText">{cat.breeds[0]?.origin}</p>
                            </div>
                            <div className="CatTextItem">
                                <p>{cat.breeds[0]?.temperament}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </header>
        </Box>
    );
}

export default List;