import React from 'react';
import resume from './resume.json';

const Resume = () => {
  const data = resume;
  return (
    <div className="max-w-4xl mx-auto p-6 font-serif">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold uppercase tracking-wide">{data.basics.name}</h1>
        <p className="text-sm">
          {data.basics.location.address} · {data.basics.email} · {data.basics.phone} ·
          <a
            href={data.basics.website}
            className="text-blue-600 hover:underline ml-1"
          >
            {data.basics.website.replace('https://', '')}
          </a>
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold uppercase border-b-2 border-black mb-2">Education</h2>
        {data.education.map((edu, index) => (
          <div
            key={index}
            className="mb-2"
          >
            <div className="flex justify-between">
              <span className="font-bold">{edu.institution}</span>
              <span>{edu.location}</span>
            </div>
            <div className="flex justify-between italic">
              <span>
                {edu.studyType} in {edu.area}
              </span>
              <span>GPA: {edu.gpa}</span>
            </div>
            <div className="text-sm">
              {edu.startDate} - {edu.endDate}
            </div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h2 className="text-xl font-bold uppercase border-b-2 border-black mb-2">Experiences</h2>
        {data.work.map((job, index) => (
          <div
            key={index}
            className="mb-2"
          >
            <div className="flex justify-between">
              <span className="font-bold">{job.company}</span>
              <span>{job.location}</span>
            </div>
            <div className="italic">{job.position}</div>
            <div className="text-sm">
              {job.startDate} - {job.endDate}
            </div>
            <ul className="list-disc pl-5 text-sm">
              {job.highlights.map((highlight, hi) => (
                <li key={hi}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-xl font-bold uppercase border-b-2 border-black mb-2">Skills & Proficiencies</h2>
        {data.skills.map(
          (skillGroup, index) =>
            skillGroup.keywords &&
            skillGroup.keywords.filter((k) => k).length > 0 && (
              <div
                key={index}
                className="flex mb-1"
              >
                <span className="font-bold w-1/4">{skillGroup.name}:</span>
                <span>{skillGroup.keywords.filter((k) => k).join(', ')}</span>
              </div>
            ),
        )}
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-xl font-bold uppercase border-b-2 border-black mb-2">Projects</h2>
        {data.projects
          .filter((project) => project.name)
          .map((project, index) => (
            <div
              key={index}
              className="mb-2"
            >
              <div className="flex justify-between">
                <span className="font-bold">{project.name}</span>
                <span className="italic text-sm">
                  {project.keywords ? project.keywords.filter((k) => k).join(', ') : ''}
                </span>
              </div>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        {data.projects.some((p) => p.url) && (
          <div className="text-sm italic text-right">
            <a
              href={data.projects.find((p) => p.url)?.url}
              className="text-blue-600 hover:underline"
            >
              {data.projects.find((p) => p.url)?.keywords?.[0]}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
