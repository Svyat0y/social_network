import React from 'react';
import style from './ProfileHeader.module.css';
import {faFacebookSquare, faTwitterSquare, faInstagram, faVk, faYoutube, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import images from "../../../../assets/images/images";

const ProfileHeader = (props) => {

	return (
		<div className={style.profileHeader_wrapper}>

			<div className={style.img_wrapper}>
				<img src={props.profile.photos.large ? props.profile.photos.large : images.imgProfileNoFound} alt="avatar"/>
			</div>

			<div className={style.profileHeader_info}>

				<div className={style.profileHeader_top_info}>
					<h1>{props.profile.fullName}</h1>
					<span className={style.lfj_title}>Looking for a job: <span>{props.profile.lookingForAJob ? 'yes' : 'no'}</span></span>
					<span className={style.lfj_desc}>Job description: <span>{props.profile.lookingForAJobDescription}</span></span>
				</div>

				<div className={style.about_info_wr}>

					<h5>About Me: </h5>
					<p>{props.profile.aboutMe ? props.profile.aboutMe : 'this user did not leave a message about himself'}</p>

					<h5 className={style.contacts_wr}>Contacts:</h5>
					<ul className={style.social_icons}>
						<li>
							<a target="_blank"
							   title={'GitHub'}
							   href={!props.profile.contacts.github
								   ? 'https://twitter.com'
								   : props.profile.contacts.github}>
								<FontAwesomeIcon icon={faGithubSquare}/>
							</a>
						</li>
						<li>
							<a target="_blank"
							   title={'Facebook'}
							   href={!props.profile.contacts.facebook
								   ? 'https://facebook.com'
								   : props.profile.contacts.facebook}>
								<FontAwesomeIcon icon={faFacebookSquare}/>
							</a>
						</li>
						<li>
							<a target="_blank"
							   title={'Instagram'}
							   href={!props.profile.contacts.instagram
								   ? 'https://instagram.com'
								   : props.profile.contacts.instagram}>
								<FontAwesomeIcon icon={faInstagram}/>
							</a>
						</li>
						<li>
							<a target="_blank"
							   title={'Vkontakte'}
							   href={!props.profile.contacts.vk
								   ? 'https://vk.com'
								   : props.profile.contacts.vk}>
								<FontAwesomeIcon icon={faVk}/>
							</a>
						</li>
						<li>
							<a target="_blank"
							   title={'Youtube'}
							   href={!props.profile.contacts.youtube
								   ? 'https://youtube.com'
								   : props.profile.contacts.youtube}>
								<FontAwesomeIcon icon={faYoutube}/>
							</a>
						</li>
						<li>
							<a target="_blank"
							   title={'Twitter'}
							   href={!props.profile.contacts.twitter
								   ? 'https://twitter.com'
								   : props.profile.contacts.twitter}>
								<FontAwesomeIcon icon={faTwitterSquare}/>
							</a>
						</li>

						{!props.profile.contacts.website
							? null
							: <li><a target="_blank"
									 title={'Website'}
									 href={props.profile.contacts.website}>
								<FontAwesomeIcon icon={faLink}/></a></li>}

						{!props.profile.contacts.mainLink
							? null
							: <li><a target="_blank"
									 title={'Mainlink'}
									 href={props.profile.contacts.mainLink}>
								<FontAwesomeIcon icon={faLink}/></a></li>}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ProfileHeader;