import React from 'react';
import eC from "../../../styles/expCard.module.css"

const ExpCard = ({exp}) => {
    return (
        <div className={eC.expCard}>
            <p className={eC.companyName}>{exp.companyName}</p>
            <p className={eC.position}>{exp.position}</p>
            <p className={eC.time}>{exp.time}</p>
            <div className={eC.langs}>
                {
                    exp.pL.map((stack,id) =>
                        <React.Fragment key={id}>
                            <button className={eC.lang_button}>{stack.title}</button>
                        </React.Fragment>
                    )
                }
            </div>
            <p className={eC.desc}>{exp.desc}</p>
        </div>
    );
};

export default ExpCard;