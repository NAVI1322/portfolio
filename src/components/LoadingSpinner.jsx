export default function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center py-8 gap-4">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="font-tech text-sm text-white/80">
        🚧 Website Under Construction
      </p>
    </div>
  )
} 