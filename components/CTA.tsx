import Link from "next/link";

interface CTAProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
}

export default function CTA({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
}: CTAProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl",
    secondary:
      "bg-white text-primary-600 hover:bg-gray-50 focus:ring-primary-500 border-2 border-primary-600 shadow-md hover:shadow-lg",
    outline:
      "bg-transparent text-primary-600 hover:bg-primary-50 focus:ring-primary-500 border-2 border-primary-600",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

