'use client'
export default function InteractiveCard({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-3/12 h-[300px] rounded-lg shadow-lg bg-white drop-shadow-lg mb-4 hover:shadow-2xl hover:bg-neutral-200'>
            {children}
        </div>
    );
}