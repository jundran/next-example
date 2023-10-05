"use client"
import style from './themeToggle.module.css'
import useTheme from '@/context/themeContext'
import { Noto_Color_Emoji } from 'next/font/google'
const noto = Noto_Color_Emoji({ weight: ['400'], subsets: ['emoji'] })

export default function ThemeToggle () {
  const { toggle, mode } = useTheme()
  return (
    <button className={style.container} onClick={toggle}>
      <div className={`${style.icon} ${noto.className}`}>🔆</div>
      <div className={`${style.icon} ${noto.className}`}>🌙</div>
      <div
        className={style.ball}
        style={mode === 'dark' ? { left: '2px' } : { right: '2px' }}
      />
    </button>
  )
}
