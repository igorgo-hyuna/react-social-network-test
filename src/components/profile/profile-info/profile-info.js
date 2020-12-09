import React from 'react';
import s from './profile-info.module.css';

const ProfileInfo = (props) => {
    return(
        <div className={s.descriptionBlock}>
            <div>
                <img className="content-bg" src="https://wallpapershome.ru/images/pages/pic_v/15779.jpg" alt="content-img"/>
            </div>
            <div>
                ava + desk
            </div>
        </div>
    )
}

export default ProfileInfo;
