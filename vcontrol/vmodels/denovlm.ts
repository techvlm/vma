// // deno-lint-ignore-file
// // import {} from 'https://deno.land/std@0.102.0/_util/assert.ts';
// import {red,dim, green,cyan,bold,magenta,italic} from 'https://deno.land/std@0.102.0/fmt/colors.ts';
// import {STATUS_TEXT} from "https://deno.land/std@0.105.0/http/http_status.ts";
// import {serve} from "https://deno.land/std@0.102.0/http/server.ts";
// import {renderFileToString} from "./vlinks.ts";

// const body = await renderFileToString(`${Deno.cwd()}/vma.ejs`,{title:"vma@"});

// const options:number = 8000 ;
// const hostname:string = '127.0.0.1';

// const conn  = serve({
//     port: options,
//     hostname: hostname
// });

// console.log(cyan(bold(`vlm server is listening on port`)),red(`=>:)`),italic(green(dim(` http://${hostname}:${options}`))));
// for await (const req of conn) {
//     if (req.method = 'GET'){
//         req.respond({ body });
//     }

// };



// interface vlmapp{
//     vlmhost: string;
//     vlmport: string | number | any;
//     http: boolean | true | false;
//     https: boolean | true | false;
//     vlm: any;
// }
// typeof {vlmapp}
// function vlmapp(vlmport:any, vlmhost:any){
//     vlmport: 8000
//     vlmhost: '127.0.0.1'
// }
// console.log(vlmapp)

 