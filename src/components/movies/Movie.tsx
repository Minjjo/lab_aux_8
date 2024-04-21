import React from 'react'
const URL_RANDOM_AVATAR = 'https://api.minimalavatars.com/avatar/random/png'

const MovieComponent: React.FC = () => {
    return (
        <div className="movie" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px' }}>
            <div>
                <h1>Random Image</h1>
            </div>
            <div className="avatar" style={{ marginTop: '-10px', marginBottom: '10px' }}>
                <img src={URL_RANDOM_AVATAR} alt="" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
                <hr style={{ width: '80%', marginTop: '0', marginBottom: '10px', border: 'none', borderTop: '1px solid #ccc' }} />
            </div>
            <div className="info" style={{ marginTop: '5px', margin: '10px' }}>
                <p>Descripción:</p>
                <p>Colocar alguna descripción para los personajes</p>
            </div>
        </div>
    )
}

export default MovieComponent
