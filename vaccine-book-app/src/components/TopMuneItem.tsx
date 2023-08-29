import Link from "next/link";

export default function TopMenuItem({ title, pageRef }: { title: string, pageRef: string }) {
    return (
        <Link href={pageRef} className="w-24 text-center mt-auto mb-auto font-serif text-base text-stone-900 mx-8 bg-orange-300 rounded text-violet-950">
            {title}
        </Link>
    );
}