import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
const info= {
    fullName:'',
    bio:'',
    profession:''

}

const Profile = (props) => {


    
   
    const handleName = (name) => {
        
        name.preventDefault();
        alert(props.fullName);
        
      };
      
return(
    <>
<div className='myStyle'>
<h1 >{props.fullName}</h1>
<h2 >{props.bio}</h2>
<h3 >{props.profession}</h3>
{props.children}
</div>

<button  onClick={() => handleName()}>Click Here to alert fullName</button>

    </>
)
}

Profile.defaultProps = {
    fullName: " Default name " ,
     bio:" Default bio ", 
     profession: " Default profession ",
     image: " Default image ",
     handleName : " Default props "

};

info.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession : PropTypes.string,
    handleName : PropTypes.func,
   
};
export default Profile;