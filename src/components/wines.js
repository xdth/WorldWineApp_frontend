import React from 'react'

const Wines = ({wines}) => {
    return (
        <div className={'content'} >
            {wines.map((wine) => (
                <div className="card" key={wine.id}>
                    <div className="card-body">
                        <h5 className="card-title">{wine.country}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{wine.title}</h6>
                        <p className="card-text">{wine.winery}</p>
                        <a href={`/${wine.id}`} >link</a>
                        <hr/>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Wines