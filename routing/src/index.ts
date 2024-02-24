
export interface Env {}

export default {
	async fetch(request: Request, env: Env, ctx: any): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		if (request.method.toUpperCase() === 'GET') {
			return Response.json({
				msg: 'You sent a GET request',
			});
		} else {
			return Response.json({
				msg: 'Not a GET request',
			});
		}
	},
};
