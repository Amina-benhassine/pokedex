interface Pokemon {
  userInfo: {
    imgSrc?: string;
    name: string;
  };
}
function PokemonCard({ userInfo }: Pokemon) {
  return (
    <>
      <figure>
        {userInfo.imgSrc ? (
          <img src={userInfo.imgSrc} alt={userInfo.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption> {userInfo.name} </figcaption>
      </figure>
    </>
  );
}

export default PokemonCard;
