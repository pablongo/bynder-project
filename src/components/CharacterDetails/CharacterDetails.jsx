import React from 'react';
import { useParams } from 'react-router';

export default function CharacterDetails() {
  const { character } = useParams();
  console.log(character);
  return (
    <>
      <h1>HOLAAA</h1>
    </>
  );
}
