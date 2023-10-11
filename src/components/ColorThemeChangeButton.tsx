import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import ImageDarkThemeChangeButton from './ImageDarkThemeChangeButton';
import ImageLightThemeChangeButton from './ImageLightThemeChangeButton';

export default function ColorChangeButton() {
	const { theme, setTheme, systemTheme } = useTheme();
	const [icon, setIcon] = useState<React.ReactElement>(
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			{/* <path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/> */}
		</svg>,
	);
	// console.log(useTheme());

	useEffect(() => {
		// Atualiza o ícone com base no tema

		if (theme === 'system' && typeof systemTheme === 'string') {
			console.log('aqui');

			setTheme(systemTheme);
		}
		setIcon(
			theme === 'dark' ? (
				<ImageDarkThemeChangeButton />
			) : (
				<ImageLightThemeChangeButton />
			),
		);
	}, [theme, systemTheme, setTheme]);

	return (
		<>
			<button
				className="p-2 rounded-full bottom-[15px] right-[15px] absolute bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-white"
				onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			>
				{icon}
			</button>
		</>
	);
}
