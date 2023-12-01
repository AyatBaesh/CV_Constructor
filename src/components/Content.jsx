import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import GeneralInput from './inputs/General_Input';
import PersonalInfo from './info/Personal_Info';
import EducationInput from './inputs/EducationInput';
import EducationInfo from './info/EducationInfo';
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

    const [educations, setEducations] = useState([])

    function onSave() {
        if(educationInfo.key) {
            //if education exists already - saves updated version with same id
            setEducations(educations.map(edu => edu.key === educationInfo.key ? educationInfo : edu))
        }else{
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
            key: uuidv4(),
        });
    }

    function onEdit(key){
        console.log('key = ' + key)
        console.table( educations)
        const editItem = educations.find((education) => education.key === key);
        setEducationInfo(editItem)
        console.log(editItem)
    }

    return(
        <div className={styles.content}>
            <div className={styles.constructorSection}>
                <GeneralInput
                    userInfo = {userInfo}
                    setUserInfo = {setUserInfo}
                />
                <EducationInput
                    educationInfo={educationInfo} 
                    setEducationInfo={setEducationInfo} 
                    onSave = {onSave}
                    
                />
            </div>

            <div className={styles.infoSection}>
                {/**/}
                <PersonalInfo userInfo = {userInfo} />

                {educations.map((education) => {
                    return <EducationInfo
                                key = {education.key} 
                                educationInfo={education} 
                                onClick = {() => onEdit(education.key)} 
                            />
                })}
                {/* <EducationInfo educationInfo={educationInfo} /> */}
            </div>
        </div>
    )
}





