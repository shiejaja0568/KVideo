'use client';

import Link from 'next/link';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { siteConfig } from '@/lib/config/site-config';

interface NavbarProps {
    onReset: () => void;
    isPremiumMode?: boolean;
}

export function Navbar({ onReset, isPremiumMode = false }: NavbarProps) {
    return (
        <nav className="sticky top-0 z-[2000] pt-4 pb-2" style={{
            transform: 'translate3d(0, 0, 0)',
            willChange: 'transform'
        }}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-[var(--glass-bg)] border border-[var(--glass-border)] shadow-[var(--shadow-sm)] px-3 sm:px-6 py-2 sm:py-4 rounded-[var(--radius-2xl)]" style={{
                    transform: 'translate3d(0, 0, 0)'
                }}>
                    <div className="flex items-center justify-between gap-2 sm:gap-4">
                        <Link
                            href={isPremiumMode ? '/premium' : '/'}
                            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity cursor-pointer min-w-0"
                            onClick={onReset}
                            data-focusable
                        >
                            <div className="flex flex-col min-w-0">
                                <h1 className="text-lg sm:text-2xl font-bold text-[var(--text-color)] truncate">{siteConfig.name}</h1>
                            </div>
                        </Link>

                        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                            <ThemeSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
