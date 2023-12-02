import styles from '../../styles/EducationInfo.module.css';
import Button from '../Button';
export default function EducationInfo({educationInfo, onClick, onDelete}){
    const handleDelete = (e) => {
        e.preventDefault();
        onDelete(educationInfo)
    }
        return (    
            <>
                <div className={styles.infoDiv}>
                    <table className={styles.infoTable} onClick = {onClick}>
                        <thead>
                            <tr>
                                <th className={styles.header} colSpan={2}><h2>{educationInfo.degree}</h2></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className = {styles.subHeader}>{educationInfo.school}</td>
                                <td className={styles.second}>{educationInfo.startDate}  {educationInfo.endDate}</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td className={styles.second}>{educationInfo.location}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Button type = 'delete' onClick = {handleDelete} />
                </div>

            </>
        )
    
 }
