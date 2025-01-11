import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userThunks } from "../../../redux/admin/thunks/userThunks";
import { useNavigate, useParams } from "react-router-dom";
import {
  selectSelectedUser,
  selectUsersLoading,
} from "../../../redux/admin/adminSlice";
import { CircularProgress } from "@mui/material";
import AdminNavbar from "../../../components/common/AdminNavbar";
import "./style.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import PinkButtonRound from "../../../components/base/PinkButtonRound";
import { AccessTime, AccountCircle, Email } from "@mui/icons-material";
import { PhoneIcon } from "lucide-react";
import GrowingPlantCard from "../../../components/common/GrowingPlantCard";
import GardenerPlantCard from "../../../components/common/GardenerPlantCard";
import SortableTable from "../../../components/common/SortableTable";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectUsersLoading);
  const user = useSelector(selectSelectedUser);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userThunks.fetchUserById(id));
  }, [dispatch, id]);

  if (loading || !user)
    return (
      <div className="spinner-container">
        <CircularProgress />
      </div>
    );

  const orders = user.purchaseHistory;

  const formatDate = (date) => {
    const dateformat = new Date(date);

    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(dateformat);
  };

  const handleBanUser = async () => {
    await dispatch(
      userThunks.banUser({
        userId: user._id,
        isBanned: !user.isBanned,
      })
    );
    navigate(0);
  };

  const headers = [
    { key: "quantity", label: "Quantity", sortable: true },
    { key: "total", label: "Total", sortable: true },
    { key: "address", label: "Buyer Address", sortable: true },
    { key: "date", label: "Purchase Date", sortable: true },
  ];

  const rows = orders.map((order) => ({
    quantity: order.quantity,
    total: `$${order.totalPrice}`,
    address: order.buyerAddress,
    date: formatDate(order.purchaseDate),
    id: order.listingId,
  }));

  return (
    <>
      <AdminNavbar />
      <div className="user-details-container">
        <div className="user-info">
          <div>
            <h1 className="user-name">
              {user?.firstName} {user?.lastName}
            </h1>
            <div className="user-role">
              {user?.role === "gardener" ? (
                <span>
                  <LocalFloristIcon style={{ color: "#858585" }} />
                </span>
              ) : (
                <span>
                  <ShoppingCartIcon style={{ color: "#858585" }} />
                </span>
              )}
              <p>{user.role}</p>
            </div>
          </div>
          <div className="user-action-buttons">
            <PinkButtonRound
              label={
                loading ? (
                  <CircularProgress color="inherit" size="20px" />
                ) : user.isBanned ? (
                  "Unban User"
                ) : (
                  "Ban User"
                )
              }
              onClick={handleBanUser}
            />
          </div>
        </div>
        <div>
          <div className="user-credentials">
            <div>
              <div className="user-detail-title">
                <AccountCircle />
                {user.role} ID
              </div>
              <div className="user-detail-title">
                <PhoneIcon />
                Phone number
              </div>
              <div className="user-detail-title">
                <Email />
                Email Address
              </div>
              <div className="user-detail-title">
                <AccessTime />
                User since
              </div>
            </div>
            <div>
              <div>
                <p>{user._id}</p>
                <p>{user.phoneNumber}</p>
                <p>{user.email}</p>
                <p>{formatDate(user.createdAt)}</p>
              </div>
            </div>
          </div>
        </div>
        {user.role === "gardener" ? (
          <>
            <h2>{user.firstName}'s Growing Plants</h2>
            <div className="gardener-growing-plants">
              {user.gardenerProfile.garden.plants.length > 0 ? (
                user.gardenerProfile.garden.plants.map((plant) => (
                  <GrowingPlantCard
                    key={plant._id}
                    id={plant._id}
                    name={plant.scientificName}
                    date={formatDate(plant.plantedDate)}
                  />
                ))
              ) : (
                <p
                  style={{ color: "#383838", fontFamily: "Proxima Nova Thin" }}
                >
                  "No growing plants yet"
                </p>
              )}
            </div>
            <h2>{user.firstName}'s Posts</h2>
            <div className="gardener-posts">
              {user.gardenerProfile.marketplaceListings.filter(
                (post) => post.status === "available"
              ).length > 0 ? (
                user.gardenerProfile.marketplaceListings
                  .filter((post) => post.status === "available")
                  .map((post) => (
                    <GardenerPlantCard
                      key={post._id}
                      title={post.plantName}
                      description={post.description}
                      price={post.price}
                      imageSrc={post.images[0]}
                    />
                  ))
              ) : (
                <p
                  style={{ color: "#383838", fontFamily: "Proxima Nova Thin" }}
                >
                  "No growing plants yet"
                </p>
              )}
            </div>
            <h2>{user.firstName}'s Sold Plants</h2>
            <div className="gardener-posts">
              {user.gardenerProfile.marketplaceListings.filter(
                (post) => post.status === "sold"
              ).length > 0 ? (
                user.gardenerProfile.marketplaceListings
                  .filter((post) => post.status === "sold")
                  .map((post) => (
                    <GardenerPlantCard
                      key={post._id}
                      title={post.plantName}
                      description={post.description}
                      price={post.price}
                      imageSrc={post.images[0]}
                    />
                  ))
              ) : (
                <p
                  style={{ color: "#383838", fontFamily: "Proxima Nova Thin" }}
                >
                  No sold plants yet
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <h2>{user.firstName}'s Purchases</h2>
            <SortableTable
              headers={headers}
              rows={rows}
              rowActions={(row) => <PinkButtonRound label="View Details" />}
            />
          </>
        )}
      </div>
    </>
  );
};

export default UserDetails;
