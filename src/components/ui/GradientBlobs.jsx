export default function GradientBlobs({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="glow-cyan absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full opacity-40 blur-[110px] animate-float-slow" />
      <div className="glow-violet absolute top-1/3 -left-32 h-[26rem] w-[26rem] rounded-full opacity-20 blur-[100px] animate-float" />
      <div className="glow-coral absolute bottom-0 -right-24 h-[24rem] w-[24rem] rounded-full opacity-20 blur-[100px] animate-float-slow" />
      <div className="grid-fade absolute inset-0" />
    </div>
  )
}
