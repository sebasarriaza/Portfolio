import './globals.css'
import { Inter } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'
import { APP_NAME, APP_DESCRIPTION } from '@/lib/consts'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const inter = Inter({ subsets: ['latin'], variable: '--font-inter', adjustFontFallback: false })


export const metadata = {
	title: APP_NAME,
  description: APP_DESCRIPTION,
}

const RootLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
	return (
		<html lang="en" className={inter.variable}>
			<body className="font-sans ">
				{children}
			</body>
		</html>
	)
}

export default RootLayout