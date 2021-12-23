import * as React from 'react';
import axios from 'axios';
import {useQuery} from 'react-query';
import { AllGameDataResponse } from '../../App.types';

export const GameStats: React.FC = () => {

    const [currentPlayerStats, setCurrentPlayerStats] = React.useState<AllGameDataResponse>()
    
    const {data} = useQuery(
        'allgamedata',
        async () => {
            const res = await axios.get<AllGameDataResponse>('https://localhost:2999/liveclientdata/allgamedata')
            setCurrentPlayerStats(res.data);
            return res.data
        }, {
            refetchInterval: 2000
        }
    )

    console.log(currentPlayerStats);
    if(data) {
        return (
        <>
            {currentPlayerStats?.activePlayer.summonerName} <br />
            {currentPlayerStats?.activePlayer.currentGold} <br />
            {currentPlayerStats?.activePlayer.level} <br />
        </>
        )
    }
    return (<></>)
    
}