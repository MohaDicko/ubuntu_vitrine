
import { cn } from "@/lib/utils"

export default function Logo({ className, iconOnly = false }: { className?: string, iconOnly?: boolean }) {
    return (
        <div className={cn("flex items-center gap-3 select-none", className)}>
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 shadow-lg shadow-blue-500/20">
                {/* Logo SVG Minimaliste (Coeur + Croix + Cercle Ubuntu) */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M12 7v5" />
                    <path d="M9.5 9.5h5" />
                </svg>
            </div>
            {!iconOnly && (
                <div className="flex flex-col">
                    <span className="text-xl font-bold leading-none tracking-tight text-slate-800">
                        Cabinet <span className="text-sky-600">Ubuntu</span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500">Santé & Humanité</span>
                </div>
            )}
        </div>
    )
}
