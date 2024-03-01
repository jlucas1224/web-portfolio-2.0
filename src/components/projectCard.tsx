interface ProjectCardProps {
  project: {
    name: string,
    description: string,
    technologies: {
      id: number,
      name: string,
    }[],
    hasYoutubeVideo: boolean,
    youtubeVideo: string,
    isLaunched: boolean,
    projectLink: string,
    hasRepository: boolean
    repositoryLink: string,
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border-2 h-96 border-blue-500 group p-3">
      <div className="group-hover:hidden h-96 grid">
        <span className="font-bold text-3xl pt-5">{project.name}</span>
        <p className="text-sm">{project.description}</p>
        <p className="text-md">Tecnologias usadas:</p>
        <div className="flex justify-center space-x-5">
          {
            project.technologies.map((technology) => {
              return (
                <span key={technology.id} className="text-sm">{technology.name}</span>
              )
            })
          }
        </div>
      </div>
      <div className=" hidden group-hover:grid items-center">
        <span className="animate-bounce-forwards font-bold text-3xl pt-5 text-blue-700">{project.name}</span>
        <ul className="list-none space-y-6 pt-24">
          {
            project.hasRepository ? <li><a target="_blank" href={project.repositoryLink} className="font-bold text-3xl pt-5 hover:border-b-2 border-blue-500">Repositório</a></li> : ''
          }
          {
            project.isLaunched ? <li><a target="_blank" href={project.projectLink} className="font-bold text-3xl pt-5 hover:border-b-2 border-blue-500">Aplicação no ar</a></li> : ''
          }
          {
            project.hasYoutubeVideo ? <li><a target="_blank" href={project.youtubeVideo} className="font-bold text-3xl pt-5 hover:border-b-2 border-blue-500">Youtube</a></li> : ''
          }
        </ul>
       
      </div>
    </div>
  )
}