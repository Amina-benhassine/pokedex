function PokemonCard({ pokemon }) {
  interface Pokemon {
    userInfo: {
      imgSrc: string;
      name: string;
    };
  }
  return (
    <>
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption> {pokemon.name} </figcaption>
      </figure>
    </>
  );
}

export default PokemonCard;
