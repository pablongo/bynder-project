/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { loadPlanet } from '../../redux/actions/actionCreators';

export default function CharacterDetails() {
  const dispatch = useDispatch();

  const planet = useSelector((store) => store.planet);
  const characters = useSelector((store) => store.characters);

  const { character } = useParams();

  const [shownCharacter, setShownCharacter] = useState({});

  useEffect(() => {
    if (characters) {
      const foundCharacter = characters
        .find((characterStored) => (characterStored.name === character));

      const url = foundCharacter.homeworld;
      dispatch(loadPlanet(foundCharacter.homeworld));
      setShownCharacter(foundCharacter);
    }
  }, []);

  return (
    <>
      <article>
        <section>
          <h1>{shownCharacter?.name}</h1>
          <span>{`Height: ${shownCharacter?.height}`}</span>
          <span>{`Mass: ${shownCharacter?.mass}`}</span>
          <span>{`Birth year: ${shownCharacter?.birth_year}`}</span>
          <span>{`Hair color: ${shownCharacter?.hair_color}`}</span>
          <span>{`Skin color: ${shownCharacter?.skin_color}`}</span>
          <span>{`Eye color: ${shownCharacter?.eye_color}`}</span>
        </section>
        <section>
          <h2>{planet.name}</h2>
          {}
        </section>
      </article>
    </>
  );
}
