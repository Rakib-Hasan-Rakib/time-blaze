import useAuth from "../hooks/useAuth";

const Draweritem = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="flex gap-2 items-center mb-4">
        <img
          src={user?.photoURL}
          alt="user photo"
          className="w-10 h-10 rounded-full"
        />
        <h4 className="font-semibold">{user?.displayName}</h4>
      </div>
      <li>Time Tracker</li>
      <li>Reports</li>
    </>
  );
};
export default Draweritem;
