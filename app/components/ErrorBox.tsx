
export default function ErrorBox({children}: {children: React.ReactNode}) {
  return (
    <div className={`flex w-full h-screen items-center justify-center`}>
      <div className={`text-red-400 text-5xl font-mono`}>
          {children}
      </div>
    </div>
  )
}
