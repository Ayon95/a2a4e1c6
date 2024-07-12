import { BsFillTelephoneFill, BsPersonCircle } from 'react-icons/bs';
import { FaVoicemail } from 'react-icons/fa';
import { IoIosKeypad } from 'react-icons/io';

import NavLink from './nav-link';

const links = [
	{
		text: 'Calls',
		icon: BsFillTelephoneFill,
		href: '/calls',
	},

	{
		text: 'Contacts',
		icon: BsPersonCircle,
		href: '/contacts',
	},

	{
		text: 'Keypad',
		icon: IoIosKeypad,
		href: '/keypad',
	},

	{
		text: 'Voicemail',
		icon: FaVoicemail,
		href: '/voicemail',
	},
];

function Navbar() {
	return (
		<nav className="border-t border-t-primary/20 p-6">
			<ul className="flex justify-between gap-1">
				{links.map(link => (
					<li key={link.text}>
						<NavLink link={link} />
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navbar;
