import styles from '../shared-css/Layout.module.css';

const Menu = (props) => {
	return (
		<div
			className={styles._menu}
			onBlur={(e) => {
				alert('Hello there');
			}}>
			<div
				className={styles._link}
				onClick={(e) => {
					const targetEle = document.querySelector('#_page1');
					props.handleHumbuggerOpen();
					targetEle.scrollIntoView(false);
				}}>
				Home
			</div>

			<div
				className={styles._link}
				onClick={(e) => {
					const targetEle = document.querySelector('#_page2');
					props.handleHumbuggerOpen();
					targetEle.scrollIntoView(false);
				}}>
				Experience
			</div>

			<div
				className={styles._link}
				onClick={(e) => {
					const targetEle = document.querySelector('#_page3');
					props.handleHumbuggerOpen();
					targetEle.scrollIntoView(false);
				}}>
				Skills
			</div>

			<div
				className={styles._link}
				onClick={(e) => {
					const targetEle = document.querySelector('#_page4');
					props.handleHumbuggerOpen();
					targetEle.scrollIntoView(false);
				}}>
				Connect
			</div>
			<div
				className={styles._link}
				onClick={(e) => {
					const targetEle = document.querySelector('#_page5');
					props.handleHumbuggerOpen();
					targetEle.scrollIntoView(false);
				}}>
				Hobbies
			</div>

			<div
				className={styles._link}
				onClick={(e) => {
					const targetEle = document.querySelector('#_page5');
					props.handleHumbuggerOpen();
					targetEle.scrollIntoView(false);
				}}>
				Play A TicTacToe
			</div>
		</div>
	);
};

export default Menu;
