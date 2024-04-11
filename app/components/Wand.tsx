export function Wand(): JSX.Element {
	return (
		<div className="-ml-5 relative flex h-[30rem] w-20 min-w-20 items-center overflow-hidden md:w-40 md:min-w-40">
			<div className="origin-top-left translate-x-10 rotate-12 shadow-black/30 shadow-md md:translate-x-28 md:translate-y-16 md:rotate-[30deg]">
				<div className="absolute top-[2rem] left-[1.5rem]">
					<Star />
				</div>
				<div className="absolute top-[3rem] left-[-2rem]">
					<Star />
				</div>
				<div className="absolute top-0 left-[-2.5rem]">
					<Star />
				</div>
				<div className="h-12 w-5 border border-stone-900 bg-gradient-to-r from-stone-100 to-stone-200">
					<span className="sr-only">Wand decoration</span>
				</div>
				<div className="h-64 w-5 border border-stone-900 bg-gradient-to-r from-stone-700 to-stone-900">
					<span className="sr-only">Wand decoration</span>
				</div>
			</div>
		</div>
	);
}

// Hardcopy from https://flowbite.com/docs/components/rating/
const Star = () => (
	<svg
		className="ms-1 h-4 w-4 text-yellow-300"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		viewBox="0 0 22 20"
	>
		<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
	</svg>
);
