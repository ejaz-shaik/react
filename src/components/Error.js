import React from 'react';
import { useRouteError } from 'react-router';

const Error = () => {
    const err = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h1>This page does not exist, check the path!!</h1>
      <h1>{err.status} : {err.statusText}</h1>
    </div>
  )
}

export default Error
