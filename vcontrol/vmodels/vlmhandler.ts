// deno-lint-ignore-file

import {Context,renderFileToString,yellow ,bold} from "./vlinks.ts";

export const vmaApp:any = async (ctx:Context)=>{
    if(ctx.request.url.pathname = "/"){
        console.log(bold(yellow(ctx.request.url.pathname)));
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/vma.ejs`,{
            title:'vma@home'
        });

    }    
}  

export const vmalog:any = async (ctx:Context)=>{
    if(ctx.request.url.pathname = "/vma@login"){
        console.log(bold(yellow(ctx.request.url.pathname)));
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/vpartial/vmalogin.ejs`,{title:'vma@login'});
    }    
} 
export const vmalogs:any = async (ctx:Context)=>{
    if(ctx.request.url.pathname = "/vma@logout"){
        console.log(bold(yellow(ctx.request.url.pathname)));
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/vpartial/vmalogout.ejs`,{title:'logout'});
    }    
} 

export const vmasign:any = async (ctx:Context)=>{
    if(ctx.request.url.pathname = "/vma@signup"){
        console.log(bold(yellow(ctx.request.url.pathname)));
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/vpartial/vmasignup.ejs`,
        {
            title:'vma@signup',
        });
    }    
} 

export const vmadash:any = async (ctx:Context)=>{
    if(ctx.request.url.pathname = "/vma@dash"){
        console.log(bold(yellow(ctx.request.url.pathname)));
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/vpartial/vmadash.ejs`,{title:'vma@dash'});
    }    
} 