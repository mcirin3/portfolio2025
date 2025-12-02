import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-20 scroll-mt-32">
      <div className="mb-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-6 left-0 translate-x-1/2 filter blur-3xl opacity-30" />
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] w-fit text-white px-5 py-3 text-xl rounded-md shadow-md shadow-black/30">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
        {projectsData.slice(0, 6).map((project, index) => (
          <div key={index} className="w-full">
            <div className="box-border flex h-full items-stretch rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
