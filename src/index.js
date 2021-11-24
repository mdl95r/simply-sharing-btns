import { sharingBtns } from './plugin/js/sharingBtns';
import './plugin/styles/styles.scss';
import './plugin/fonts/icons.woff';

new sharingBtns('#sharing-btns', {
	socials: 'vk, facebook, twitter, reddit',
	position: 'vertical',
	fixed: true
})