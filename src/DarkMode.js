import React, { useState, useEffect } from 'react';

const getUserTheme = () => {
	const theme = localStorage.getItem('theme') || 'dark';
	return theme === 'dark' ? true : false;
};

const DarkModeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(getUserTheme());
	
	useEffect(() => {
		document.documentElement.className = `${isDarkMode && 'dark'}`;
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
	}, [isDarkMode])
	
	return (
		<div className='toggle-btn'>
            <input type="checkbox"  id="darkToggler" checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)}>
            </input>
		</div>
	)
}

export default DarkModeToggle