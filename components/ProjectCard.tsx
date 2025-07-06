import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import MediaIcon from '@mui/icons-material/YouTube';

interface Project {
  thumbnail?: string;
  name?: string;
  description?: string[];
  stack?: string[];
  sourceCode?: string;
  livePreview?: string;
  externalVideoSource?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className='project'>
      <div>
        {project.thumbnail && (
          <img
            className='project__thumbnail'
            src={project.thumbnail}
            alt={project.name ? `${project.name} thumbnail` : 'Project thumbnail'}
          />
        )}

        {project.name && <h3>{project.name}</h3>}

        {project.description && (
          <div className='project__description paragraph__list'>
            {project.description.map((item, index) => (
              <p key={`desc-${index}`}>{item}</p>
            ))}
          </div>
        )}
      </div>

      <div>
        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item, index) => (
              <li key={`stack-${index}`} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="project__links">
          {project.sourceCode && (
            <a
              href={project.sourceCode}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='source code'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>
          )}

          {project.livePreview && (
            <a
              href={project.livePreview}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='live preview'
              className='link link--icon'
            >
              <LaunchIcon />
            </a>
          )}

          {project.externalVideoSource && (
            <a
              href={project.externalVideoSource}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='video preview'
              className='link link--icon'
            >
              <MediaIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;