import React from 'react';
import a from "../styles/app.module.css"
import Starter from "../components/Starter/component";
import About from "../components/About/component";
import Projects from "../components/Projects/component";
import {projectsInfo} from "../mock";
import {experienceInfo} from "../mock";
import Experience from "../components/Experience/component";

const Index = () => {
    return (
        <>
            <div className={a.body}>
                <Starter />
                <About />
                <Projects projects={projectsInfo} />
                <Experience experience={experienceInfo}/>
            </div>
            <style jsx global>{`
              body {
                margin: 0px;
                font-family: Poppins, sans-serif;
                padding: 0px;
              }
              h1 {
                margin: 0;
              }
              p {
                margin: 0 !important;
              }
            `}</style>
        </>
    );
};

export default Index;