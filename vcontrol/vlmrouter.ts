// deno-lint-ignore-file
import {RouterContext} from "./vmodels/vlinks.ts";
import {bcrypt} from "./vmodels/vlinks.ts";
import {vlmform} from "./vmodels/vdb/vusers.ts";


export const vmasignup:any = async (ctx:RouterContext) =>{
    if (ctx.request.hasBody){
        let body = ctx.request.body({type: 'form'});
        const vlmvalue = await body.value;
        const username = vlmvalue.get('name');
        const username1 = vlmvalue.get('sname');
        const email = vlmvalue.get('email');
        const phonenumber = vlmvalue.get('phone');
        const password = vlmvalue.get('password');
        const vlmhash = bcrypt.hashSync('password')

        const vlmdate = new Date();
        const day = vlmdate.getDate();
        const month = vlmdate.getMonth();
        const year = vlmdate.getFullYear();
        const hour= vlmdate.getHours();
        const minute = vlmdate.getMinutes();
        const data = day+'/'+month+'/'+year+' TIME'+'=>: '+hour+':'+minute;
        let vdata:any = await vlmform(username,username1,email,phonenumber, vlmhash);

        ctx.response.redirect('/');

        if(vdata == true){
          ctx.response.redirect('/');
        }
    }
}

export const vmalogin:any = async (ctx:RouterContext)=>{
  if(ctx.request.hasBody){
    console.log('has body')
    let vbody = ctx.request.body({type:'form'})
    const val = await vbody.value
    const vuser= val.get('username');
    const vpassword = val.get('password');
    console.log(vuser,vpassword);
    ctx.response.redirect('/vma@dash');
  }
  else{
    const error = 'no body'
    ctx.response.status = 405
    console.log(error)
  }
}