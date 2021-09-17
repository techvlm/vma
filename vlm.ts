// deno-lint-ignore-file
import {Application,Router,send,magenta,green,dim ,bold,cyan} from './vcontrol/vmodels/vlinks.ts';
import {paramsapi} from "./vcontrol/vmodels/api.ts";
// import {config} from "./vcontrol/vmodels/vlinks.ts";
import { vmasignup, vmalogin } from './vcontrol/vlmrouter.ts';
import {
	vmaApp,
	vmadash,
	vmalog,
	vmalogs,
	vmasign,
} from "./vcontrol/vmodels/vlmhandler.ts"

const vlm = new Application();
const vlmrouter = new Router();

// https://www.youtube.com/watch?v=wK8sx2vyMJ0 
vlm.use(vlmrouter.routes());
vlm.use(vlmrouter.allowedMethods());

vlmrouter
.get('/', vmaApp)
.get('/vma@dash', vmadash)
.get('/vma@login', vmalog)
.get('/vma@signup', vmasign)
.get('/vma@signup', vmalogs)
.post('/vma@signup',vmasignup)
.post('/vma@login',vmalogin)

.get('/js/:file', async(ctx:any)=>{
	const vfile = ctx.params.file
    await send(ctx, ctx.request.url.pathname, {
		root: `${Deno.cwd()}`,
		index: vfile,
	  });
})
.get('/css/:file', async(ctx:any)=>{
	const vfile = ctx.params.file
    await send(ctx, ctx.request.url.pathname, {
		root: `${Deno.cwd()}`,
		index: vfile,
	  });
})
.get('/images/:file', async(ctx:any)=>{
	const vfile = ctx.params.file
    await send(ctx, ctx.request.url.pathname, {
		root: `${Deno.cwd()}`,
		index: vfile,
	  });
})
.get('/fav/:file', async(ctx:any)=>{
	const vfile = ctx.params.file
    await send(ctx, ctx.request.url.pathname, {
		root: `${Deno.cwd()}`,
		index: vfile,
	  });
})
;



vlm.use(paramsapi)
// show any 
vlm.addEventListener('error', async(error)=>{
	await console.error(error)
});

// http://172.24.112.1:9060/ this ip ???


const vlmport:number = 9080;
const vlmhost:string = '192.168.8.100';
export const vlmagr:any = vlmport ?? vlmhost;
vlm.listen({port: vlmagr || vlmhost || vlmport});
// console.log(bgBlue(red(bold("Hello world!"))));
console.log(cyan(bold(`vlm server is listening on port 🙁`)),magenta(`=>:)`),green(dim(` http://${vlmhost}:${vlmport}`)))