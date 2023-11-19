import React from 'react';
import PublishedGameRow from './PublishedGameRow';

function PublishedGamesTable({ games, onPlay}) {
    return (
        <table id='games-table'>
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Date Created</th>
                    <th>Date Modified</th>
                </tr>
            </thead>
            <tbody>
                {games.map(game => <GameRow key={game._id} game={game} onPlay={onPlay} />)}
            </tbody>
        </table>
    )
}

export default PublishedGamesTable;
