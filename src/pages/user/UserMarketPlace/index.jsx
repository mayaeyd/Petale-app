import { useDispatch, useSelector } from "react-redux";
import UserNavbar from "../../../components/common/UserNavbar";
import GardenerPlantCard from "../../../components/common/GardenerPlantCard";
import CartButton from "../../../components/base/CartButton";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { addItemToCart } from "../../../redux/slices/cartSlice";

export default function UserMarketPlace() {
  const { posts } = useSelector((state) => state.marketplace);
  const navigate = useNavigate();
  console.log(posts);

  const dispatch = useDispatch();
  return (
    <main>
      <UserNavbar />

      <div className="marketplace-container-user">
        <h1
          style={{
            color: "#333",
          }}
        >
          All Plants
        </h1>
        <div>
          {posts?.map((post) => {
            return (
              <GardenerPlantCard
                onClick={() => {
                  navigate(`/user/plant/${post?._id}`);
                }}
                key={post._id}
                imageSrc={post.images[0]}
                title={post.plantName}
                description={post.description}
                price={post.price}
              >
                <CartButton
                  onClick={() => {
                    dispatch(
                      addItemToCart({
                        id: post._id,
                        name: post.plantName,
                        price: post.price,
                        quantity: 1,
                        image: post?.images?.length > 0 ? post.images[0] : "",
                      })
                    );
                  }}
                />
              </GardenerPlantCard>
            );
          })}
        </div>
      </div>
    </main>
  );
}
