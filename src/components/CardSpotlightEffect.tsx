import type { JSX } from "preact"
import clsx from "clsx"
import { useState, useRef } from "preact/hooks"

export const CardSpotlightEffect = ({
	children,
	className
}: {
	children: JSX.Element
	className?: string
}) => {
	const divRef = useRef<HTMLDivElement>(null)
	const [isFocused, setIsFocused] = useState(false)
	const [position, setPosition] = useState({ x: 0, y: 0 })
	const [opacity, setOpacity] = useState(0)

	const handleMouseMove = (e: MouseEvent) => {
		if (!divRef.current || isFocused) return

		const div = divRef.current
		const rect = div.getBoundingClientRect()

		setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
	}

	const handleFocus = () => {
		setIsFocused(true)
		setOpacity(1)
	}

	const handleBlur = () => {
		setIsFocused(false)
		setOpacity(0)
	}

	const handleMouseEnter = () => {
		setOpacity(1)
	}

	const handleMouseLeave = () => {
		setOpacity(0)
	}

	return (
		<div
			ref={divRef}
			onMouseMove={handleMouseMove}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={clsx(
				"relative overflow-hidden rounded-[20px] border border-slate-200 bg-[#EEEEEE] bg-gradient-to-r p-6 px-8 py-16 shadow-2xl dark:border-slate-800 dark:from-slate-900 dark:to-slate-950",
				className
			)}
		>
			<div
				className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
				style={{
					opacity,
					background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.06), transparent 40%)`
				}}
			/>
			{children}
		</div>
	)
}
