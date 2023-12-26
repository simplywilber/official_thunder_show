import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder"
import { createClient } from "next-sanity"

export default client = createClient({
  projectId: "sz0x2sco",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: "true",
});

//This will provide an image url since Sanity only responds with an id
const builder = ImageUrlBuilder(client);

export function urlFor(source = any) {
  builder.image(source);
}
