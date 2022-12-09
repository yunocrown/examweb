import { Link } from "react-router-dom";
import React from "react";
import { userCurrent } from "../hooks/userCurrent";

export default function Profile(){
    const { isLoading , isAuthorized , username } = userCurrent();
    if (isLoading) return null;
    if ( !isAuthorized ){
        return (
            <p>
                You must <Link to='../pages/Desktop2'>login</Link>to view this page!
            </p>
        );
    }
    return(
        <p>
            You are signed in as <strong>{username}</strong>
        </p>
    );
}