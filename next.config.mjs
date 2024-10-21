/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['cubanvr.com']
    },
    // redirect using config file 
    redirects: async()=>{
        return [
            {
                source:'/redirect1',
                destination:"/",
                permanent:false
            },
            {
                source:'/redirect/:id',
                destination:"/",
                permanent:false
            }
        ]
    }



};

export default nextConfig;
