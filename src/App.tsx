import { Navbar } from "./components/navbar" 
import ReactSvg from "./assets/react.svg"
import { ProjectCard } from "./components/projectCard"
import { SkillComponent } from "./components/skillComponent"
import "./App.css"
import { useEffect, useState, useRef, FormEvent } from "react"
import { GithubIcon } from "./components/githubIcon"
import { LinkedinIcon } from "./components/linkedinIcon"
import emailjs from '@emailjs/browser'

export function App() {
  const [showSkills, setShowSkills] = useState(false)
  const linkedinLink = 'https://www.linkedin.com/in/joão-lucas-cordeiro-santana/'
  const githubLink = 'https://github.com/jlucas1224'

  const projects = [
    {
      name: 'Blanch',
      description: "Aplicativo Android com o intuito de unir e conectar, através da mídia, pessoas que possuem o mesmo interesse culinário. Conta com post de fotos, timeline, curtidas, save de fotos, comentários, etc.",
      technologies: [{
          id: 1,
          name: 'Flutter',
        },
        {
          id: 2,
          name: 'Firebase'
        },
        {
          id: 3,
          name: 'Figma',
        }
      ],
      hasYoutubeVideo: true,
      youtubeVideo: 'https://www.youtube.com/watch?v=WeO960qFpFQ',
      isLaunched: false,
      projectLink: '',
      hasRepository: true,
      repositoryLink: 'https://github.com/almx021/Blanch',
    },
    {
      name: 'Portfolio Web',
      description: "Meu espaço web online para apresentar meus projetos e habilidades aos visitantes interessados em conhecer mais sobre mim.",
      technologies: [{
          id: 1,
          name: 'ReactJS',
        },
        {
          id: 2,
          name: 'Tailwind'
        },
      ],
      hasYoutubeVideo: false,
      youtubeVideo: '',
      isLaunched: true,
      projectLink: 'https://jlucas1224.github.io/web-portfolio-2.0/',
      hasRepository: true,
      repositoryLink: 'https://github.com/jlucas1224/web-portfolio-2.0',
    },
    {
      name: 'Notes',
      description: "Aplicação web para salvar anotações via áudio ou texto",
      technologies: [{
          id: 1,
          name: 'ReactJS',
        },
        {
          id: 2,
          name: 'Tailwind'
        }
      ],
      hasYoutubeVideo: false,
      youtubeVideo: '',
      isLaunched: true,
      projectLink: 'https://jlucas1224.github.io/notes/',
      hasRepository: true,
      repositoryLink: 'https://github.com/jlucas1224/notes',
    },
    {
      name: 'PokeAPI',
      description: "Projeto consumindo a PokeApi, API com todos os Pokemón conhecidos, é possível buscar Pokémon, ver suas características e favoritar",
      technologies: [{
          id: 1,
          name: 'ReactJS',
        },
      ],
      hasYoutubeVideo: false,
      youtubeVideo: '',
      isLaunched: true,
      projectLink: 'https://jlucas1224.github.io/pokedex/',
      hasRepository: true,
      repositoryLink: 'https://github.com/jlucas1224/pokedex',
    },
  ]

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: FormEvent) => {
    event.preventDefault();

    if (!form.current) return

    emailjs
      .sendForm('service_lr3f3tl', 'template_k9ukm43', form.current, {
        publicKey: 'cYGVfiVvqKXg4NPjp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  function displaySkills() {
    const skillsDiv = document.getElementsByClassName('skills')[0]
    const seeMoreButton = document.getElementsByClassName('see-more-button')[0]
    const seeLessButton = document.getElementsByClassName('see-less-button')[0]

    if (showSkills) {
      seeMoreButton.classList.add('hidden')
      seeLessButton.classList.remove('hidden')
      skillsDiv.classList.remove('max-h-[42rem]')
      skillsDiv.classList.remove('lg:max-h-[37rem]')
      skillsDiv.classList.remove('md:max-h-[39rem]')
      skillsDiv.classList.add('max-h-[400rem]')
    }
    else {
      skillsDiv.classList.remove('max-h-[400rem]')
      skillsDiv.classList.add('max-h-[42rem]')
      skillsDiv.classList.add('lg:max-h-[37rem]')
      skillsDiv.classList.add('md:max-h-[39rem]')
      seeMoreButton.classList.remove('hidden')
      seeLessButton.classList.add('hidden')
    }
  }

  function hideAndShowScrollArrow() {
    const arrows = document.getElementsByClassName('arrows')

    window.onscroll = function() {
      if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) arrows[0].classList.add('hidden')
      else arrows[0].classList.remove('hidden')
    }
  }

  function hideAndShowComponents() {
    const hiddenElements =  document.querySelectorAll('.hide')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show')
      })
    })
  
    hiddenElements.forEach((el) => observer.observe(el))
  }

  useEffect(() => {
    hideAndShowScrollArrow()
    hideAndShowComponents()
    displaySkills()
  })

  return (
    <div id="start">
      <Navbar />
      <div className='h-px bg-blue-900' />

      <div>
        <main className='max-w-6xl my-12 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-auto h-[90vh] items-center scroll-pt-12'>
          <div className="text-center md:text-left lg:text-left grid">
            <h1 className="text-5xl">João Lucas Cordeiro</h1>
            <p className="text-2xl typing-text text-blue-500">Desenvolvedor front-end</p>
            <div className="flex justify-center md:justify-start lg:justify-start py-3">
              <a target="_blank" href={githubLink}><GithubIcon /></a>
              <div className="px-1"/>
              <a target="_blank" href={linkedinLink}><LinkedinIcon /></a>
            </div>
          </div>
          <div className="justify-center md:justify-end lg:justify-end flex">
            <img 
              src={ReactSvg}
              className="size-96 "
            /> 
          </div>
        </main>

        <div className="pt-8" id="about_me"></div>
        <section className="text-2xl text-center max-w-6xl min-h-[25vh] my-12 px-5 lg:mx-auto space-y-6 hide hide-1 scroll-pb-8">
          <span className="text-5xl font-bold">Sobre mim</span>
          <p className="text-blue-500">Bem-vindo ao meu espaço digital! Sou João Lucas, desenvolvedor web. Apaixonado por transformar ideias em código, tenho explorado as nuances do desenvolvimento web. </p>
          <p className="text-blue-500">Estou sempre em busca de desafios empolgantes e oportunidades de aprendizado para aprimorar minhas habilidades e contribuir para projetos inovadores.</p>
        </section>

        <div className="pt-8" id="skills"></div>
        <section className='space-y-10 text-2xl text-center max-w-6xl my-12 px-5 lg:mx-auto hide hide-1 skills overflow-hidden scroll-pt-8'>
          <span className='text-5xl font-bold'>Habilidades</span>

          <SkillComponent 
            skillName="Typescript" 
            skillDescription="TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem."
          >
            <svg viewBox="0 0 128 128" className="size-32"><path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="rgb(59 130 246)" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path></svg>
          </SkillComponent>
        
          <SkillComponent 
            skillName="Tailwind" 
            skillDescription="Tailwind CSS é uma estrutura de design CSS altamente configurável e de baixo nível, que permite criar interfaces de usuário personalizadas de forma rápida e eficiente. Em vez de fornecer componentes pré-construídos como muitos outros frameworks CSS, o Tailwind CSS fornece uma grande variedade de utilitários CSS que podem ser combinados diretamente em seus elementos HTML para estilizá-los de forma granular."
          >
            <svg viewBox="0 0 128 128" className="size-32"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="rgb(59 130 246)"></path></svg>
          </SkillComponent>

          <div className="absolute bottom-2 left-0 w-full flex justify-center see-more-button-div">
            <button className="z-10 border-2 border-blue-500 py-2 px-4 text-sm see-more-button" onClick={() => setShowSkills(true)}>Ver mais</button>
          </div>

          <SkillComponent 
            skillName="Styled Components" 
            skillDescription="Styled Components é uma biblioteca para estilização de componentes em aplicações React. Com ela, você pode escrever estilos CSS diretamente em seus componentes React usando JavaScript (ou TypeScript), ao invés de arquivos CSS separados. Isso permite que você crie componentes com estilos encapsulados, facilitando a manutenção e a criação de interfaces de usuário consistentes e reutilizáveis."
          >
            <svg width="257" height="107" className="size-44"  viewBox="0 0 257 107" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_31_418)"> <path d="M173.355 -2.54248L172.553 1.63797C171.313 9.5605 171.762 11.8271 175.162 14.7673L178.444 17.483L175.044 32.6439C173.013 41.689 170.522 49.2694 168.939 51.7606C167.581 53.9096 165.999 57.0743 165.657 58.7743C165.09 60.8057 163.166 62.8478 160.226 64.6547C157.627 66.1302 152.528 70.0861 148.914 73.2616C146.027 75.8596 144.038 77.4527 142.959 78.137L139.43 80.9275C138.297 82.7451 137.655 84.2098 137.41 85.3218C137.164 86.4658 137.303 87.2249 137.666 87.7809C138.019 88.3154 138.628 88.6897 139.462 88.9249C140.45 89.1562 141.466 89.2391 142.477 89.1708C144.766 89.0144 147.031 88.613 149.235 87.9733C149.983 87.7702 150.571 87.5777 151.084 87.4066C151.875 86.4337 153.704 84.5947 156.943 81.3979C165.539 72.9194 168.822 68.2792 165.432 69.5302C164.181 69.9792 164.748 68.8459 166.897 66.5793C171.43 62.1636 174.029 55.492 179.46 34.5683C183.758 18.0497 183.758 17.8145 186.923 17.8145C188.409 17.8145 192.611 18.0711 192.611 18.0711V-2.54248H182.967H173.355ZM214.4 31.2967C213.716 31.2967 212.583 32.3231 211.909 33.4564C210.669 35.4878 212.134 36.7281 230.801 48.382C241.889 55.4064 250.827 61.3938 250.602 61.8535C250.378 62.185 241.322 68.0761 230.47 74.8653C210.776 87.0752 210.669 87.1928 212.476 89.684C214.742 92.6242 212.476 93.6399 238.04 77.6879L256.6 65.8094V56.8712L235.891 44.084C224.696 37.0702 214.967 31.4143 214.4 31.2967ZM42.4246 32.5476C41.8579 32.5476 32.1285 38.3211 20.9343 45.2173L0 58.0045V66.9428L20.8167 79.9545C32.3637 87.0752 42.0932 92.9663 42.5422 92.9663C42.9913 92.9663 43.9001 91.9399 44.8088 90.6997C46.1667 88.5507 45.0227 87.6419 25.906 75.5389C7.69801 64.1095 5.77351 62.5271 7.5911 61.2869C8.72441 60.4957 17.3205 55.1712 26.6009 49.4084C47.7598 36.3966 46.6264 37.2947 44.9265 34.579C44.2529 33.4564 43.1089 32.4407 42.4353 32.5476H42.4246ZM135.271 32.7935C132.149 32.7722 125.435 37.5299 105.334 53.9417C104.468 56.0052 104.394 57.4272 104.789 58.3466C105.046 58.9775 105.516 59.4158 106.168 59.7366C106.81 60.0573 107.644 60.2498 108.563 60.3246C110.392 60.485 112.551 60.1963 114.294 59.8542L115.47 59.5869C115.873 59.047 116.401 58.6139 117.01 58.3253C118.25 57.641 123.457 52.8939 128.664 47.8046C137.826 38.5243 139.976 34.3331 136.244 32.9753C135.938 32.8535 135.611 32.7918 135.282 32.7935H135.271ZM158.75 39.2406C156.002 39.3155 151.052 42.5016 142.574 49.2694C138.318 52.7228 135.624 54.5832 134.181 54.9681L128.578 59.3944C126.472 63.2434 126.162 65.6277 126.718 66.9428C126.857 67.2672 127.059 67.5608 127.312 67.8067C127.565 68.0526 127.865 68.2459 128.193 68.3755C129.01 68.698 129.881 68.8613 130.759 68.8566C132.858 68.8342 134.944 68.5285 136.96 67.9478C138.012 67.6657 139.05 67.3375 140.072 66.9641L140.382 66.8359L140.948 66.5365C142.018 65.1572 144.477 62.5592 147.556 59.5655C157.285 50.1782 162.257 43.5066 161.241 41.0154C160.782 39.8073 159.99 39.1978 158.75 39.2406ZM132.833 50.7876C132.042 50.8732 130.267 52.2417 127.071 55.0429C122.452 59.1271 117.416 61.4793 115.673 60.4315C115.268 60.523 114.862 60.6086 114.454 60.6881C112.68 61.041 110.466 61.3296 108.489 61.1693C107.557 61.1128 106.643 60.8844 105.794 60.4957C104.994 60.1296 104.355 59.4831 103.998 58.6781C103.602 57.7158 103.602 56.5184 104.051 54.9895L97.1019 60.6988L81.3744 73.7106V94.8053L132.908 54.209C132.898 53.7645 132.956 53.321 133.079 52.8939C133.475 51.4612 133.454 50.7342 132.833 50.7983V50.7876ZM155.008 57.6196C154.228 57.6196 152.923 58.7209 150.838 60.934C148.005 63.9598 143.547 66.8893 141.184 67.488L140.82 67.6805C140.432 67.8407 140.04 67.9904 139.644 68.1295C139.003 68.3434 138.169 68.6 137.206 68.8566C135.282 69.3805 132.887 69.8616 130.749 69.8081C129.74 69.8068 128.742 69.6108 127.808 69.2308C126.928 68.868 126.223 68.1782 125.841 67.3063C125.221 65.8201 125.467 63.7353 126.825 60.7737L81.3637 96.5801V109.464H101.336L143.696 76.1911C144.797 74.9722 146.455 73.3043 148.689 71.2194C154.677 65.6705 156.034 63.7566 156.034 60.9233C156.034 58.7209 155.789 57.6089 155.008 57.6089V57.6196ZM165.09 78.4684L161.466 82.0822C159.434 84.0067 155.81 86.3802 153.329 87.396L152.838 87.6098L152.806 87.6633L152.699 87.7702C152.602 87.845 152.56 87.8557 152.485 87.8878C151.495 88.2626 150.489 88.5943 149.47 88.8821C147.204 89.5415 144.874 89.9538 142.52 90.1116C141.407 90.183 140.29 90.0857 139.206 89.823C138.265 89.6159 137.435 89.0673 136.875 88.2834C136.362 87.4922 136.212 86.4337 136.501 85.1293C136.73 84.2007 137.071 83.3032 137.516 82.4564L103.335 109.464H148.796L154.228 103.241C161.69 94.538 165.09 88.3154 165.09 82.991V78.4684Z" fill="rgb(59 130 246)"></path> </g> <defs> <clipPath id="clip0_31_418"> <rect width="256.6" height="106.917" fill="white"></rect> </clipPath> </defs> </svg>
          </SkillComponent>

          <SkillComponent 
            skillName="Sass" 
            skillDescription="Sass é uma linguagem de extensão do CSS que adiciona recursos poderosos e expressivos ao CSS padrão. Ela fornece uma sintaxe mais concisa e organizada para escrever estilos CSS, facilitando a manutenção e a escalabilidade de projetos de desenvolvimento web."
          >
            <svg width="188" height="141" className="size-32" viewBox="0 0 188 141" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_20_348)"> <path d="M161.783 81.0016C155.21 81.0387 149.519 82.6172 144.745 84.9676C142.983 81.4793 141.22 78.4313 140.927 76.1551C140.596 73.5113 140.193 71.8953 140.596 68.7379C141 65.5797 142.836 61.1 142.836 60.7328C142.799 60.4024 142.432 58.7867 138.65 58.75C134.868 58.7133 131.6 59.4844 131.233 60.4758C130.866 61.4672 130.131 63.7438 129.654 66.0938C128.993 69.5453 122.09 81.7727 118.161 88.1985C116.876 85.7016 115.774 83.4985 115.554 81.7356C115.223 79.0922 114.819 77.4762 115.223 74.3188C115.627 71.1606 117.463 66.6813 117.463 66.3141C117.427 65.9836 117.059 64.368 113.278 64.3313C109.495 64.2946 106.228 65.0657 105.861 66.0571C105.493 67.0485 105.089 69.3985 104.282 71.675C103.51 73.9516 94.3305 94.3672 91.9437 99.6914C90.732 102.409 89.6675 104.575 88.8961 106.044C88.125 107.513 88.8594 106.154 88.7859 106.301C88.125 107.549 87.7578 108.247 87.7578 108.247V108.284C87.2437 109.202 86.693 110.083 86.4356 110.083C86.252 110.083 85.8848 107.623 86.509 104.245C87.8676 97.1578 91.1723 86.1059 91.1359 85.702C91.1359 85.5184 91.7598 83.5719 89.0059 82.5809C86.3254 81.5895 85.3711 83.2418 85.1504 83.2418C84.9301 83.2418 84.7465 83.8293 84.7465 83.8293C84.7465 83.8293 87.7207 71.382 79.0551 71.382C73.6207 71.382 66.1301 77.2937 62.4215 82.6914C60.0715 83.9765 55.0777 86.6934 49.7902 89.5945C47.7707 90.6961 45.6777 91.8711 43.6949 92.9359L43.2914 92.4946C32.7898 81.2953 13.3656 73.3641 14.1734 58.3094C14.4672 52.8383 16.3766 38.4078 51.48 20.9297C80.2308 6.60941 103.253 10.5383 107.255 19.2774C112.947 31.7617 94.9547 54.968 65.066 58.3094C53.6832 59.5946 47.6976 55.1883 46.1925 53.536C44.6136 51.8102 44.3933 51.7367 43.8058 52.0672C42.8511 52.5813 43.4386 54.1235 43.8058 55.0414C44.6871 57.3547 48.359 61.4672 54.6011 63.5235C60.0719 65.3227 73.4379 66.3141 89.5941 60.0719C107.696 53.0586 121.833 33.5977 117.684 17.3313C113.461 0.771125 85.9957 -4.66325 60.0355 4.55315C44.5766 10.061 27.8328 18.6532 15.7891 29.9258C1.46874 43.2914 -0.807822 54.968 0.146865 59.8149C3.48864 77.1094 27.3187 88.3821 36.8656 96.7172C36.3883 96.9739 35.9476 97.2309 35.5437 97.4516C30.7703 99.8012 12.5945 109.312 8.0414 119.372C2.90077 130.755 8.84921 138.944 12.8148 140.045C25.0789 143.46 37.6367 137.328 44.4297 127.23C51.1856 117.133 50.3781 104.024 47.257 98.0391L47.1465 97.8188L50.8918 95.6157C53.3156 94.1836 55.7023 92.8617 57.7949 91.7231C56.6203 94.9176 55.7754 98.6997 55.3351 104.207C54.8211 110.67 57.4648 119.042 60.9531 122.347C62.4953 123.778 64.3312 123.815 65.4695 123.815C69.5086 123.815 71.3445 120.474 73.3641 116.472C75.8609 111.588 78.0641 105.933 78.0641 105.933C78.0641 105.933 75.3102 121.245 82.8375 121.245C85.5914 121.245 88.3453 117.683 89.5937 115.847V115.884C89.5937 115.884 89.6672 115.774 89.8141 115.517C89.9681 115.289 90.1151 115.057 90.2547 114.82V114.746C91.3562 112.837 93.8164 108.467 97.4883 101.234C102.225 91.9071 106.778 80.2305 106.778 80.2305C106.778 80.2305 107.219 83.0946 108.577 87.7946C109.385 90.5856 111.147 93.6329 112.506 96.6071C111.404 98.1493 110.743 99.0309 110.743 99.0309L110.78 99.0676C109.899 100.243 108.907 101.491 107.88 102.739C104.134 107.219 99.6547 112.323 99.0672 113.792C98.3695 115.518 98.5164 116.803 99.875 117.831C100.866 118.566 102.629 118.712 104.502 118.566C107.88 118.345 110.23 117.501 111.405 116.986C113.241 116.325 115.334 115.334 117.353 113.865C121.025 111.148 123.265 107.293 123.045 102.152C122.934 99.325 122.016 96.5344 120.878 93.8906C121.209 93.4133 121.539 92.9355 121.87 92.4219C127.671 83.9395 132.151 74.6133 132.151 74.6133C132.151 74.6133 132.591 77.4773 133.95 82.1773C134.647 84.564 136.043 87.1714 137.291 89.7418C131.857 94.1847 128.442 99.3254 127.267 102.703C125.101 108.946 126.79 111.773 129.984 112.434C131.416 112.728 133.473 112.067 135.014 111.406C136.924 110.782 139.237 109.716 141.367 108.138C145.039 105.421 148.564 101.639 148.38 96.5347C148.27 94.1847 147.646 91.8714 146.802 89.6683C151.428 87.7589 157.413 86.6574 165.014 87.5753C181.354 89.4847 184.585 99.6925 183.961 103.952C183.337 108.212 179.922 110.561 178.784 111.296C177.645 111.993 177.278 112.251 177.388 112.764C177.535 113.536 178.049 113.499 179.041 113.352C180.399 113.132 187.633 109.864 187.927 102.007C188.367 91.9074 178.784 80.8918 161.783 81.0016ZM35.7641 123.485C30.3664 129.397 22.7656 131.637 19.5344 129.727C16.0461 127.708 17.4043 119.006 24.0508 112.727C28.0898 108.908 33.3406 105.383 36.7922 103.216C37.5633 102.739 38.7383 102.042 40.1336 101.197C40.3539 101.05 40.5008 100.977 40.5008 100.977C40.7578 100.83 41.0516 100.646 41.3453 100.463C43.8055 109.422 41.4555 117.28 35.7641 123.485ZM75.2367 96.6438C73.3641 101.234 69.3984 113.02 67.0117 112.359C64.9551 111.809 63.707 102.886 66.6074 94.0735C68.0762 89.6301 71.1973 84.343 73.0332 82.2864C76.0078 78.9817 79.2387 77.8801 80.0469 79.2387C81.0015 81.0016 76.4117 93.7797 75.2367 96.6438ZM107.806 112.213C106.998 112.617 106.264 112.91 105.934 112.69C105.677 112.543 106.264 111.993 106.264 111.993C106.264 111.993 110.339 107.623 111.955 105.604C112.873 104.429 113.975 103.07 115.15 101.528V101.968C115.15 107.256 110.083 110.781 107.806 112.213ZM132.921 106.484C132.334 106.044 132.408 104.685 134.39 100.426C135.162 98.7368 136.924 95.9094 139.971 93.2289C140.339 94.3305 140.559 95.395 140.522 96.3867C140.486 102.996 135.786 105.456 132.921 106.484Z" fill="rgb(59 130 246)"></path> </g> <defs> <clipPath id="clip0_20_348"> <rect width="188" height="141" fill="white"></rect> </clipPath> </defs> </svg>
          </SkillComponent>

          <SkillComponent
            skillName="Bootstrap"
            skillDescription="
            Bootstrap é um dos frameworks de front-end mais populares e amplamente utilizados para desenvolvimento web responsivo. Ele fornece um conjunto de ferramentas, componentes e estilos pré-projetados que facilitam a criação de interfaces de usuário atraentes e responsivas de forma rápida e eficiente."
          >
            <svg viewBox="0 0 128 128" className="size-32"><path fill="rgb(59 130 246)"  d="M27.235 13.885c-7.177 0-12.486 6.284-12.249 13.099.228 6.546-.068 15.026-2.203 21.94-2.14 6.936-5.76 11.319-11.673 11.883v6.387c5.913.563 9.533 4.947 11.673 11.883 2.135 6.914 2.43 15.394 2.203 21.94-.238 6.815 5.072 13.098 12.249 13.098h73.54c7.177 0 12.486-6.284 12.249-13.098-.228-6.546.068-15.026 2.202-21.94 2.14-6.935 5.751-11.319 11.664-11.883v-6.387c-5.913-.563-9.523-4.947-11.664-11.883-2.134-6.914-2.43-15.394-2.202-21.94.237-6.815-5.072-13.099-12.25-13.099zm58.114 61.686c0 9.384-7.002 15.073-18.621 15.073H45.306a.491.491 0 01-.491-.491V37.827a.491.491 0 01.491-.492h21.309c9.689 0 16.047 5.246 16.047 13.3 0 5.653-4.277 10.713-9.727 11.6v.296c7.418.813 12.414 5.948 12.414 13.04zM64.571 44.096H53.293v15.922h9.5c7.342 0 11.391-2.955 11.391-8.238 0-4.95-3.481-7.684-9.613-7.684zm-11.278 22.24v17.548h11.695c7.645 0 11.695-3.066 11.695-8.83 0-5.763-4.163-8.718-12.187-8.718z"></path></svg>
          </SkillComponent>

          <SkillComponent
            skillName="React"
            skillDescription="React é uma biblioteca de JavaScript de código aberto para a criação de interfaces de usuário. Ela é utilizada para construir aplicativos de página única e interfaces de usuário interativas. Uma das características principais do React é o uso de um modelo de programação declarativo, onde os desenvolvedores descrevem como a interface deve ser exibida e o React se encarrega de atualizar o DOM de forma eficiente, de acordo com as mudanças nos dados da aplicação."
          >
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="size-32" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="rgb(59 130 246 / 1)" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
          </SkillComponent>

          <SkillComponent 
            skillName="Flutter" 
            skillDescription="Flutter é um framework open-source desenvolvido pelo Google para criar aplicativos nativos para dispositivos móveis, web e desktop a partir de uma única base de código."
          >
            <svg viewBox="0 0 128 128" className="size-32"><path fill="rgb(59 130 246)" d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"></path></svg>
          </SkillComponent>

          <div className="bottom-2 left-0 w-full flex justify-center see-more-button-div">
            <button className="z-10 border-2 border-blue-500 py-2 px-4 text-sm see-less-button hidden" onClick={() => setShowSkills(false)}>Ver menos</button>
          </div>
        </section>
        
        <div className="pt-8" id="projects"></div>
        <section className="text-2xl text-center max-w-6xl my-12 px-5 lg:mx-auto space-y-6 hide hide-1 scroll-pt-8">
          <span className="text-5xl font-bold">Projetos</span>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {
              projects.map((project) => {
                return <ProjectCard key={project.name} project={project}/>
              })
            }
          </div>
        </section>

        <div className="max-w-6xl my-12 px-5 lg:mx-auto items-center space-y-6 hide hide-1">
        <span className="text-5xl font-bold">Contato</span>

          <form ref={form} onSubmit={sendEmail} className="justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="grid grid-cols-1 space-y-6">
              <input
                placeholder="Digite seu nome e sobrenome"
                required
                name="from_name"
                className="border-2 border-blue-500 bg-transparent enabled:hover:border-blue-500 target:border-blue-500 outline-none p-1"
              />
              <input 
                name="user_email"
                required
                placeholder="Digite seu email"
                className="border-2 border-blue-500 bg-transparent enabled:hover:border-blue-500 target:border-blue-500 outline-none p-1"
              />
              <input 
                name="topic"
                required
                placeholder="Digite o assunto"
                className="border-2 border-blue-500 bg-transparent enabled:hover:border-blue-500 target:border-blue-500 outline-none p-1"
              />
              <textarea
                name="message"
                required
                cols={30}
                rows={10}
                placeholder="Escreva sua mensagem"
                className='border-2 border-blue-500 bg-transparent enabled:hover:border-blue-500 target:border-blue-500 outline-none p-1 resize-none'
              />
              <button className="border-2 border-blue-500 bg-transparent enabled:hover:border-blue-500 target:border-blue-500 outline-none p-1">Enviar</button>
            </div>

            <div className="md:px-5 lg:px-5 py-7 md:py-0 lg:py-0 ">
              <span className="text-4xl text-blue-500">E-mail para contato</span>
              <p className="px-2 py-3">lucasjcordeiro@outlook.com</p>

              <div className="space-y-6 pt-6">
                <span className="my-40 text-4xl text-blue-500">Redes</span>

                <a
                  target="_blank"
                  className="flex items-center"
                  href={githubLink}
                >
                  <GithubIcon />
                  <span className="px-2 text-base">/jlucas1224</span>
                </a>

                <a
                  target="_blank"
                  className="flex items-center"
                  href={linkedinLink}
                >
                  <LinkedinIcon />
                  <span className="px-2 text-base">/joão-lucas-cordeiro-santana</span>
                </a>
              </div>
            </div>
          </form>
      </div>
      </div>

      <svg className="arrows" fill="rgb(59 130 246)">
        <path className="a1" d="M0 0 L30 32 L60 0"></path>
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </div>
  )
}
