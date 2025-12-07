import Image from 'next/image';

interface IPhoneFrameProps {
  src: string;
  alt: string;
  width?: number;
  className?: string;
}

export default function IPhoneFrame({
  src,
  alt,
  width = 280,
  className = '',
}: IPhoneFrameProps) {
  // iPhone aspect ratio is approximately 19.5:9 for modern iPhones
  const height = Math.round(width * 2.16);

  return (
    <div
      className={`iphone-frame ${className}`}
      style={{ width: width + 24, height: height + 24 }}
    >
      <div className="iphone-screen" style={{ width, height }}>
        <div className="iphone-notch" />
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
        <div className="iphone-home-indicator" />
      </div>
    </div>
  );
}
