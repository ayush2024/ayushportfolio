import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'htmlCssJs' ?
            <ToggleButton active value="htmlCssJs" onClick={() => setToggle('htmlCssJs')}>HTML CSS and JS</ToggleButton>
            :
            <ToggleButton value="htmlCssJs" onClick={() => setToggle('htmlCssJs')}>HTML CSS and JS</ToggleButton>
          }
          <Divider />
          {toggle === 'react js' ?
            <ToggleButton active value="react js" onClick={() => setToggle('react js')}>React Js APP'S</ToggleButton>
            :
            <ToggleButton value="react js" onClick={() => setToggle('react js')}>React Js APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'MERN' ?
            <ToggleButton active value="MERN" onClick={() => setToggle('MERN')}>MERN</ToggleButton>
            :
            <ToggleButton value="MERN" onClick={() => setToggle('MERN')}>MERN</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects