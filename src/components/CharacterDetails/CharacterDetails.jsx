import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export default function CharacterDetails() {
  const characters = useSelector((store) => store.characters);
  const { character } = useParams();

  const [shownCharacter, setShownCharacter] = useState();

  useEffect(() => {
    if (characters) {
      const foundCharacter = characters
        .find((characterStored) => (characterStored.name === character));

      setShownCharacter(foundCharacter);
    }
  }, []);

  return (
    <>
      <h1>{shownCharacter?.name}</h1>
      <span>{`Height: ${shownCharacter?.height}`}</span>
      <span>{`Mass: ${shownCharacter?.mass}`}</span>
      <span>{`Birth year: ${shownCharacter?.birth_year}`}</span>
      <span>{`Hair color: ${shownCharacter?.hair_color}`}</span>
      <span>{`Skin color: ${shownCharacter?.skin_color}`}</span>
      <span>{`Eye color: ${shownCharacter?.eye_color}`}</span>
    </>
  );
}
