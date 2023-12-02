import styles from '../../styles/EducationInfo.module.css'
export default function ExperienceInfo({experienceInfo, onClick, onDelete}){
    const handleDelete = (e) => {
        e.preventDefault();
        onDelete(experienceInfo);
    }
        return (    
            <>
                <div className={styles.infoDiv}>
                    <table className={styles.infoTable} onClick = {onClick}>
                        <thead>
                            <tr>
                                <th className={styles.header} colSpan={2}><h2>{experienceInfo.position}</h2></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className = {styles.subHeader}>{experienceInfo.company}</td>
                                <td className={styles.second}>{experienceInfo.startDate}  {experienceInfo.endDate}</td>
                            </tr>
                            <tr>
                                <td>{experienceInfo.description}</td>
                                <td className={styles.second}>{experienceInfo.location}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick = {handleDelete}>Delete</button>
                </div>

            </>
        )
    
 }
