interface IconProps {
  className?: string;
}

const SQLserverIcon = ({
  className = ""
}: IconProps) => {
  return (
    <span className={className}>SQL Server</span>
  )
}

export default SQLserverIcon;