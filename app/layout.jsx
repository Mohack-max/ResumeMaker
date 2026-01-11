import './resume-builder.css'

export const metadata = {
  title: 'Resume Builder',
  description: 'Create a simple resume with live preview and print to PDF',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
