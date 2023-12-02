import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import GeneralInput from './inputs/General_Input';
import PersonalInfo from './info/Personal_Info';
import EducationInput from './inputs/EducationInput';
import EducationInfo from './info/EducationInfo';
import ExperienceInput from './inputs/ExperienceInput';
import ExperienceInfo from './info/ExperienceInfo';
import styles from '../styles/Content.module.css';

export default function Content() {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        location: '',
    });

    const [educationInfo, setEducationInfo] = useState({
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: '',
    });

    const [experienceInfo, setExperienceInfo] = useState({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        location: '',
        description: '',
    });

    const [experiences, setExperiences] = useState([]);

    const [educations, setEducations] = useState([]);

    function notEmpty(obj) {
        return Object.values(obj).some( value => value!= '' && value != obj['key']);
    }

    function onEditEdu(key){
        const editItem = educations.find((education) => education.key === key);
        setEducationInfo(editItem);
    }

    function onEditExp(key){
        const editItem = experiences.find((education) => education.key === key);
        setExperienceInfo(editItem);
    }

    function onDeleteEdu(items, deleteItem) {
        setEducations(items.filter((item) => item != deleteItem))
    }

    function onDeleteExp(items, deleteItem) {
        setExperiences(items.filter((item) => item != deleteItem))
    }


    function onSaveEdu() {
        if(notEmpty(educationInfo)){
            if(educationInfo.key) {
                //if education exists already - saves updated version with same id
                setEducations(educations.map(edu => edu.key === educationInfo.key ? educationInfo : edu))
            } else {
                //creates a new education with unique id
                setEducations([...educations, {...educationInfo, key: uuidv4()}]);
            }
            //resets input fields
            setEducationInfo({        
                school: '',
                degree: '',
                startDate: '',
                endDate: '',
                location: '',
            });
        }
    }

    function onSaveExp() {
        if(notEmpty(experienceInfo)) {
            if(experienceInfo.key) {
                setExperiences(experiences.map(exp => exp.key === experienceInfo.key ? experienceInfo : exp))
            } else {
                setExperiences([...experiences, {...experienceInfo, key: uuidv4()}])
            }

            setExperienceInfo({
                company: '',
                position: '',
                startDate: '',
                endDate: '',
                location: '',
                description: '',                
            });
        }
    }



    return(
        <div className={styles.content}>
{/* constructors section */}
            <div className={styles.constructorSection}>
                <GeneralInput
                    userInfo = {userInfo}
                    setUserInfo = {setUserInfo}
                />
                <EducationInput
                    educationInfo={educationInfo} 
                    setEducationInfo={setEducationInfo} 
                    onSave = {onSaveEdu}
                    
                />
                <ExperienceInput
                    experienceInfo = {experienceInfo}
                    setExperienceInfo={setExperienceInfo}
                    onSave = {onSaveExp}
                />
            </div>
{/* Info Section */}
            <div className={styles.infoSection}>
                <PersonalInfo userInfo = {userInfo} />
                {educations.length > 0 && <h1>Education</h1>}
                {educations.map((education) => {
                    return <EducationInfo
                                key = {education.key}
                                educationInfo={education} 
                                onClick = {() => onEditEdu(education.key)} 
                                onDelete = {() => onDeleteEdu(educations, education)}
                            />
                })}

                {experiences.length > 0 && <h1>Experience</h1>}
                {experiences.map(experience => {
                    return <ExperienceInfo
                                key = {experience.key}
                                experienceInfo = {experience}
                                onClick = {() => onEditExp(experience.key)}
                                onDelete = {() => onDeleteExp(experiences, experience)}
                            />
                })}
            </div>
        </div>
    )
}





