import React, { useEffect } from 'react';

import Image from 'next/image';

// import dev mods
import Experience from '../components/pages/Experience';
import Connect from '../components/pages/Connect';
import Hobbies from '../components/pages/Hobbies';
import Skills from '../components/pages/Skills';

import styles from '../styles/Home.module.css';

const Home: React.FC = (props: Object) => {
	useEffect(() => {}, []);

	return (
		<div className={styles._container}>
			<div
				className={`${styles._wrapper} ${styles._shared_wrapper}`}
				id='_page1'>
				<div
					className={`${styles._bg_banner} ${styles._section} ${styles._bg_img}`}>
					<div className={`${styles._overview_wrapper}`}>
						<div className={`${styles.overview}`}>
							<div
								className={`${styles._profile}`}
								style={{
									backgroundImage:
										"url('https://media-exp1.licdn.com/dms/image/C4E03AQHrSuKNuSkRcw/profile-displayphoto-shrink_200_200/0/1647721435717?e=1658966400&v=beta&t=KX4Ibf46telNuQ4cCs18UssEiYFlrPB_5UuPysRCB4M')",
								}}></div>
							<div className=''>
								<Image
									src='/assets/morph.png'
									alt='Duncan'
									width='200px'
									height='200px'
								/>
							</div>
							<div className={styles._intro_wrapper}>
								<div className={`${styles._intro}`}>
									<h1 className={`${styles.h1}`}>Dan Kipchirchir</h1>
									<p>Unix enthusiast | Web developer</p>
								</div>
								<div
									className={styles._contact}
									onClick={(e) => {
										window.location.href = 'tel:+254797494509';
									}}>
									Contact
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={`${styles._dark_bg} ${styles._section}`}></div>

				<div
					className={`${styles._bg_banner} ${styles._section} ${styles._bg_img}`}></div>

				<div className={`${styles._dark_bg} ${styles._section}`}></div>
			</div>
			{/* start of section */}
			<div
				className={`${styles._shared_wrapper} ${styles._bg_banner}`}
				id='_page2'>
				<Experience />
			</div>
			{/* end of section 2 */}

			{/* start of section */}
			<div
				className={`${styles._shared_wrapper} ${styles._bg_banner}`}
				id='_page3'>
				<Skills />
			</div>
			{/* end of section 2 */}
			{/* page 3 starts here */}
			<div className={`${styles._shared_wrapper}`} id='_page4'>
				<Connect />
			</div>
			{/* page 3 ends here */}
			{/* page 4 starts here */}
			<div className={`${styles._shared_wrapper}`} id='_page5'>
				<Hobbies />
			</div>
			{/* page 4 ends here */}
		</div>
	);
};

export default Home;
