import {MdOutlineDone} from 'react-icons/md'

const SavePopUp = () => {
    return (
        <div className="savePopUp">
            <p>changes saved!</p>
            <div className="icon">
                <MdOutlineDone size={30}/>
            </div>
        </div>
    )
}

export default SavePopUp