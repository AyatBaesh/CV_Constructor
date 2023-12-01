import styles from '../../styles/EducationInfo.module.css'

export default function EducationInfo({educationInfo, educations, onClick}){
    // if(notEmpty(educationInfo)){
    if(educations){
        return (    
                    <>
                        <h1>Educations</h1>
                        <div className={styles.educationInfoDiv} onClick = {onClick}>
                            <h2>{educationInfo.degree}</h2>
                            <table className={styles.educationInfoTable}>
                                <tbody>
                                    <tr>
                                        <td className = {styles.school}>{educationInfo.school}</td>
                                        <td className={styles.second}>{educationInfo.startDate} - {educationInfo.endDate}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.second}>{educationInfo.location}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
            )
    
    } else {
        return null;
    }
 }

// function notEmpty(educationInfo){
//     return Object.values(educationInfo).some(value => !!value)
// }