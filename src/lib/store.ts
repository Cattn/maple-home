import { writable } from "svelte/store";

export type Page = {
    name: string;
    path: string;
    url: {
        pathname: string;
    };
};

export const page = writable<Page>({
    name: '',
    path: '',
    url: {
        pathname: ''
    }
});