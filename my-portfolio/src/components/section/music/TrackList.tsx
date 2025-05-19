﻿import React, { useRef, useState, useEffect, UIEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Track } from "./Track";
import "../../../styles/section/music/TrackList.css";

interface TrackListProps {
    items: Track[];
    onItemSelect?: (track: Track, index: number) => void;
    showGradients?: boolean;
    enableArrowNavigation?: boolean;
    className?: string;
    itemClassName?: string;
    displayScrollbar?: boolean;
    initialSelectedIndex?: number;
    maxVisibleItems?: number;
}

interface AnimatedItemProps {
    children: React.ReactNode;
    delay?: number;
    index: number;
    onMouseEnter: () => void;
    onClick?: () => void;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({
                                                       children,
                                                       delay = 0,
                                                       index,
                                                       onMouseEnter,
                                                       onClick,
                                                   }) => {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { amount: 0.5, once: false });

    return (
        <motion.div
            ref={ref}
            data-index={index}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2, delay }}
            style={{ marginBottom: "1rem", cursor: "pointer" }}
        >
            {children}
        </motion.div>
    );
};

const TrackList: React.FC<TrackListProps> = ({
                                                 items,
                                                 onItemSelect,
                                                 showGradients = true,
                                                 enableArrowNavigation = true,
                                                 className = "",
                                                 itemClassName = "",
                                                 displayScrollbar = true,
                                                 initialSelectedIndex = -1,
                                                 maxVisibleItems = 10,
                                             }) => {
    const listRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectedIndex);
    const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
    const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
    const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);
    const visibleItems = maxVisibleItems ? items.slice(0, maxVisibleItems) : items;

    const handleScroll = (event: UIEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;
        const { scrollTop, scrollHeight, clientHeight } = target;
        setTopGradientOpacity(Math.min(scrollTop / 50, 1));
        const bottomDistance = scrollHeight - (scrollTop + clientHeight);
        setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
    };

    useEffect(() => {
        if (!enableArrowNavigation) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "ArrowDown" || (event.key === "Tab" && !event.shiftKey)) {
                event.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
            } else if (event.key === "ArrowUp" || (event.key === "Tab" && event.shiftKey)) {
                event.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex((prev) => Math.max(prev - 1, 0));
            } else if (event.key === "Enter") {
                if (selectedIndex >= 0 && selectedIndex < items.length && onItemSelect) {
                    event.preventDefault();
                    onItemSelect(items[selectedIndex], selectedIndex);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

    useEffect(() => {
        if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;

        const container = listRef.current;
        const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement | null;

        if (selectedItem) {
            const extraMargin = 50;
            const containerScrollTop = container.scrollTop;
            const containerHeight = container.clientHeight;
            const itemTop = selectedItem.offsetTop;
            const itemBottom = itemTop + selectedItem.offsetHeight;

            if (itemTop < containerScrollTop + extraMargin) {
                container.scrollTo({ top: itemTop - extraMargin, behavior: "smooth" });
            } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
                container.scrollTo({ top: itemBottom - containerHeight + extraMargin, behavior: "smooth" });
            }
        }

        setKeyboardNav(false);
    }, [selectedIndex, keyboardNav]);

    return (
        <div className={`scroll-list-container ${className}`}>
            <div
                ref={listRef}
                className={`scroll-list ${!displayScrollbar ? "no-scrollbar" : ""}`}
                onScroll={handleScroll}
            >
                {visibleItems.map((track, index) => (
                    <AnimatedItem
                        key={index}
                        delay={0.1}
                        index={index}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onClick={() => {
                            setSelectedIndex(index);
                            if (onItemSelect) onItemSelect(track, index);
                        }}
                    >
                        <div className={`item ${selectedIndex === index ? "selected" : ""} ${itemClassName}`}>
                            <p className="item-text">{track.title}</p>
                            {/* 必要ならアーティスト名なども表示可能 */}
                            {/* <p className="item-subtext">{track.artist}</p> */}
                        </div>
                    </AnimatedItem>
                ))}
            </div>

            {showGradients && (
                <>
                    <div className="top-gradient" style={{ opacity: topGradientOpacity }} />
                    <div className="bottom-gradient" style={{ opacity: bottomGradientOpacity }} />
                </>
            )}
        </div>
    );
};

export default TrackList;
