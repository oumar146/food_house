import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

const getImages = async () => {
  try {
    const bucketName = "product-images";

    const { data, error } = await supabase.storage.from(bucketName).list("", {
      limit: 100,
    });

    if (error) {
      throw new Error(`Erreur lors de la récupération des images : ${error.message}`);
    }

    const images = (data || []).map((file) => ({
      name: file.name,
      url: `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/${bucketName}/${file.name}`,
    }));

    return images;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export default getImages;
