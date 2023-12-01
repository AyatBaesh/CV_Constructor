import React, { useState } from 'react';
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
    })
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
                />
            </div>

            <div className={styles.infoSection}>
                <PersonalInfo userInfo = {userInfo} />
                <EducationInfo educationInfo={educationInfo} />
            </div>
        </div>
    )
}





