import { useState , useEffect } from "react";
import { PassageUser } from "@passageidentity/passage-elements";

export function userCurrent(){
    const[result,setResult] = useState({
        isLoading: true,
        isAuthorized : false,
        username : ""    
    })

    useEffect(() => {
        let cancelRequest = false;
        new PassageUser().userInfo().then((userInfo)=>{
            if (cancelRequest) return
            if (userInfo === undefined){
                setResult({
                    isLoading: false,
                    isAuthorized: false,
                    username : ""
                });
                return
            }
            setResult({
                isLoading: false,
                isAuthorized: true,
                username: userInfo.email,
            });
        });
        return()=>{
            cancelRequest = true;
        }
    }, []);
    return result;
}