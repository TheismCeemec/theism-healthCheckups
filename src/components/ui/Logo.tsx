interface LogoProps {
  variant?: "default" | "white"
}

const Logo = ({ variant = "default" }: LogoProps) => {
  const textColor = variant === "white" ? "text-white" : "text-blue-600"

  return (
    <div className="flex items-center">
      <span className={`font-bold text-2xl ${textColor}`}>
        Call<span className="text-orange-500">Health</span>
      </span>
    </div>
  )
}

export default Logo
