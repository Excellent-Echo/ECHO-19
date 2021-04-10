import { useState, useEffect } from 'react'

function useDarkMode() {
    const [theme, setTheme] = useState('dark')


    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }


    const buttonTheme = () => {
        theme === 'dark' ? setMode('light') : setMode('dark');
    }



    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('dark');

    }, [])


    return [theme, buttonTheme]
}

export default useDarkMode
