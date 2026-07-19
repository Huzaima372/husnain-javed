import profile from '../data/profile.json'

export default function Logo({ className = '' }) {
  return (
    <div className={`relative rounded-lg overflow-hidden bbox ${className}`}>
      <img
        src={profile.photoSmall}
        alt={profile.fullName}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
