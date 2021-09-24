import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { loadPlanet } from '../../redux/actions/actionCreators';

import './CharacterDetails.css';

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
      <article className="character-container">
        <section className="character-container__data data">
          <h1 className="data__title">{shownCharacter?.name}</h1>
          <section className="data__concrete concrete">
            <div className="concrete__columns">
              <span>{`HEIGHT: ${shownCharacter?.height}`}</span>
              <span>{`MASS: ${shownCharacter?.mass}`}</span>
              <span>{`BIRTH YEAR: ${shownCharacter?.birth_year}`}</span>
            </div>
            <div className="concrete__columns">
              <span>{`HAIR: ${shownCharacter?.hair_color}`}</span>
              <span>{`SKIN: ${shownCharacter?.skin_color}`}</span>
              <span>{`EYES: ${shownCharacter?.eye_color}`}</span>
            </div>
          </section>
        </section>
        <section className="data__planet planet">
          <h2 className="planet__title">{planet.name}</h2>
          {planet.planetResidents && (
            <ul className="planet__residents residents">
              {planet.planetResidents.map((resident) => (
                <Link to={`/details/planets/${resident.name}`}>
                  <li className="residents__name" key={resident.name}>
                    <h3>{resident.name}</h3>
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </section>
        <Link to="/">
          <button
            className="back-button"
            type="button"
          >
            Go back
          </button>
        </Link>
      </article>
    </>
  );
}
