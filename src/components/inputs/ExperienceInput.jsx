import styles from '../../styles/General_Input.module.css';
import Button from '../Button';
export default function ExperienceInput({experienceInfo, setExperienceInfo, onSave}){
    const handleSave = (e) => {
        e.preventDefault();
        onSave();
    }

    return(
        <div className={styles.generalDiv}>

            <form className={styles.experienceForm}>         
            <label>Position:</label> 
                <input 
                    type = "text"
                    placeholder = "Position"
                    value = {experienceInfo.position}
                    onChange={(e) => setExperienceInfo({...experienceInfo, position: e.target.value})}
                />

               <label>Company:</label> 
               <input 
                    type = "text"
                    placeholder = "Company"
                    value = {experienceInfo.company}
                    onChange={(e) => setExperienceInfo({...experienceInfo, company: e.target.value})}
                />

                <label>Start Date:</label> 
                <input 
                    type = "date"
                    placeholder = "StartDate"
                    value = {experienceInfo.startDate}
                    onChange={(e) => setExperienceInfo({...experienceInfo, startDate: e.target.value})}
                />

                <label>End Date:</label> 
                <input 
                    type = "date"
                    placeholder="End Date"
                    value = {experienceInfo.endDate}
                    onChange={(e) => setExperienceInfo({...experienceInfo, endDate: e.target.value})}
                />

               <label>Location:</label> 
               <input 
                    className = {styles.last}
                    type = "text"
                    placeholder="City, Country"
                    value = {experienceInfo.location}
                    onChange={(e) => setExperienceInfo({...experienceInfo, location: e.target.value})}
                />
                
               <label>Description:</label> 
               <input 
                    className = {styles.last}
                    type = "text"
                    placeholder="Description"
                    value = {experienceInfo.description}
                    onChange={(e) => setExperienceInfo({...experienceInfo, description: e.target.value})}
                />
                <div className={styles.buttonsDiv}>
                    <Button type = 'save' onClick = {handleSave} />
                </div>
            </form>
        </div>
    )
}