"use client";

import { useRouter } from "next/navigation";

const Listingname = ({ item }) => {
    const router = useRouter();
    return (
        <>
            <div>
                {item.map((user) => (
                    <h4 className="my-2" onClick={() => router.push(`/products/${user.slugUrl}`)} key={user._id}>{user.newsTitle}</h4>
                ))}

            </div>
        </>
    )
}

export default Listingname