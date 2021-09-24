import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { loadPlanet } from '../../redux/actions/actionCreators';

export default function CharacterDetails() {
  const dispatch = useDispatch();

  const planet = useSelector((store) => store.planet);
  const characters = useSelector((store) => store.characters.results);

  const { source, character } = useParams();

  const [shownCharacter, setShownCharacter] = useState({});

  useEffect(() => {
    let foundCharacter;
    if (source === 'dashboard') {
      foundCharacter = characters
        .find((characterStored) => (characterStored.name === character));
    } else {
      foundCharacter = planet.planetResidents
        .find((characterStored) => (characterStored.name === character));
    }

    dispatch(loadPlanet(foundCharacter.homeworld));
    setShownCharacter(foundCharacter);
  }, [character]);

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
          {planet.planetResidents && (
          <ul>
            {planet.planetResidents.map((resident) => (
              <Link to={`/details/planets/${resident.name}`}>
                <li key={resident.name}>
                  <h3>{resident.name}</h3>
                </li>
              </Link>
            ))}
          </ul>
          )}
        </section>
      </article>
      <Link to="/">
        <button type="button">
          Go back
        </button>
      </Link>
    </>
  );
}
