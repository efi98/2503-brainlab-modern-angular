import { Color } from "../models/color.model";

export interface AppSlice {
    readonly isBusy: boolean;
    readonly results: Color[];
}

export const initialAppSlice: AppSlice = {
    isBusy: false,
    results: [
    ],
}