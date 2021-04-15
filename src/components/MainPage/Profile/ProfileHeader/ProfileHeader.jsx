import React from 'react';
import style from './ProfileHeader.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import { faFacebookSquare, faTwitterSquare, faInstagram, faVk, faYoutube, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ProfileHeader = (props) => {

	if (!props.profile) {
		return (
			<div className={style.preloader_wr}>
				<Preloader/>
			</div>
		)
	}

	console.log(props.profile.contacts.youtube)

	return (
		<div className={style.profileHeader_wrapper}>

			<div className={style.img_wrapper}>
				<img src={props.profile.photos.large} alt="avatar"/>
			</div>

			<div className={style.profileHeader_info}>

				<div className={style.profileHeader_top_info}>
					<h1>{props.profile.fullName}</h1>
					<span className={style.lfj_title}>looking for a job: <span>{props.profile.lookingForAJob ? 'yes' : 'no'}</span></span>
					<span className={style.lfj_desc}>job description: <span>{props.profile.lookingForAJobDescription}</span></span>
				</div>

				<div className={style.about_info_wr}>

					<h5>About Me: </h5>
					<p>{props.profile.aboutMe}</p>

					<h5 className={style.contacts_wr}>Contacts:</h5>
					<span className={style.social_icons}>
						<a target="blank"
						   title={'GitHub'}
						   href={!props.profile.contacts.github
							   ? 'https://github.com'
							   : `https://${props.profile.contacts.github}`}>
							<FontAwesomeIcon icon={faGithubSquare}/>
						</a>
						<a target="blank"
						   title={'facebook'}
						   href={!props.profile.contacts.facebook
							   ? 'https://facebook.com'
							   : `https://${props.profile.contacts.facebook}`}>
							<FontAwesomeIcon icon={faFacebookSquare}/>
						</a>
						<a target="blank"
						   title={'instagram'}
						   href={!props.profile.contacts.instagram
							   ? 'https://instagram.com'
							   : `https://${props.profile.contacts.instagram}`}>
							<FontAwesomeIcon icon={faInstagram}/>
						</a>
						<a target="blank"
						   title={'vkontakte'}
						   href={!props.profile.contacts.vk
							   ? 'https://vkontakte.com'
							   : `https://${props.profile.contacts.vk}`}>
							<FontAwesomeIcon icon={faVk}/>
						</a>
						<a target="blank"
						   title={'youtube'}
						   href={!props.profile.contacts.youtube
							   ? 'https://youtube.com'
							   : `https://${props.profile.contacts.youtube}`}>
							<FontAwesomeIcon icon={faYoutube}/>
						</a>
						<a target="blank"
						   title={'twitter'}
						   href={!props.profile.contacts.twitter
							   ? 'https://twitter.com'
							   : `https://${props.profile.contacts.twitter}`}>
							<FontAwesomeIcon icon={faTwitterSquare}/>
						</a>
						{!props.profile.contacts.website
							? null
							: <a target="blank"
								 title={'mainlink'}
								 href={'https://' + props.profile.contacts.website}>
								<FontAwesomeIcon icon={faLink}/></a>}
						{!props.profile.contacts.mainLink
							? null
							: <a target="blank"
								 title={'mainlink'}
								 href={'https://' + props.profile.contacts.mainLink}>
								<FontAwesomeIcon icon={faLink}/></a>}
					</span>

				</div>

			</div>
		</div>
	);
}

export default ProfileHeader;