"use client";

import type { BoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";

interface ParallaxContainerProps extends BoxProps {
    children: React.ReactNode;
    speed?: number; // 0.1 to 1, lower = slower parallax
    direction?: "up" | "down";
    offset?: number;
}

export function ParallaxContainer({
    children,
    speed = 0.5,
    direction = "up",
    offset = 0,
    ...props
}: ParallaxContainerProps) {
    const [scrollY, setScrollY] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const translateY = direction === "up"
        ? -(scrollY * speed) + offset
        : (scrollY * speed) + offset;

    return (
        <Box
            ref={containerRef}
            className="parallax-element"
            transform={`translateY(${translateY}px)`}
            transition="none"
            {...props}
        >
            {children}
        </Box>
    );
}

interface ScrollRevealProps extends BoxProps {
    children: React.ReactNode;
    threshold?: number; // 0 to 1
    translateDistance?: number;
}

export function ScrollReveal({
    children,
    threshold = 0.1,
    translateDistance = 50,
    ...props
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );

        const element = elementRef.current;

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold]);

    return (
        <Box
            ref={elementRef}
            opacity={isVisible ? 1 : 0}
            transform={isVisible ? 'translateY(0)' : `translateY(${translateDistance}px)`}
            transition="all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            {...props}
        >
            {children}
        </Box>
    );
}
