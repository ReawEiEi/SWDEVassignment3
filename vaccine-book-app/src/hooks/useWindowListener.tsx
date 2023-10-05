'use client'
import { useEffect } from "react";

export default function useWindowListener(event: string, listener: EventListener) {
    useEffect(() => {
        window.addEventListener(event, listener)
        return () => {
            window.removeEventListener(event, listener)
        }
    }, [event, listener])
}