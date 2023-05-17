export const GET = async (request: Request) => {
	const { searchParams } = new URL(request.url);
	const color = searchParams.get("c");

	return new Response(
		`
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" viewBox="0 0 20 4">
		<path fill="none" stroke="#${color}" stroke-width="2" class="squiggle" d="M0,3.5 c 5,0, 5, -3, 10, -3 s 5,3, 10, 3 c 5,0, 5, -3, 10, -3 s 5,3, 10, 3" />
		<style type="text/css">
			.squiggle {
				animation: shift 0.3s linear infinite;
			}
			@keyframes shift {
				from {
					transform: translateX(0);
				}
				to {
					transform: translateX(-20px);
				}
			}
			@media (prefers-reduced-motion: reduce) {
			.squiggle {
				animation: none;
			}
			}
		</style>
	</svg>
	`,
		{
			status: 200,
			headers: {
				"Content-Type": "image/svg+xml",
				"Cache-Control":
					"public, immutable, no-transform, s-maxage=31536000, max-age=31536000",
			},
		}
	);
};
