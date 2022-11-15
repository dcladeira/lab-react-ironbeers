function CardBeer({beer}) {
    return (
        <div>
            <img src={beer.image_url} alt="beer label" />
            <h1>{beer.name}</h1>
            <h3>{beer.tagline}</h3>
            <p>{beer.description}</p>
            <p>First brewed: {beer.first_brewed}</p>
            <p>Beer attenuation: {beer.attenuation_level}</p>
            <p>Contributed by: {beer.contributed_by}</p>
        </div>
    )
}

export default CardBeer;