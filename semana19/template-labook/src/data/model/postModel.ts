import { POST_TYPES, post } from "../../business/entities/post";

export const convertPostTypesToString = (post: POST_TYPES): string => {
    return post === POST_TYPES.EVENT ? "event" : "normal";
}

export const convertStringToPostType = (post: string): POST_TYPES => {
    if (post === "event") {
        return POST_TYPES.EVENT
    } else if (post === "normal") {
        return POST_TYPES.NORMAL
    }
    throw new Error("Invalid User Role");
}

export type createPostInputDTO = {
    photo: string,
    description: string,
    type: POST_TYPES,
}
 
