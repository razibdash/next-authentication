import { UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <UserProfile />
      </div>
    </div>
  );
};

export default UserProfilePage