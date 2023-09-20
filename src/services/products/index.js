export const getAllAdminProducts = async () => {
    try {
        const res = await fetch("https://alikidi.dexteroustechnology.in/api/v1/news/all", {
            method: "GET",
            cache: "no-store",
        });

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};


export const productById = async (slugurl) => {
    try {
        const res = await fetch(
            `https://alikidi.dexteroustechnology.in/api/v1/news/findbyurl/${slugurl}`,
            {
                method: "GET",
                cache: "no-store",
            }
        );

        const data = await res.json();

        return data;
    } catch (e) {
        console.log(e);
    }
};