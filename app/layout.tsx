import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Script strategy="beforeInteractive">
          {
            // this will only run if 'window' is removed from Test.tsx's console.log.
            `console.log('beforeInteractive script'); window.__DATA__ = { foo: 'bar' };`
          }
        </Script>
        <Script>
          {
            // this will always run
            `console.log('afterInteractive script', window.__DATA__)`
          }
        </Script>
        {children}
      </body>
    </html>
  )
}
