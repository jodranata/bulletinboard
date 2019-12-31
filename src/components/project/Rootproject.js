import React from 'react';
import moment from 'moment';

export default function Rootproject({ project }) {
  const { title, authorFirstName, authorLastName, createdAt } = project;
  const projectDate = moment(createdAt.toDate()).calendar();
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>{`Posted by ${authorFirstName} ${authorLastName}`}</p>
        <p className="grey-text">{projectDate}</p>
      </div>
    </div>
  );
}
