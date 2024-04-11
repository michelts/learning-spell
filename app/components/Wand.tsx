export function Wand(): JSX.Element {
	return (
		<div className="-ml-5 absolute flex h-[30rem] w-40 items-center overflow-hidden">
			<div className="absolute top-[9rem] left-[4rem]">
				<Star />
			</div>
			<div className="absolute top-[8rem] left-[8rem]">
				<Star />
			</div>
			<div className="absolute top-[14rem] left-[6rem]">
				<Star />
			</div>
			<div className="origin-top-left translate-x-28 translate-y-16 rotate-[30deg] shadow-[0_0_60px_0_rgba(0,0,0,0.2)]">
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
