import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";

export default function getImageUrl(source: SanityImageSource) {
    const { projectId, dataset } = client.config();
    return(
    projectId && dataset
        ? imageUrlBuilder({ projectId, dataset }).image(source)
        : null
    )
}
