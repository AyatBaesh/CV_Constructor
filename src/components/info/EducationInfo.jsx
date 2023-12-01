import styles from '../../styles/EducationInfo.module.css'

export default function EducationInfo({educationInfo}){
    return (
        <>
            <div className={styles.educationInfoDiv}>
                <ul className={styles.educationInfoList}>
                    {Object.keys(educationInfo).map((key) => {
                        return(<li key = {key}>{educationInfo[key]}</li>)
                    })}

                </ul>
            </div>
        </>
    )
}