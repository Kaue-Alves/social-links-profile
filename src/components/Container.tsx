interface ContainerProps {
    children: React.ReactNode;
}

export default function Container({ children } : ContainerProps) {
  return (
    <div className="w-[100%] h-min-[80%] max-w-md bg-cinza-800 rounded-xl p-5 flex flex-col items-center space-y-4">
        {children}
    </div>
  )
}
