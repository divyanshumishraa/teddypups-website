import { useState } from 'react';

const FALLBACK = '/images/puppy-placeholder.svg';

export default function SmartImage({ src, alt = '', className = '', ...props }) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      src={failed ? FALLBACK : src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...props}
    />
  );
}
