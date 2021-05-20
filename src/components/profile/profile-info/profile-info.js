import React from 'react';
import s from './profile-info.module.css';
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return(
        <div className={s.descriptionBlock}>
            <div>
                <img className="content-bg" src="https://www.rewizor.ru/files/1960668x8w.jpg" alt="content-img"/>
            </div>
            <div>

                <img src={props.profile.photos.large} alt={props.profile.fullName}/>
                ava + desk
            </div>
        </div>
    )
};

export default ProfileInfo;
