import React from 'react';
import { Link } from 'react-router-dom';
import Rootproject from './Rootproject';

export default function Projectslist({ projects }) {
  const projectPost = projects.map(project => {
    return (
      <Link to={`/project/${project.id}`} key={project.id}>
        <Rootproject project={project} />
      </Link>
    );
  });
  return <div className="project-list section">{projects && projectPost}</div>;
}
