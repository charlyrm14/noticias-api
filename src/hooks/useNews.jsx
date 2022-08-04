import { useContext } from "react";
import NewsContext from "../context/NewsProvider";

export function useNews () {
    return useContext( NewsContext );
}
