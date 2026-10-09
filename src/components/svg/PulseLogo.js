import Link from 'next/link';
import Image from 'next/image';

export default function PulseLogo({ className = "" }) {
  return (
    <Link href="/" aria-label="AITechPulze home" className={`inline-flex items-center gap-3 ${className}`}>
      <Image src="/favicon.png" alt="AITechPulze Logo" width={32} height={32} className="h-8 w-8 object-contain" />
      <span className="font-[family-name:var(--font-grotesk)] text-lg font-bold tracking-tight text-white">
        AITech<span className="text-gradient-flow">Pulze</span>
      </span>
    </Link>
  );
}
