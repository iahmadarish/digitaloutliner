// src/components/LocalizedLink.tsx
import { useEffect, useState } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

// Dummy implementation of getUserLocation; replace with real logic as needed
const getUserLocation = async (): Promise<string> => {
  // For demonstration, always return 'BD'
  return 'BD';
};

interface LocalizedLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  children: React.ReactNode;
}

const LocalizedLink = ({ to, children, ...props }: LocalizedLinkProps) => {
  const [localizedTo, setLocalizedTo] = useState<string>(to);

  useEffect(() => {
    const detectLocationAndSetTo = async () => {
      const country = await getUserLocation();
      
      if (country === 'BD') {
        setLocalizedTo(`/bd-${to}`);
      } else {
        setLocalizedTo(`/global-${to}`);
      }
    };

    detectLocationAndSetTo();
  }, [to]);

  return (
    <Link to={localizedTo} {...props}>
      {children}
    </Link>
  );
};

export default LocalizedLink;