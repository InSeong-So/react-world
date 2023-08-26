import { useParams } from '@solidjs/router';

const ProfilePage = () => {
  const params = useParams();

  return (
    <>
      <h1>프로필 페이지</h1>
      <div>{params.username}</div>
    </>
  );
};

export default ProfilePage;
