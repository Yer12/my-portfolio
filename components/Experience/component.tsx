import React from 'react';
import e from "../../styles/experience.module.css"
import ExpCard from "./expCard/component";
import {IExperience} from "../../types/experience";
interface ExpListProps {
    experience: IExperience[];
}

const Experience: React.FC<ExpListProps> = ({experience}) => {
    return (
        <div className={e.experience}>
            <div className={e.cont}>
                <h1 className={e.sectionHeader}>{'<>'} Experience {'</>'}</h1>
                <div className={e.experiences}>
                    <div>
                        {
                            experience.map((exp, idx) =>
                                <React.Fragment key={idx}>
                                    <ExpCard exp={exp}/><br/>
                                </React.Fragment>
                            )
                        }
                    </div>
                    <div className={e.timeline}>
                        <div className={e.ellipse}>
                            <div className={e.sub_ellipse}></div>
                        </div>
                        <div className={e.line}></div>
                        <div className={e.ellipse}>
                            <div className={e.sub_ellipse}></div>
                        </div>
                        <div className={e.line}></div>
                        <div className={e.ellipse}>
                            <div className={e.sub_ellipse}></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Experience;