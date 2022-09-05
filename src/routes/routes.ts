import { lazy,LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
// import { LazyPage1,LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent =()=>JSX.Element;
interface Route {
    to: string,
    path: string,
    name: string,
    //Se coloca de esta forma, para que acepte la constante Lazy o un FC
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
}

const LazyLayout=lazy(()=>import(/* webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component : LazyLayout,
        name: 'LazyLayout Dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component : NoLazy,
        name: 'No Lazy'
    },
]