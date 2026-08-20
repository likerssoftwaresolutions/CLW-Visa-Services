export default function Logo({ scale = 1, light = false }) {
  return (
    <div
      className="flex items-center select-none"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'left center',
      }}
    >
      <img
        src="/clw-visa-services-logo.webp"
        alt="CLW Visa Services"
        className="h-12 w-auto object-contain sm:h-14"
      />
    </div>
  )
}