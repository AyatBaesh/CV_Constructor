import styles from '../../styles/General_Input.module.css'
import Button from '../Button';
export default function EducationInput({educationInfo, setEducationInfo, onSave}){
    const handleSave = (e) => {
        e.preventDefault();
        onSave();
    }

    return(
        <div className={styles.generalDiv}>
            
            <form className={styles.educationForm}>         
            <label>Degree:</label> 
                <input 
                    type = "text"
                    placeholder = "Degree/Field of study"
                    value = {educationInfo.degree}
                    onChange={(e) => setEducationInfo({...educationInfo, degree: e.target.value})}
                />

               <label>School:</label> 
               <input 
                    type = "text"
                    placeholder = "School"
                    value = {educationInfo.school}
                    onChange={(e) => setEducationInfo({...educationInfo, school: e.target.value})}
                />

                <label>Start Date:</label> 
                <input 
                    type = "date"
                    placeholder = "StartDate"
                    value = {educationInfo.startDate}
                    onChange={(e) => setEducationInfo({...educationInfo, startDate: e.target.value})}
                />

                <label>End Date:</label> 
                <input 
                    type = "date"
                    placeholder="End Date"
                    value = {educationInfo.endDate}
                    onChange={(e) => setEducationInfo({...educationInfo, endDate: e.target.value})}
                />

               <label>Location:</label> 
               <input 
                    className = {styles.last}
                    type = "text"
                    placeholder="City, Country"
                    value = {educationInfo.location}
                    onChange={(e) => setEducationInfo({...educationInfo, location: e.target.value})}
                />
                <div className={styles.buttonsDiv}>
                    <Button type = 'save' onClick = {handleSave} />
                </div>
            </form>
        </div>
    )
}

// save OnClick = {educations.push(educationInfo),
// setEducationInfo(school: '', degree: '',startDate: '',endDate: '',location: '',)}
//
        
        
        

