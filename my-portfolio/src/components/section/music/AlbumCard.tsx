import type { SpringOptions } from "framer-motion";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "../../../styles/section/music/AlbumCard.css";

type Props = {
    title: string;
    image: string;
    caption?: string;
    containerHeight?: React.CSSProperties["height"];
    containerWidth?: React.CSSProperties["width"];
    imageHeight?: React.CSSProperties["height"];
    imageWidth?: React.CSSProperties["width"];
    scaleOnHover?: number;
    rotateAmplitude?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    overlayContent?: React.ReactNode;
    displayOverlayContent?: boolean;
    onClick?: (rect: DOMRect) => void;
};

const springValues: SpringOptions = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

const AlbumCard: React.FC<Props> = ({
                                        title,
                                        image,
                                        caption = "",
                                        containerHeight = "200px",
                                        containerWidth = "200px",
                                        imageHeight = "200px",
                                        imageWidth = "200px",
                                        scaleOnHover = 1.1,
                                        rotateAmplitude = 14,
                                        showMobileWarning = true,
                                        showTooltip = true,
                                        overlayContent = null,
                                        displayOverlayContent = false,
                                        onClick,
                                    }) => {
    const ref = useRef<HTMLElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1,
    });

    const [lastY, setLastY] = useState<number>(0);

    const handleClick = () => {
        if(ref.current) {
            const rect = ref.current.getBoundingClientRect();
            onClick?.(rect);
        }
    }

    function handleMouse(e: React.MouseEvent<HTMLElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateX.set(rotationX);
        rotateY.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scale.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        rotateX.set(0);
        rotateY.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <figure
            ref={ref}
            className="album-card-figure"
            style={{
                height: containerHeight,
                width: containerWidth,
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            {showMobileWarning && (
                <div className="album-card-mobile-alert">
                    This effect is not optimized for mobile. Check on desktop.
                </div>
            )}

            <motion.div
                className="album-card-inner"
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    rotateX,
                    rotateY,
                    scale,
                }}
            >
                <motion.img
                    src={image}
                    alt={title}
                    className="album-card-img"
                    style={{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                />

                {displayOverlayContent && overlayContent && (
                    <motion.div className="album-card-overlay">{overlayContent}</motion.div>
                )}
            </motion.div>

            {showTooltip && (
                <motion.figcaption
                    className="album-card-caption"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate: rotateFigcaption,
                    }}
                >
                    {caption}
                </motion.figcaption>
            )}
        </figure>
    );
};

export default AlbumCard;