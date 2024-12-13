import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { Demo } from './Demo/index'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<Demo />)
